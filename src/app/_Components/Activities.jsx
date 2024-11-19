import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const thingsToDo = [
  { name: "Trekking" },
  { name: "Naag Mandir Visit" },
  { name: "River Waterfall Visit" },
  { name: "Nature Walk" },
];

const Activities = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl text-black font-cinzel tracking-widest">
            Activities TO DO
          </h2>
          <p className="mt-4 font-sans  text-black">
            Choose Punarnava Resort & Spa for a celebration that harmonizes the
            wonders of nature with impeccable and excellent service, creating
            memories that will last a lifetime. Let us turn your big day into a
            magical getaway in Himalayan Mountain, where every moment is filled
            with peace and happiness.
          </p>
          <Link href="/facilities">
            <button className="mt-6 px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#be9343] hover:bg-[#765b28] cursor-pointer">
              EXPLORE ALL
            </button>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {thingsToDo.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border border-black rounded-lg"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 font-sans">
                  {item.name}
                </h3>
                {/* Uncomment the next line if you have a distance property in your items */}
                {/* <p className="mt-2 text-sm text-gray-600">{item.distance}</p> */}
              </div>
              <Link href="/activities">
                <FaArrowRight className="text-black" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
