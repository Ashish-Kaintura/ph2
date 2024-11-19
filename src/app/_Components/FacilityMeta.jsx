"use client";
import React, { useState } from "react";
import Header from "@/app/_Components/Header";
import Image from "next/image";
import Banner from "/public/Images/facilites/Facility.webp";
import Library from "/public/Images/facilites/library.webp";
import KayaKumbh from "/public/Images/facilites/kaya Kumbh.webp";
import Pool from "/public/Images/facilites/Pool side  ( facility).webp";
import BBQ from "/public/Images/facilites/BBQ.webp";
import Game from "/public/Images/facilites/Game.webp";
import Candel from "/public/Images/facilites/candle night dinner.webp";
import Gym from "/public/Images/facilites/gym1.webp";
import Restro from "/public/Images/facilites/restro.webp";
import { Dialog } from "@headlessui/react";
import { MdArrowRightAlt } from "react-icons/md";
import Footer from "../_Components/Footer";
import Head from "next/head";

export const venues = [
  {
    name: "Outdoor Gym",
    description: `Energise your body and mind in our state-of-the-art outdoor gym, set against the backdrop of the Mussoorie Himalayas. This feature provides guests with the opportunity to workout with actual fresh mountain air to breathe making Punarnava one of the wonderful Dehradun based hotels for those interested in their health. It is our line of wellness solutions that include outdoor gym and are at par with any 5 star hotel in Dehradun.
`,
    image: Gym,
    imageAlt: "Outdoor Gym",
  },
  {
    name: "Library (Gyan)",
    description: ` Try to spend more time in our spacious library, Gyan, designed as a calm place for readers. This area looks like an intellectual appeal of Indian luxurious hotels with a collection of literature based on local and health topics. The emanating serenity makes it an appropriate place to engage in meditation or else do some personal business best suited for individuals attending business sessions or corporate events at our resort.

`,
    image: Library,
    imageAlt: "Library (Gyan)",
  },
  {
    name: "Kaya and Kumbh",
    description: `Unwind and pamper yourself at our full service Kaya and Kumbh Ayurvedic spa. This particular feature makes us among the leading hotels in Dehradun as it provides its visitors with varied Ayurvedic treatments and resort spa services. The highly professional and caring masseuses and the individual approach make the spa one of the most popular in Dehradun and a major weekend destination from Delhi.
`,
    image: KayaKumbh,
    imageAlt: "Kaya and Kumbh",
  },
  {
    name: "Pool Side Lunch And Breakfast ",
    description: `Enjoy our outdoor restaurant dining with a breathtaking view of the scenic hills of Uttarakhand. Here is how luxury can be defined: an exquisite collection of food and exquisite surroundings, making Punarnava one of the greatest Indian resorts. This makes it suitable for holiday makers as well as guests in search of a great hotel experience in Dehradun.

`,
    image: Pool,
    imageAlt: "Pool Side Lunch And Breakfast ",
  },
  {
    name: "Barbeque",
    description: ` Take a look at barbeque spawn our barbeque nights, which are among the most popular options provided at our resort in Dehradun. Staged underneath the sky of the Himalayas, these events provide the best combination of great food and atmosphere, thus making us one of the most sought after hotels in Dehradun near railway station with great dining options.

`,
    image: BBQ,
    imageAlt: "Barbeque",
  },
  {
    name: "Game Zone",
    description: `Get to release your energy and have some amusement in our equipment-packed game corner, which includes a number of indoor games. This facility makes Punarnava an ideal destination for family holidays as well as team building weekend getaways to stand us out amongst other hotels in Dehradun India. It's a great space for relaxation after exploring nearby weekend getaways from Delhi.

`,
    image: Game,
    imageAlt: "Game Zone",
  },

  {
    name: "Candlelight Dinner",
    description: `Romance meets luxury in our candlelight dinner experiences, perfect for couples and honeymooners. With such exquisite settings to offer, it is no wonder that many opt for weddings , honeymoon and romantic weekends at a 5 star Dehradun hotel.

`,
    image: Candel,
    imageAlt: "Candlelight Dinner",
  },
  {
    name: "Santushti-Pure Veg Restaurant",
    description: `Savour vegetarian dishes at Santushti, our speciality restaurant that showcases traditional Indian and International dishes. Food being fresh and sourced within the vicinity, Santushti reflects our principle of sustainable luxury. Hence, Punarnava is among the best hotels in Dehradun for those preferring vegetarian food and who are looking forward to staying at a luxurious resort.

`,
    image: Restro,
    imageAlt: "Santushti-Pure Veg Restaurant",
  },
];

export default function FacilityMeta() {
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
              Facilities We Provide
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

                <p className="sm:w-96 text-xs font-sans font-semibold lg:line-clamp-6">
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
