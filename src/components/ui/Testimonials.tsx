"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const REVIEWS_DATA = [
  {
    id: 1,
    name: "MS. EDNA",
    role: "CEO & Co-Founder",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    comment:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    id: 2,
    name: "MR. KEN",
    role: "Designer & Manager",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    comment:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
  },
  {
    id: 3,
    name: "JANE DOE",
    role: "Support Team",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    comment:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum.",
  },
  {
    id: 4,
    name: "JOHN SMITH",
    role: "Marketing Lead",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    comment:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 5,
    name: "JANE DOE",
    role: "Support Team",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    comment:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum.",
  },
  {
    id: 6,
    name: "MR. KEN",
    role: "Designer & Manager",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    comment:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
  },
];

export default function Testimonials() {
 const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="w-full  min-h-[600px] py-16 px-4 md:px-12 ">

   <div className="max-w-7xl mx-auto">
       {/* HEADER */}
      <div className="text-center mb-12">
        <span className="text-xs md:text-md italic text-gray-500 block mb-1">
          Whats clients say
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold dark:text-white uppercase tracking-widest">
          TESTIMONIALS
        </h2>
        <div className="w-12 border-t border-dotted border-gray-400 mx-auto mt-3"></div>
      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="pb-10"
      >
        {REVIEWS_DATA.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="group relative bg-white dark:bg-black pt-16 pb-8 px-6 text-center shadow-sm border border-gray-100 flex flex-col justify-between mt-12 transition hover:bg-[#89A6C4]">

              {/* AVATAR */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-white p-1 shadow-sm border overflow-hidden">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="text-md font-black tracking-wider">
                  {review.name}
                </h3>

                <span className="text-sm text-[#7FA3CB] font-medium block mb-4 group-hover:text-white">
                  {review.role}
                </span>

                <div className="text-gray-200 text-3xl font-serif leading-none h-3 text-left pl-2">
                  “
                </div>

                <p className="text-gray-500 group-hover:text-white leading-relaxed">
                  {review.comment}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* BOTTOM BUTTONS */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
         
        >
         <FiArrowLeft />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}>
         <FiArrowRight />
        </button>
      </div>
   </div>
    </div>
  );
}