import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";


interface Product {
  id: string;
  external_id: string | null;
  name: string;
  description: string | null;
  main_image: string | null;
  images: string[] | null;
  source_url: string | null;
}

// Product IDs from the user's list
const PRODUCT_IDS = [
  "10019573", "10019597", "9486886", "10033342", "10033346", "10033351", "10033375", 
  "8687700", "7737229", "8109633", "7690981", "7691297", "7693209", "7743142", 
  "7923495", "8013948", "8711055", "9015621", "8634616", "10018974", "10018941", 
  "10019577", "10019020", "8634536", "10033333", "8693001", "10018977", "10018990", 
  "10018999", "8838794", "10019564", "10018968", "8690508", "10033339", "8427557", 
  "8822903", "10019424", "10033318", "8469337", "10019037", "10033331", "8427532",
  "10077109", "10077117", "10077122", "10077126", "10077129", "10077130", "10077133",
  "10077138", "10077142", "10077148", "10077157", "10077159", "10077112", "10077118",
  "10077127", "10077135", "10077145", "10077150", "10077152", "10077154", "10077161",
  "8691200", "10091611", "10091613", "10091616", "10091617", "10091619", "10091621",
  "10091623", "10091624", "10091626", "10091629", "10091631", "10091632", "10091633",
  "10091634", "10091635", "10091636", "10091638", "10091639", "8320861", "10136574",
  "10136543", "10136532", "10136560", "10136524", "10136454", "10136456", "10136450",
  "10136513", "10136433", "10136467", "10136460", "10136436", "10136536", "10136483",
  "10136490", "10136507", "10136518", "10136496", "10136358", "10136333", "10136339",
  "10136350", "10136361", "10136582", "10136528", "10136427", "10136509", "10136551",
  "10136442", "10136447", "10136459", "10136493", "10136446", "10136479", "10136485",
  "10136539", "10136555", "10136568", "10136577", "10136522", "10136451", "10136480",
  "10136474", "10140754", "10140760", "10140752", "10140755", "10140753", "10140757",
  "10140763", "10140765", "10140764", "10140767", "10140782", "10140784", "10140775",
  "10140777", "10140778", "10140773", "10140774", "10141415", "10140786", "10140794",
  "10140797", "10140792", "10140791", "10140796", "10132268", "10132281", "10132272",
  "10132274", "10132270", "10132279", "10132277", "10132278", "10132287", "10132265",
  "10132292", "10141727", "10142551", "10141739", "10142556", "10141788", "10141782",
  "10141758", "10141743", "10141766", "10141833", "10141795", "10141823", "10141843",
  "10141763", "10141805", "10141898", "10142104", "10141873", "10142127", "10142301",
  "10142111", "10142407", "10142291", "10142418", "10142390", "10142426", "10142440",
  "10142461", "10142497", "10142434", "10142450", "10142511", "10142501", "10142521",
  "10142542", "10142357", "10142370", "10141751", "10162252", "10162210", "10162207",
  "10142168", "10142135", "10142612", "10142605", "10142607", "10142608", "10142581",
  "10142588", "10141694", "10141663", "10141702", "10141691", "10141719", "10141709",
  "10141492", "10141655"
];

// Remove duplicates
const UNIQUE_PRODUCT_IDS = [...new Set(PRODUCT_IDS)];

export const ProductCatalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [scraping, setScraping] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);
  const { toast } = useToast();

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить товары",
        variant: "destructive",
      });
    } else {
      setProducts(data || []);
      setVisibleCount(24);
    }
    setLoading(false);
  };

  const prefetchedUrlsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    fetchProducts();
  }, []);

  // Prefetch next batch of images when products change or visibleCount changes
  useEffect(() => {
    if (products.length === 0) return;
    
    // Prefetch images for the NEXT batch (items visibleCount to visibleCount+24)
    const nextBatchStart = visibleCount;
    const nextBatchEnd = Math.min(visibleCount + 24, products.length);
    const nextBatch = products.slice(nextBatchStart, nextBatchEnd);
    
    nextBatch.forEach((product) => {
      if (product.main_image && !prefetchedUrlsRef.current.has(product.main_image)) {
        prefetchedUrlsRef.current.add(product.main_image);
        // Create a hidden image to prefetch
        const img = new Image();
        img.src = `https://likrmbiziyezyhemyodz.supabase.co/functions/v1/proxy-image?url=${encodeURIComponent(product.main_image)}&size=small`;
      }
    });
  }, [products, visibleCount]);

  const handleScrape = async () => {
    setScraping(true);
    const total = UNIQUE_PRODUCT_IDS.length;

    toast({
      title: "Парсинг запущен",
      description: `Загружаем ${total} товаров. Это займёт несколько минут...`,
    });

    let totalScraped = 0;
    let totalErrors = 0;
    const BATCH_SIZE = 2; // маленький batch = меньше таймаутов
    const MAX_RETRIES = 2;

    for (let i = 0; i < total; i += BATCH_SIZE) {
      const batch = UNIQUE_PRODUCT_IDS.slice(i, i + BATCH_SIZE);
      let success = false;

      for (let attempt = 0; attempt <= MAX_RETRIES && !success; attempt++) {
        try {
          const { data, error } = await supabase.functions.invoke('scrape-product', {
            body: { productIds: batch },
          });

          if (error) {
            console.warn(`Batch ${i}–${i + batch.length} attempt ${attempt + 1} error:`, error);
            if (attempt < MAX_RETRIES) {
              await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
              continue;
            }
            totalErrors += batch.length;
          } else if (data) {
            totalScraped += data.scraped || 0;
            totalErrors += data.errors || 0;
            success = true;
          }
        } catch (err) {
          console.error(`Batch ${i} exception:`, err);
          if (attempt < MAX_RETRIES) {
            await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
            continue;
          }
          totalErrors += batch.length;
        }
      }

      // Прогресс каждые 10 товаров
      if ((i + BATCH_SIZE) % 10 === 0 || i + BATCH_SIZE >= total) {
        toast({
          title: "Прогресс парсинга",
          description: `Обработано ${Math.min(i + BATCH_SIZE, total)} / ${total}`,
        });
      }

      // Короткая пауза между батчами
      await new Promise((r) => setTimeout(r, 300));
    }

    toast({
      title: "Парсинг завершён",
      description: `✓ ${totalScraped} товаров, ✗ ${totalErrors} ошибок`,
    });

    setScraping(false);
    fetchProducts();
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground">Каталог товаров</h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 bg-muted/50 rounded-lg">
            <p className="text-6xl mb-4">📦</p>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Каталог пуст
            </h3>
            <p className="text-muted-foreground mb-6">
              Нажмите "Загрузить товары", чтобы спарсить каталог с 21vek.by
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.slice(0, visibleCount).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>

            {visibleCount < products.length && (
              <div className="flex justify-center mt-8">
                <Button
                  variant="outline"
                  onClick={() => setVisibleCount((c) => Math.min(c + 24, products.length))}
                >
                  Показать ещё
                </Button>
              </div>
            )}
          </>
        )}

        <ProductModal
          product={selectedProduct}
          open={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </section>
  );
};
