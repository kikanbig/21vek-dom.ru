import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { Loader2 } from "lucide-react";
import Promos from "./pages/Promos";
import KitchenPromo from "./pages/promos/KitchenPromo";
import NPS from "./pages/NPS";
import SetComfortable from "./pages/sets/SetComfortable";
import SetConvenient from "./pages/sets/SetConvenient";
import SetKids from "./pages/sets/SetKids";
import SetDining1 from "./pages/sets/SetDining1";
import SetDining2 from "./pages/sets/SetDining2";
import SetPractical from "./pages/sets/SetPractical";
import SetKitchenLight from "./pages/sets/SetKitchenLight";
import { CookieConsent } from "./components/CookieConsent";

const InspirationPage = lazy(() => import("./pages/InspirationPage"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
  </div>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Promos />} />
            <Route path="/promos" element={<Promos />} />
            <Route path="/promos/kitchen" element={<KitchenPromo />} />
            <Route path="/sets/comfortable" element={<SetComfortable />} />
            <Route path="/sets/convenient" element={<SetConvenient />} />
            <Route path="/sets/kids" element={<SetKids />} />
            <Route path="/sets/dining-1" element={<SetDining1 />} />
            <Route path="/sets/dining-2" element={<SetDining2 />} />
            <Route path="/sets/practical" element={<SetPractical />} />
            <Route path="/sets/kitchen-light" element={<SetKitchenLight />} />
            <Route path="/inspiration/:slug" element={<ArticlePage />} />
            <Route path="/inspiration" element={<InspirationPage />} />
            <Route path="/nps" element={<NPS />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
