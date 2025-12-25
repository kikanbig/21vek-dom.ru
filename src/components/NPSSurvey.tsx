import { useState } from "react";
import { HeartRating } from "./HeartRating";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle2, Loader2, WifiOff } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { submitToGoogleSheets, savePendingSubmission, syncPendingSubmissions, getPendingCount } from "@/lib/sheets";

export const NPSSurvey = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [pendingCount, setPendingCount] = useState(getPendingCount());
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (rating === null) {
      toast({
        title: "Выберите оценку",
        description: "Пожалуйста, выберите оценку от 0 до 10",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    const data = {
      timestamp: new Date().toISOString(),
      rating,
      comment: comment.trim(),
    };

    try {
      if (navigator.onLine) {
        await syncPendingSubmissions();
        await submitToGoogleSheets(data);
      } else {
        savePendingSubmission(data);
        setPendingCount(getPendingCount());
        toast({
          title: "Сохранено локально",
          description: "Ваш отзыв будет отправлен при восстановлении соединения",
        });
      }
      
      setIsSuccess(true);
      
      setTimeout(() => {
        setRating(null);
        setComment("");
        setIsSuccess(false);
        setPendingCount(getPendingCount());
      }, 2500);
      
    } catch (error) {
      savePendingSubmission(data);
      setPendingCount(getPendingCount());
      toast({
        title: "Сохранено локально",
        description: "Произошла ошибка. Отзыв будет отправлен позже.",
      });
      
      setIsSuccess(true);
      setTimeout(() => {
        setRating(null);
        setComment("");
        setIsSuccess(false);
      }, 2500);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 animate-fade-in-up">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[hsl(320,85%,55%)]/20 to-[hsl(270,60%,60%)]/20 flex items-center justify-center mb-8 shadow-lg">
          <CheckCircle2 className="w-16 h-16 text-[hsl(320,85%,55%)] animate-success-check" />
        </div>
        <h2 className="text-4xl font-bold text-foreground mb-3">Спасибо!</h2>
        <p className="text-xl text-muted-foreground">Ваш отзыв очень важен для нас</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col px-8 py-6 lg:px-12 lg:py-8">
      {/* Logo - top center */}
      <header className="flex justify-center animate-fade-in-up">
        <img 
          src={logo} 
          alt="Logo" 
          className="h-16 lg:h-20 w-auto object-contain"
        />
      </header>

      {/* Main content - vertically centered with equal spacing */}
      <main className="flex-1 flex flex-col justify-evenly py-4">
        {/* Question block */}
        <section className="text-center animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground leading-snug max-w-4xl mx-auto">
            Какова вероятность, что вы порекомендуете наш магазин другу или коллеге?
          </h1>
        </section>

        {/* Heart Rating block */}
        <section className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <HeartRating value={rating} onChange={setRating} />
        </section>

        {/* Feedback form block */}
        <section className="w-full max-w-3xl mx-auto space-y-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          <div>
            <label className="block text-lg lg:text-xl font-semibold text-foreground mb-3 text-center">
              Почему вы поставили такую оценку?
            </label>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Поделитесь вашим мнением... (необязательно)"
              className="min-h-[100px] lg:min-h-[120px] text-lg resize-none bg-card border-2 border-border/50 rounded-2xl focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm transition-all"
            />
          </div>

          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || rating === null}
            size="lg"
            className={cn(
              "w-full h-14 lg:h-16 text-lg lg:text-xl font-semibold rounded-2xl shadow-lg transition-all duration-300",
              "bg-gradient-to-r from-[hsl(320,85%,55%)] to-[hsl(270,60%,60%)] hover:shadow-xl hover:scale-[1.01]",
              "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Отправка...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Отправить
              </>
            )}
          </Button>
          
          {/* Offline indicator */}
          {pendingCount > 0 && (
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <WifiOff className="w-4 h-4" />
              <span>Ожидает: {pendingCount}</span>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};
