import React, { useState, lazy, Suspense } from "react";

// Lazy load the ExploreMore button component
const ExploreMoreButton = lazy(() => import("./ExploreMoreButton"));

const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  // Intersection Observer to lazy load the button
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsButtonVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const target = document.querySelector("#hero-content");
    if (target) {
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          {/* WebP format for modern browsers */}
          <source srcSet="/cabin.webp" type="image/webp" />
          {/* Fallback for older browsers */}
          <img
            src="/cabin.jpeg"
            alt="Lobo Lodge A-Frame Cabin"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="eager"
            width={1920}
            height={1080}
          />
        </picture>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div
        id="hero-content"
        className="relative h-full flex items-center justify-center text-center"
      >
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to Lobo Lodge
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Your perfect A-Frame mountain getaway in Munds Park
          </p>
          {isButtonVisible && (
            <Suspense
              fallback={
                <div className="h-12 w-32 bg-white/20 animate-pulse rounded-full" />
              }
            >
              <ExploreMoreButton />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
