import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RotateCw, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center space-y-6">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Страница не найдена</p>
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={handleReload}
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
};

export default NotFound;
