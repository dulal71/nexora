"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link"; // Link ইমপোর্ট করলাম

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const bannerData = [
  {
    id: 1,
    title: "NEW COLLECTION",
    subtitle: "SALE UP TO 50% OFF",
    description: "Discover premium fashion collection now.",
    buttonText: "Shop Now",
    image: "/image/banner-image.avif",
    link: "/shop",
  },
  {
    id: 2,
    title: "WINTER VIBES",
    subtitle: "LIMITED EDITION",
    description: "Stay warm with modern winter style.",
    buttonText: "Explore",
    image: "/image/banner-image-4.avif",
    link: "/collections/winter",
  },
  {
    id: 3,
    title: "SUMMER SPECIAL",
    subtitle: "HOT DEALS",
    description: "Fresh summer collection available now.",
    buttonText: "View More",
    image: "/image/banner-image-3.avif",
    link: "/collections/summer",
  },
];

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-[80vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {bannerData.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div
              className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div
                key={activeIndex === index ? "active" : "inactive"}
                className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 text-center text-white"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-2xl"
                >
                  {item.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="uppercase tracking-[8px] text-xs md:text-sm text-gray-300 font-medium mb-4"
                >
                  {item.subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-gray-200 text-base md:text-lg max-w-lg leading-relaxed mb-8 font-light"
                >
                  {item.description}
                </motion.p>

                {/* বাটন উইথ লিঙ্ক */}
                <Link href={item.link} passHref>
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 backdrop-blur-sm"
                  >
                    {item.buttonText}
                  </motion.button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}