"use client";
import React, { useState, useRef, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Img1 from "/public/Images/Dining/rooftop.webp";
import Img2 from "/public/Images/Dining/Floting Breakfast.webp";
import Img3 from "/public/Images/Dining/Santusti Restro Dine.webp";
import Img4 from "/public/Images/Dining/Cabdel light.webp";
import Img5 from "/public/Images/Dining/Jungle Lunch.webp";
import Img6 from "/public/Images/Dining/room dining.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Sample room data
const rooms = [
  {
    name: "Floating Breakfast",
    image: Img2,
    Des: "Experience an exceptional morning tradition in one of the best hotels in Dehradun - Punarnava. Guests can start their day with a nutrient-packed breakfast on our floating tray right in the pool's freshwater and overlooking the breathtaking Himalayas. ",
  },
  {
    name: "Restro Dining",
    image: Img3,
    Des: "At Punarnava’s restaurant, guests can enjoy a wide range of dining options, including Continental, Indian, Asian, and Mediterranean cuisines. We use only fresh products from our organic gardens, making us one of the top resorts in Dehradun. Our meals are not only tasty but also healthy, incorporating Ayurveda principles. Punarnava’s restaurants offer an excellent atmosphere for both tourists on vacation and business travelers.",
  },
  {
    name: "Candle  Light Dinner",
    image: Img4,
    Des: "Experience romance at Punarnava with a candlelit dinner for two. Couples can enjoy the luxury of dining against the stunning backdrop of the Himalayas. Our delicious food caters to every taste. As one of the best hotels in India, Punarnava’s restaurant is also a popular choice for couples, making us an ideal spot for weddings and engagement ceremonies.",
  },
  {
    name: "Jungle Lunch ",
    image: Img5,
    Des: "Experience the joy of a jungle lunch at Punarnava. Enjoy a delightful day exploring the nearby tropical rainforests, taking leisurely strolls, and savoring delicious meals made with local superfoods. ",
  },
  {
    name: "RoofTop Dining",
    image: Img1,
    Des: "Dive into breathtaking views of the Mussoorie Himalayas at the Punarnava's rooftop restaurant Santushti. At Santushti, enjoy international dishes prepared by the best chefs using locally sourced products. It serves as the best place to relax with friends and family while enjoying the taste of delicious cuisines, making it one of the best hotels in Dehradun for dining.",
  },
  {
    name: "In-room Dining",
    image: Img6,
    Des: "At Punarnava, you can relax in your room and enjoy a truly cozy getaway. We make it easy for you by delivering delicious meals right to your door. This way, you can unwind and have everything you need without any hassle. It's all about making your stay as comfortable and enjoyable as possible.",
  },
];

export default function DiningSlider() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    if (swiperRef) {
      swiperRef.params.navigation.prevEl = prevRef.current;
      swiperRef.params.navigation.nextEl = nextRef.current;
      swiperRef.params.pagination.el = paginationRef.current;
      swiperRef.navigation.update();
      swiperRef.pagination.update();
    }
  }, [swiperRef]);

  return (
    <>
      <div className="flex justify-center mt-4 ">
        <h2 className=" font-cinzel tracking-widest text-black text-2xl text-center uppercase">
          {rooms[currentIndex].name}{" "}
        </h2>
      </div>
      <div className="py-12 sm:px-20 relative">
        <Swiper
          onSwiper={(swiper) => setSwiperRef(swiper)}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={40}
          pagination={{
            el: paginationRef.current,
            type: "fraction",
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          loop={true}
          speed={2500}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          className=""
        >
          {rooms.map((room, index) => (
            <SwiperSlide key={index} className="swiperslide">
              <div className="relative lg:h-96  w-full">
                <Image
                  className="object-cover h-full w-full"
                  src={room.image}
                  alt={room.name}
                  layout=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-1">
          <p className=" font-sans text-black text-sm sm:w-[580px] text-start">
            {rooms[currentIndex].Des}{" "}
          </p>
        </div>
        <div className="flex sm:justify-end justify-center items-center pr-12 gap-x-8">
          <button ref={prevRef} className="custom-prev-button">
            <MdOutlineNavigateBefore className="size-8 text-[black] hover:text-[black]" />
          </button>
          <div
            ref={paginationRef}
            className="custom-pagination text-black font-sans"
          ></div>
          <button ref={nextRef} className="custom-next-button">
            <MdOutlineNavigateNext className="size-8 text-[black] hover:text-[black]" />
          </button>
        </div>
      </div>
    </>
  );
}
