"use client";
import React from "react";
import DiningSlider from "./DiningSlider";
import Link from "next/link";
import Back from "/public/Images/download.png";
export default function Dining() {
  return (
    <div>
      <div
        className="sm:px-20 px-4 py-12 bg-opacity-80  bg-cover bg-fixed bg-center bg-no-repeat  "
        style={{
          backgroundImage: `url(${Back.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <div className="sm:flex block justify-between">
            <div>
              <h2 className="text-3xl font-extralight font-cinzel uppercase tracking-widest text-black">
                Dining
              </h2>
              <br />
              <p className="sm:w-[450px] font-sans text-sm text-black">
                Here at Punarnava, we strive to give our guests the best
                experience in in-room dining—an experience that remains
                unforgettable. We believe that feasting with family, friends,
                and loved ones should be done properly and with the highest
                quality available. Guests can indulge in a symphony of tastes
                and flavors while taking in the amazing scenery, which makes it
                a perfect place for both the palate and the soul in this
                enchanting natural setting.
              </p>
            </div>
            <div>
              <Link href="/dining">
                <button className="px-4 py-2 sm:mt-0 mt-4 border-[#be9343] text-black hover:bg-[#be9343] hover:text-white border-2 rounded-sm text-sm font-raleway tracking-widest shadow-xl cursor-pointer">
                  All Dining
                </button>
              </Link>
            </div>
          </div>
          <DiningSlider />
        </div>
      </div>
    </div>
  );
}
