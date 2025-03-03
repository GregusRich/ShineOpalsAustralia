"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

export default function HomePage() {
  const images = [
    "/images/slide-1.jpg",
    "/images/slide-2.jpg",
  ];

  return (
    <main className="w-full bg-white">
      {/* Background Image Slider */}
      <div className="relative w-full">
        <Swiper
          effect="fade"
          modules={[EffectFade, Autoplay]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto max-h-[600px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* White Space for Text Content */}
      <div className="w-full text-center py-12 px-6">
        <h2 className="text-4xl font-semibold">About Shine Opals</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Discover the beauty of Australian opals, hand-crafted into stunning jewelry pieces. Our collection showcases elegance and authenticity.
        </p>
      </div>
    </main>
  );
}
