"use client";
import React, { useState } from "react";
import RoomSlider from "./RoomsSlider";
import SuiteSlider from "./SuiteSlider";
import Link from "next/link";

export default function Rooms() {
  // State to manage which section (Rooms or Suites) is active
  const [activeSection, setActiveSection] = useState("Rooms");

  // Function to handle click on Rooms button
  const showRooms = () => {
    setActiveSection("Rooms");
  };

  // Function to handle click on Suites button
  const showSuites = () => {
    setActiveSection("Suites");
  };

  return (
    <>
      <div className="justify-center py-12">
        <div className="sm:flex block sm:justify-between justify-center items-center sm:px-20 px-4">
          <div>
            <h2 className="text-3xl font-extralight font-cinzel uppercase tracking-widest text-[#be9343]">
              ROOMS & SUITES
            </h2>
            <br />
            <p className="sm:w-[450px] font-sans text-sm">
              Punarnava believes in providing the best accommodation experience
              to its guests. Punarnava is covered densely by forests on all
              sides. Punarnava offers luxury villas and cottages with private
              pools and landscaped gardens. Rooms of various types are
              strategically located all across the resort&apos;s landscape. Standard
              rooms with private balconies or elevated mountain vistas provide
              cozy havens of peace and comfort. All these facilities reflect the
              comprehensive theme of harmoniously blending five-star amenities
              with nature.
            </p>
            <div className="gap-x-12 flex mt-8 pt-4">
              <button
                className={`font-raleway text-[#be9343] cursor-pointer uppercase  text-sm ${
                  activeSection === "Rooms"
                    ? " border-b-2 border-[#be9343]"
                    : ""
                }`}
                onClick={showRooms}
              >
                Rooms
              </button>
              <button
                className={`font-raleway text-[#be9343] cursor-pointer uppercase  text-sm ${
                  activeSection === "Suites"
                    ? " border-b-2 border-[#be9343]"
                    : ""
                }`}
                onClick={showSuites}
              >
                Suites
              </button>
            </div>
          </div>
          <div>
            <button className="px-4 py-2 sm:mt-0 mt-4 border-[#be9343] text-[#be9343] hover:bg-[#be9343] hover:text-white border-2 rounded-sm text-sm font-raleway tracking-widest shadow-xl cursor-pointer">
              <Link href="/Room-suites"> All Room & Suites </Link>
            </button>
          </div>
        </div>
        {/* Conditional rendering based on activeSection state */}
        {activeSection === "Rooms" && (
          <div className="Rooms">
            <RoomSlider />
          </div>
        )}
        {activeSection === "Suites" && (
          <div className="Suites">
            <SuiteSlider />
          </div>
        )}
      </div>
    </>
  );
}
