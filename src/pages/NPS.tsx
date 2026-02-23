import { NPSSurvey } from "@/components/NPSSurvey";
import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { RotateCw, Home } from "lucide-react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("NPS Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background">
          <div className="text-center space-y-6 p-8">
            <h1 className="text-3xl font-bold text-destructive">Произошла ошибка</h1>
            <p className="text-muted-foreground">Не удалось загрузить страницу опроса</p>
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={() => window.location.reload()}
                variant="outline"
                className="gap-2"
              >
                <RotateCw className="h-4 w-4" />
                Перезагрузить страницу
              </Button>
              <Button 
                onClick={() => window.location.href = '/'}
                className="gap-2"
              >
                <Home className="h-4 w-4" />
                На главную
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const NPS = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <NPSSurvey />
      </div>
    </ErrorBoundary>
  );
};

export default NPS;
