/* eslint-disable @next/next/no-img-element */
// Pages/rooms/Page.js
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Header from "../_Components/Header";
import Footer from "../_Components/Footer";
// import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Slider from "react-slick";
// Import slick-carousel css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "/public/Images/rooms/banner3.jpg";
import Script from "next/script";
import Link from "next/link";

// import Amenities from "../_Components/Amenities";
export default function RoomsMeta() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleAmenities, setVisibleAmenities] = useState({});
  const [category, setCategory] = useState("All"); // Default to show all rooms
  const toggleTextVisibility = (roomName) => {
    setVisibleAmenities((prevState) => ({
      ...prevState,
      [roomName]: !prevState[roomName],
    }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    fetch("/api/room", {
      headers: {
        "Cache-Control": "no-cache",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Error: ${response.status}`);
      })
      .then((data) => {
        setRooms(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the rooms!", error);
        setError(`There was an error fetching the rooms! ${error.message}`);
        setLoading(false);
      });
  }, []);
  const filterRoomsByCategory = () => {
    if (category === "All") {
      return rooms;
    } else {
      return rooms.filter((room) => room.category === category);
    }
  };

  return (
    <>
      <Header />
      <section className="">
        <div className="flex justify-center overflow-hidden relative sm:pt-0 pt-16 ">
          <Image
            className="w-full h-full object-cover"
            src={Banner}
            alt="destination wedding"
            loading="lazy"
          />
        </div>
      </section>

      <div className="block justify-center mt-6">
        <div id="quickbook-widget"></div>

        <Script
          src="https://www.swiftbook.io/plugin/js/booking-service.min.js"
          id="propInfo"
          propertyid="423MTkBCCnHDj92hDroqmMfZLfi2Mzc="
          cal-rendererId="quickbook-widget"
          JDRN="Y"
          strategy="lazyOnload"
        />
      </div>

      <section>
        <div className="flex justify-center mt-4 p-4">
          <div className="border-b-2 border-[#BE9343] p-4 sm:w-[850px]">
            <div>
              <h2 className="text-lg ps-2 font-semibold text-[#BE9343] pb-6">
                Check-in time 3 p.m. Check-out time 12 p.m.
              </h2>
              <h1 className="text-xs ps-2 font-semibold text-[#BE9343]">
                Room Type
              </h1>
            </div>
            <div className="mt-2 ">
              <button
                className={`border-2 px-4 py-1 sm:mt-0 mt-2 rounded-lg font-sans mr-4 text-sm font-semibold border-[#BE9343] text-[#BE9343] ${
                  category === "Room" ? "bg-[#BE9343] text-white" : ""
                }`}
                onClick={() => setCategory("Room")}
              >
                Room
              </button>
              <button
                className={`border-2 px-4 py-1 sm:mt-0 mt-2 rounded-lg font-sans mr-4 text-sm font-semibold border-[#BE9343] text-[#BE9343] ${
                  category === "Suite" ? "bg-[#BE9343] text-white" : ""
                }`}
                onClick={() => setCategory("Suite")}
              >
                Suites
              </button>
              <button
                className={`border-2 px-4 py-1 sm:mt-0 mt-2 rounded-lg font-sans mr-4 text-sm font-semibold border-[#BE9343] text-[#BE9343] ${
                  category === "Cotage" ? "bg-[#BE9343] text-white" : ""
                }`}
                onClick={() => setCategory("Cotage")}
              >
                Cotages
              </button>
              <button
                className={`border-2 px-4 py-1 sm:mt-0 mt-2 rounded-lg font-sans mr-4 text-sm font-semibold border-[#BE9343] text-[#BE9343] ${
                  category === "Villa" ? "bg-[#BE9343] text-white" : ""
                }`}
                onClick={() => setCategory("Villa")}
              >
                Villas
              </button>
              <button
                className={`border-2 px-4 py-1 sm:mt-0 mt-2 rounded-lg font-sans mr-4 text-sm font-semibold border-[#BE9343] text-[#BE9343] ${
                  category === "All" ? "bg-[#BE9343] text-white" : ""
                }`}
                onClick={() => setCategory("All")}
              >
                All
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center sm:pt-12 py-12 gap-12 lg:mx-8 lg::px-12">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            filterRoomsByCategory().map((room) => (
              <div key={room.id}>
                <div className=" flex justify-center">
                  <div className="border-2 ">
                    <Slider
                      {...settings}
                      className="lg:w-[450px] w-[400px]  sm:h-72 overflow-hidden flex justify-center"
                    >
                      {room.image.map((image) => (
                        <div key={image} className=" flex justify-center">
                          <img
                            src={image}
                            alt={room.name}
                            className="w-full h-full object-cover brightness-125 contrast-100"
                          />
                        </div>
                      ))}
                    </Slider>
                    <div className="p-4">
                      <h2 className="text-[#be9343] font-cinzel uppercase tracking-widest py-2 text-sm">
                        {room.name}
                      </h2>
                      <h2 className="text-[#be9343] font-sans pb-4 text-sm ">
                        <span className="text-gray-800 font-bold mr-4">
                          {room.ft}
                        </span>
                        <span className="text-gray-800 font-bold">
                          {room.view}
                        </span>
                      </h2>
                      <p className="sm:w-96 text-xs font-sans  sm:line-clamp-6 ">
                        {room.description}
                      </p>
                    </div>
                    <div className="flex justify-between px-4 text-xs font-bold pb-2  items-center">
                      <div>
                        <div className="flex items-center gap-x-2">
                          <div>
                            <h2>In Room Amenites</h2>
                          </div>
                          <div>
                            <button
                              className="pt-1"
                              onClick={() => toggleTextVisibility(room.name)}
                            >
                              {visibleAmenities[room.name] ? (
                                <IoIosArrowUp />
                              ) : (
                                <IoIosArrowDown />
                              )}
                            </button>
                          </div>
                        </div>
                        {visibleAmenities[room.name] && (
                          <div>
                            {room.roomAmenities.map((amenity) => (
                              <li key={amenity}>{amenity}</li>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-x-1  text-sm hover:text-[#84662e] font-raleway tracking-widest text-[#be9343]">
                        {/* <Link href={`/Room-suites/${room.id}`}> */}
                        <Link
                          target="blank"
                          href="https://www.swiftbook.io/inst/#home?propertyId=322MTLBmiYVgNQzaaMpAFk2Mzc=&JDRN=Y"
                        >
                          <button className="px-4 py-2 rounded-lg text-xm font-sans border-2 border-[#84662e] hover:bg-[#be9343] hover:text-white">
                            Book now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
