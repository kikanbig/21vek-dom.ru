const VirtualTour = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Виртуальный тур по магазину
          </h2>
          <p className="text-muted-foreground">
            Познакомьтесь с нашим магазином, не выходя из дома
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/OB4FfyMVGnw"
              title="Виртуальный тур по магазину 21vek.by ДОМ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
