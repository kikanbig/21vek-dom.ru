import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Promos from "./pages/Promos";
import SetComfortable from "./pages/sets/SetComfortable";
import SetConvenient from "./pages/sets/SetConvenient";
import SetKids from "./pages/sets/SetKids";
import SetDining1 from "./pages/sets/SetDining1";
import SetDining2 from "./pages/sets/SetDining2";
import SetPractical from "./pages/sets/SetPractical";
import SetKitchenLight from "./pages/sets/SetKitchenLight";
import KitchenPromo from "./pages/promos/KitchenPromo";
import NPS from "./pages/NPS";
import InspirationPage from "./pages/InspirationPage";
import ArticlePage from "./pages/ArticlePage";
import { Loader2 } from "lucide-react";

const ShopCatalog = lazy(() => import("./pages/ShopCatalog"));
const ProductPage = lazy(() => import("./pages/ProductPage"));

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/shop" element={<ShopCatalog />} />
            <Route path="/shop/:category" element={<ShopCatalog />} />
            <Route path="/shop/:category/:subcategory" element={<ShopCatalog />} />
            <Route path="/product/:code" element={<ProductPage />} />
            <Route path="/promos" element={<Promos />} />
            <Route path="/sets/comfortable" element={<SetComfortable />} />
            <Route path="/sets/convenient" element={<SetConvenient />} />
            <Route path="/sets/kids" element={<SetKids />} />
            <Route path="/sets/dining-1" element={<SetDining1 />} />
            <Route path="/sets/dining-2" element={<SetDining2 />} />
            <Route path="/sets/practical" element={<SetPractical />} />
            <Route path="/sets/kitchen-light" element={<SetKitchenLight />} />
            <Route path="/promos/kitchen" element={<KitchenPromo />} />
            <Route path="/nps" element={<NPS />} />
            <Route path="/inspiration" element={<InspirationPage />} />
            <Route path="/inspiration/:slug" element={<ArticlePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
