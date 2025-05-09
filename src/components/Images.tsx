import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { photos, Photo } from "../data/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Divider from "./Divider";

declare global {
  interface Window {
    jQuery?: any;
  }
}

const Images: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  // Remove jQuery dependency
  useEffect(() => {
    // Remove jQuery migrate warning
    if (window.jQuery?.browser) {
      delete window.jQuery.browser;
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    arrows: true,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
    // Add modern settings
    lazyLoad: "progressive" as const,
    useCSS: true,
    useTransform: true,
    waitForAnimate: false,
    swipeToSlide: true,
  };

  const handleThumbnailClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <section id="photos" className="py-20 bg-black">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Photo Gallery
        </h2>
        {/* Main Image Slider */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl mb-8">
          <Slider ref={sliderRef} {...settings}>
            {photos.map((photo: Photo, index: number) => (
              <div
                key={photo.id}
                className="relative h-[600px] md:h-[700px] lg:h-[800px]"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  width={photo.width}
                  height={photo.height}
                  decoding="async"
                />
                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {index + 1} / {photos.length}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-8 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2">
          {photos.map((photo: Photo, index: number) => (
            <div
              key={photo.id}
              onClick={() => handleThumbnailClick(index)}
              className={`relative h-24 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                currentSlide === index
                  ? "ring-2 ring-blue-500 scale-105"
                  : "hover:opacity-75"
              }`}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                width={photo.width}
                height={photo.height}
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
      <Divider />
    </section>
  );
};

export default Images;
