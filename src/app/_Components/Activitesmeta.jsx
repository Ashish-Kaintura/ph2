"use client";
import React, { useState } from "react";
import Header from "@/app/_Components/Header";
import Image from "next/image";
import Banner from "/public/Images/Activity/Activity banner.webp";
import Plant from "/public/Images/Activity/plant.webp";
import Tracking from "/public/Images/Activity/tracking.webp";
import Waterfall from "/public/Images/Activity/waterfall.webp";
import Naturewalk from "/public/Images/Activity/naturewalk.webp";
import Yoga from "/public/Images/Activity/Yoga meditation.webp";
import Mandir from "/public/Images/Activity/mandir.webp";
import { Dialog } from "@headlessui/react";
import { MdArrowRightAlt } from "react-icons/md";
import Footer from "../_Components/Footer";
import Head from "next/head";

export const venues = [
  {
    name: "Trekking ",
    description: `Punarnava Resort & Spa offers guests an invigorating trekking adventure into the dense forest of Dehradun, which offers a panoramic view of Mussoorie and Himalaya. Punarnava offers a guided trek that caters to every level of skill, which makes it an ideal way to explore the natural beauty of Uttarakhand.

`,
    image: Tracking,
    imageAlt: "trekking",
  },
  {
    name: "Naag Mandir Visit",
    description: `Punarnava provides visits to various places in Dehradun; Naag Devta Mandir is also one such place. The temple is around 500 years old, considered  Siddhi Peeth, and has a huge gathering every year.

`,
    image: Mandir,
    imageAlt: "Naag Devta Mandir",
  },
  {
    name: "Yoga Meditation",
    description: `Punarnava Resort & Spa offers a very placid yoga facility.  The yoga sessions are specially tailored to fulfill all levels, providing a peaceful escape and promoting overall well-being. With stunning views of the Mussoorie Himalaya, the experience is both refreshing and spiritually enriching.
`,
    image: Yoga,
    imageAlt: "Yoga Meditation",
  },
  {
    name: "River Waterfall Visit",
    description: `Punarnava Resort & Spa offers a refreshing activity experience with easy access to nearby rivers and serene waterfalls. Guests can enjoy calm nature walks along the riverbanks, followed by a soothing dip in the incredible, cascading waterfalls. This perfect blend of relaxation and adventure enhances the resort's charm and makes it an ideal weekend getaway in Uttarakhand.

`,
    image: Waterfall,
    imageAlt: "River Waterfall Visit",
  },
  {
    name: "Plantations",
    description: `Punarnava Resort & Spa is considered one of the best five resorts in Dehradun, a green and dense sanctuary. The resort's commitment to preserving the environment is evident in the carefully selected flora that creates a serene and refreshing atmosphere, making it a paradise for nature lovers.
`,
    image: Plant,
    imageAlt: "Plantations",
  },

  {
    name: "Nature Walk",
    description: `At Punarnava Resort & Spa, the nature walk is a stimulating activity that immerses guests in the peaceful beauty of dense forests. Guided by local experts, the walk offers an opportunity to explore the rich flora and fauna. It's a perfect way to reconnect with the environment and experience the tranquility of the Himalayan foothills.

`,
    image: Naturewalk,
    imageAlt: "Nature Walk",
  },
];

export default function Activitesmeta() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState(null);

  function openModal(venue) {
    setSelectedVenue(venue);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedVenue(null);
  }
  return (
    <>
      <Header />
      <section>
        <div className="flex justify-center overflow-hidden relative sm:pt-0 pt-16">
          <Image
            className="w-full h-full object-cover"
            src={Banner}
            alt="destination wedding"
            loading="lazy"
          />
        </div>
      </section>

      <section>
        <div className="pb-12 px-4">
          <div className="flex justify-center ">
            <h1 className="text-center font-cinzel tracking-widest text-2xl text-[#be9343] font-thin py-8 uppercase">
              Activities We Provide
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center sm:pt-12 py-12 gap-12 lg:mx-8 lg::px-12">
          {venues.map((venue, index) => (
            <div
              className=" sm:w-[450px]  m-1 rounded-t-lg border-2 shadow-lg "
              key={index}
            >
              <div className="overflow-hidden sm:h-72  flex justify-center rounded-t-lg shadow-xl sm:mt-0 mt-4 ">
                <Image
                  className="w-full h-full object-contain sm:object-cover hover:scale-125 transition-all ease-in duration-100"
                  src={venue.image}
                  loading="lazy"
                  alt="Meeting"
                ></Image>
              </div>
              <div className="p-2">
                <h2 className="text-[#be9343] font-cinzel tracking-widest py-2 text-lg">
                  {venue.name}
                </h2>

                <p className="sm:w-96 text-xs font-sans font-semibold line-clamp-6">
                  {venue.description}
                </p>
                <div className="flex gap-x-4 items-center">
                  <div
                    className="flex items-center gap-x-1 mt-6 text-sm hover:text-[#84662e] font-cinzel tracking-widest text-[#be9343] cursor-pointer"
                    onClick={() => openModal(venue)}
                  >
                    <span>Get Info</span>
                    <MdArrowRightAlt className="size-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-4">
            {selectedVenue && (
              <>
                <div className="flex justify-center">
                  <Image
                    className="rounded-t-lg"
                    src={selectedVenue.image}
                    alt={selectedVenue.imageAlt}
                  />
                </div>
                <Dialog.Title className="text-lg font-semibold text-[#be9343] mt-4">
                  {selectedVenue.name}
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-sm">
                  {selectedVenue.description}
                </Dialog.Description>
                <button
                  className="mt-4 px-4 py-2 bg-[#be9343] text-white rounded"
                  onClick={closeModal}
                >
                  Close
                </button>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>

      <Footer />
    </>
  );
}
