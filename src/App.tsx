import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Новые страницы из dom.21vek
import Landing from "./pages/Landing";
import Shop from "./pages/Shop";
import Promos from "./pages/Promos";
import SetComfortable from "./pages/sets/SetComfortable";
import SetConvenient from "./pages/sets/SetConvenient";
import SetKids from "./pages/sets/SetKids";
import SetDining1 from "./pages/sets/SetDining1";
import SetDining2 from "./pages/sets/SetDining2";
import SetPractical from "./pages/sets/SetPractical";

// Сохраненные страницы из других репозиториев
import Opening from "./pages/Opening";
import Regions from "./pages/Regions";
import NPS from "./pages/NPS";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <Routes>
          {/* Главная страница - Landing из dom.21vek */}
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/promos" element={<Promos />} />
          
          {/* Сеты из dom.21vek */}
          <Route path="/sets/comfortable" element={<SetComfortable />} />
          <Route path="/sets/convenient" element={<SetConvenient />} />
          <Route path="/sets/kids" element={<SetKids />} />
          <Route path="/sets/dining-1" element={<SetDining1 />} />
          <Route path="/sets/dining-2" element={<SetDining2 />} />
          <Route path="/sets/practical" element={<SetPractical />} />
          
          {/* Страницы из других репозиториев */}
          <Route path="/opening" element={<Opening />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/nps" element={<NPS />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
