"use client";
import React from "react";
/* eslint-disable @next/next/no-img-element */
import { useRef, useState, useEffect } from "react";
import Header from "../_Components/Header.jsx";
import Banner from "/public/Images/gallery/GALLERY BANNER.webp";
import Footer from "../_Components/Footer";
import Image from "next/image.js";
import Head from "next/head.js";

export default function GalleryMeta() {
  const Wedding = [
    "/Images/gallery/Aahuti.webp",
    "/Images/gallery/jalsa.webp",
    "/Images/gallery/Mangasutra.webp",
    "/Images/gallery/vivah.webp",
    "/Images/gallery/weeding banner.webp",
    // Add more image URLs
  ];
  const Villas = [
    "/Images/rooms/Villa.webp",
    "/Images/rooms/Villa1.webp",
    "/Images/rooms/Villa2.webp",
    "/Images/rooms/Villa3.webp",
    "/Images/rooms/Villa4.webp",
    // Add more image URLs
  ];

  const Cottage = [
    "/Images/rooms/Cotage.webp",
    "/Images/rooms/cotage1.webp",
    "/Images/rooms/cotage2.webp",
    "/Images/rooms/cotage3.webp",
    "/Images/rooms/cotage4.webp",
    // Add more image URLs
  ];

  const RoomsAndSuites = [
    "/Images/rooms/delux1.webp",
    "/Images/rooms/delux2.webp",
    "/Images/rooms/delux3.webp",
    "/Images/suits/Family-suites.webp",
    "/Images/suits/Family-suites1.webp",
    "/Images/suits/Family-suites2.webp",
    // Add more image URLs
  ];

  const Dining = [
    "/Images/Dining/rooftop.webp",
    "/Images/Dining/Floting Breakfast.webp",
    "/Images/Dining/Santusti Restro Dine.webp",
    "/Images/Dining/Cabdel light.webp",
    "/Images/Dining/Jungle Lunch.webp",
    "/Images/Dining/room dining.webp",
    // Add more image URLs
  ];
  const Activities = [
    "/Images/Activity/plant.webp",
    "/Images/Activity/tracking.webp",
    "/Images/Activity/waterfall.webp",
    "/Images/Activity/naturewalk.webp",
    "/Images/Activity/Yoga meditation.webp",
    // "/Images/Activity/mandir.jpg",
    // Add more image URLs
  ];

  const Spa = [
    "/Images/WellmessAndSpa/1.webp",
    "/Images/WellmessAndSpa/4.webp",
    "/Images/WellmessAndSpa/2.webp",
    "/Images/WellmessAndSpa/3.webp",
    "/Images/WellmessAndSpa/image.webp",
    // Add more image URLs
  ];

  const [activeSection, setActiveSection] = useState("Wedding");

  const WeddingRef = useRef(null);
  const cottageRef = useRef(null);
  const RoomsAndSuitesRef = useRef(null);
  const DiningRef = useRef(null);
  const ActivitiesRef = useRef(null);
  const SpaRef = useRef(null);
  const VillasRef = useRef(null);

  const handleScroll = (section) => {
    setActiveSection(section);
    if (section === "Wedding") {
      WeddingRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Villas") {
      VillasRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Cottage") {
      cottageRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "RoomsAndSuites") {
      RoomsAndSuitesRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Dining") {
      DiningRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Activities") {
      ActivitiesRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Spa") {
      SpaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = document.documentElement.scrollHeight * 0.1; // 1% of the page height

      if (scrollPosition > triggerPosition) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Header />
      <section>
        <div className="overflow-hidden sm:pt-0 pt-16 ">
          <Image
            alt="About us image"
            loading="lazy"
            className="w-full h-full object-cover "
            src={Banner}
            layout=""
          ></Image>
        </div>
      </section>
      <div className="container mx-auto px-4 sm:pt-8 pt-4 ">
        <div>
          <h1 className="text-3xl font-semibold text-center sm:mb-8 mb-0 font-cinzel uppercase ">
            Gallery
          </h1>
        </div>
        <section className="relative">
          <div
            className={`${
              isFixed ? "fixed sm:top-[85px] top-[65px]" : "relative"
            } w-full left-0 bg-white z-10 shadow-sm transition-all duration-300`}
          >
            <div className="flex justify-center sm:mt-4 mt-0 p-4">
              <div className="border-b-2 border-[#BE9343] sm:p-4 p-1 sm:w-[850px]">
                <div className="sm:mt-2 mt-0">
                  <button
                    className={`border-2 px-4 py-1 sm:mt-0 mt-2  rounded-lg font-sans mr-4 text-xs font-semibold ${
                      activeSection === "Wedding"
                        ? "bg-[#BE9343] text-white"
                        : "border-[#BE9343] text-[#BE9343]"
                    }`}
                    onClick={() => handleScroll("Wedding")}
                  >
                    Wedding
                  </button>
                  <button
                    className={`border-2 px-4 py-1 sm:mt-0 mt-2 rounded-lg font-sans mr-4 text-xs font-semibold ${
                      activeSection === "Villas"
                        ? "bg-[#BE9343] text-white"
                        : "border-[#BE9343] text-[#BE9343]"
                    }`}
                    onClick={() => handleScroll("Villas")}
                  >
                    Villas
                  </button>
                  <button
                    className={`border-2 px-4 py-1 sm:mt-0 mt-2 rounded-lg font-sans mr-4 text-xs font-semibold ${
                      activeSection === "Cottage"
                        ? "bg-[#BE9343] text-white"
                        : "border-[#BE9343] text-[#BE9343]"
                    }`}
                    onClick={() => handleScroll("Cottage")}
                  >
                    Cottage
                  </button>
                  <button
                    className={`border-2 px-4 py-1 sm:mt-0 mt-2 rounded-lg font-sans mr-4 text-xs font-semibold ${
                      activeSection === "RoomsAndSuites"
                        ? "bg-[#BE9343] text-white"
                        : "border-[#BE9343] text-[#BE9343]"
                    }`}
                    onClick={() => handleScroll("RoomsAndSuites")}
                  >
                    Rooms & Suites
                  </button>
                  <button
                    className={`border-2 px-4 py-1 sm:mt-0 mt-2 rounded-lg font-sans mr-4 text-xs font-semibold ${
                      activeSection === "Dining"
                        ? "bg-[#BE9343] text-white"
                        : "border-[#BE9343] text-[#BE9343]"
                    }`}
                    onClick={() => handleScroll("Dining")}
                  >
                    Dining
                  </button>
                  <button
                    className={`border-2 px-4 py-1 sm:mt-0 mt-2 rounded-lg font-sans mr-4 text-xs font-semibold ${
                      activeSection === "Activities"
                        ? "bg-[#BE9343] text-white"
                        : "border-[#BE9343] text-[#BE9343]"
                    }`}
                    onClick={() => handleScroll("Activities")}
                  >
                    Activities
                  </button>
                  <button
                    className={`border-2 px-4 py-1 sm:mt-0 mt-2 rounded-lg font-sans mr-4 text-xs font-semibold ${
                      activeSection === "Spa"
                        ? "bg-[#BE9343] text-white"
                        : "border-[#BE9343] text-[#BE9343]"
                    }`}
                    onClick={() => handleScroll("Spa")}
                  >
                    Spa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Wedding" ref={WeddingRef}>
          <h2 className="text-3xl font-semibold text-start mb-8 py-6">
            Wedding
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Wedding.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105"
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <br />
        <section id="Villas" ref={VillasRef}>
          <h2 className="text-3xl font-semibold text-start mb-8 py-6">
            Villas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Villas.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105"
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
        <section id="Cottage" ref={cottageRef}>
          <h2 className="text-3xl font-semibold text-start mb-8 py-6">
            Cottage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Cottage.map((src, index) => (
              // <div
              //   key={index}
              //   className={`relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105
              //   ${index % 5 === 0 ? "col-span-2 row-span-2" : ""}
              //   ${index % 7 === 0 ? "rotate-0" : "rotate-0"}
              // `}
              // >
              <div
                key={index}
                className="relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105"
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <br />

        <section id="RoomsAndSuites" ref={RoomsAndSuitesRef}>
          <h2 className="text-3xl font-semibold text-start mb-8 py-6">
            Rooms & Suites
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {RoomsAndSuites.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105"
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <br />

        <section id="Dining" ref={DiningRef}>
          <h2 className="text-3xl font-semibold text-start mb-8 py-6">
            Dining
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Dining.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105"
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="Activities" ref={ActivitiesRef}>
          <h2 className="text-3xl font-semibold text-start mb-8 py-6">
            Activities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Activities.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105"
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="Spa" ref={SpaRef}>
          <h2 className="text-3xl font-semibold text-start mb-8 py-6">Spa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Spa.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105"
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
