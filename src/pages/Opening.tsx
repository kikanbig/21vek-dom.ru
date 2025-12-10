import { Header } from '@/components/Header';
import { VideoSection } from '@/components/VideoSection';
import { PhotoGallery } from '@/components/PhotoGallery';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <VideoSection />
        <PhotoGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
