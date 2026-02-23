import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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
import Promo14 from "./pages/Promo14";
import NPS from "./pages/NPS";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<Index />} />
          <Route path="/promos" element={<Promos />} />
          <Route path="/sets/comfortable" element={<SetComfortable />} />
          <Route path="/sets/convenient" element={<SetConvenient />} />
          <Route path="/sets/kids" element={<SetKids />} />
          <Route path="/sets/dining-1" element={<SetDining1 />} />
          <Route path="/sets/dining-2" element={<SetDining2 />} />
          <Route path="/sets/practical" element={<SetPractical />} />
          <Route path="/sets/kitchen-light" element={<SetKitchenLight />} />
          <Route path="/promo14" element={<Promo14 />} />
          <Route path="/nps" element={<NPS />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
