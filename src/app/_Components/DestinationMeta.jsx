"use client";
import Header from "@/app/_Components/Header";
import Image from "next/image";
import React, { useState } from "react";
import Bandhan from "/public/Images/Destination wedding/bandhan.webp";
import Jalsa from "/public/Images/Destination wedding/jalsa.webp";
import Utsav from "/public/Images/Destination wedding/Amphitheatre.webp";
import Prinat from "/public/Images/Destination wedding/pool area.webp";
import Park from "/public/Images/Destination wedding/s.webp";
import MangalSutar from "/public/Images/Destination wedding/Mangasutra.webp";
import Vivha from "/public/Images/Destination wedding/vivah.webp";
import Ahuti from "/public/Images/Destination wedding/Aahuti.webp";
import { MdArrowRightAlt } from "react-icons/md";
import Footer from "../_Components/Footer";
import { Dialog } from "@headlessui/react";
import Head from "next/head";
export const venues = [
  {
    name: "Bandhan",
    description: `Enhance your events in our hall, a beautiful space is perfect for opulent banquets, business gatherings, and elegant gatherings. Seamless transitions and a refined atmosphere ensure unforgettable experiences, from business galas to wedding receptions and unique celebrations.
    `,
    image: Bandhan,
    Area: "6000 sq ft",
    imageAlt: "Jalsa",
  },
  {
    name: "Jalsa",
    description: `Immerse yourself in the enchantment of our outdoor oasis, featuring a pool, deck and lush lawn, set against the breathtaking backdrop of the snow-capped Himalayas and dense forest. Perfect for intimate mehndi and haldi ceremonies, romantic celebrations, decorative cocktail parties and unforgettable birthday bashes. JALSA's adaptable layouts and enchanting atmosphere ensure that every event becomes an unforgettable experience.


    `,
    image: Jalsa,
    Area: "15000 sq ft",
    imageAlt: "Jalsa",
  },
  {
    name: "Amphi Theater (Utsav)",
    description: `UTSAV is a majestic open-air theater amidst lush greenery, perfect for vibrant weddings, thrilling parties, and games. Its unique design ensures an unforgettable experience filled with royal charm and excitement. And the dense forest and the Himalayas add a breathtaking backdrop and  enhance its allure with natural grandeur.

`,
    image: Utsav,
    Area: "10000 sq ft",
    imageAlt: "Amphi Theater (Utsav)",
  },
  {
    name: "Parinaya (Pool Area)",
    description: `PARINAYA offers a stunning open deck with a pool and panoramic mountain views, perfect for unforgettable events. It is perfect for cocktail parties, mehndi ceremonies. Its picturesque setting with nature enhancing the venue which makes it a treasured spot for intimate baby showers, capturing timeless moments amidst nature's beauty.



`,
    image: Prinat,
    Area: "1500 sq ft",
    imageAlt: "Parinaya Pool Area",
  },
  {
    name: "Aranaya (Grass Lawn)",
    description: `ARANAYA, is an enchanting outdoor park, exalts breathtaking forest views, making it a versatile wedding venue in Dehradun for various occasions. From intimate mehndi and haldi ceremonies to grand weddings, engagements, cocktail parties, and placid Hawan rituals, ARANAYA celebrates life's beauty in a pristine setting. 


.`,
    image: Park,
    Area: ".... sq ft",
    imageAlt: "Aranaya Lawn Park Area",
  },

  {
    name: "Mangalsutra (Roof-Top Lawn)",
    description: `Elevate your events at MANGALSUTRA, our stunning rooftop venue, vaunt a unique vista-dome concept with breathtaking and panaromic Himalayan views framed by an open sky and partial glass ceiling. This classy venue is perfect for corporate gatherings, soirées, birthdays, and cocktail parties, as well as ring ceremonies and celebrations that demand a touch of cosmopolitan style and natural beauty.

`,
    image: MangalSutar,
    imageAlt: "Mangalsutra",
    Area: "10000 sq ft",
  },
  {
    name: "Vivah",
    description: `VIVAH, a sprawling open lawn, offers a calming natural setting for unforgettable events. Perfect for weddings, engagements, and ring ceremonies, this vibrant venue provides a picturesque setting for creating cherished moments and exchanging vows. Its picturesque surroundings make it an ideal choice for all aspects of wedding celebrations.

    `,
    image: Vivha,
    imageAlt: "Vivah",
    Area: "25000 sq ft",
  },
  {
    name: "Ahuti",
    description: `AAHUTI is a placid temple of outdoor space, perfect for traditional havan, holy rites, and intimate events like baby showers. Its tranquil atmosphere and varied layout create a harmonious setting for life's significant moments, where love and blessings abound.

`,
    image: Ahuti,
    imageAlt: "Ahuti",
    Area: ".... sq ft",
  },
];

export default function DestinationMeta() {
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
      {/* <Head>
        <title>
          Best Destination Wedding in India | Punarnava Resort & Spa
        </title>
        <meta
          name="description"
          content="The Punarnava offers the Best destination wedding in India which is located in Dehradun Uttarakhand
"
        />
        <link
          rel="canonical "
          href="https://www.thepunarnava.com/destination-wedding-in-india"
        />
      </Head> */}
      <Header />
      <section>
        <div className="flex  h-[750px] justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/wedding-banner.mp4" type="video/mp4" />
            <track
              src="/videos/wedding-banner.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          </video>
        </div>
      </section>

      <section>
        <div className=" px-4">
          <div className="flex justify-center ">
            <h1 className="text-center font-cinzel tracking-widest text-2xl text-[#be9343] font-thin pt-8 uppercase">
              Destination Wedding at Punarnava (Vedic Vivah)
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="pb-12 px-4">
          <div className="flex justify-center ">
            <p className="text-start font-sans  py-8 lg:w-[750px] ">
              Punarnava Resort & Spa, embedded in the middle of dense forest and
              the Himalayas, offers an exquisite setting for a Vedic Vivah and
              the marriage of the divine Lord Shiva and Goddess Parvati. Vedic
              Vivah is the traditional Hindu marriage practice described in
              ancient texts. The resort is surrounded by lush forests and
              breathtaking views of George Everest, Hathi Paw, and the Mussoorie
              Himalayas, which is the ideal destination for couples seeking a
              sacred and memorable wedding. <br /> <br /> Punarnava Resort & Spa
              is renowned as the best hotel in Dehradun that provides a perfect
              combination of nature and luxury to ensure that every moment of
              your wedding reflects the timeless beauty of traditions passed
              down from the generations. The ritual procession around the sacred
              fire, the chanting of holy mantras, and the soothing surroundings
              come together to witness and bless the union of two souls. The
              resort&apos;s placid mountains and calmness of the forest offer a
              peaceful retreat for guests, making it not just a wedding venue
              but also for every kind of gathering. <br /> <br /> With its
              unique combination of tradition, elegance, and natural beauty,
              Punarnava Resort & Spa stands out as the perfect choice for a
              Vedic Vivah, promising an unforgettable destination wedding in the
              heart of Uttarakhand.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:justify-items-center justify-center sm:pt-12 py-12 gap-12 lg:mx-8 lg::px-12 px-4">
          {venues.map((venue, index) => (
            <div
              className=" sm:w-[450px]  m-1 rounded-t-lg border-2 shadow-lg "
              key={index}
            >
              <div className="overflow-hidden sm:w-[450px] sm:h-72  flex justify-center rounded-t-lg shadow-xl sm:mt-0 ">
                <Image
                  className="w-full h-full object-contain sm:object-cover"
                  src={venue.image}
                  loading="lazy"
                  alt="Meeting"
                ></Image>
              </div>
              <div className="p-2">
                <h2 className="text-[#be9343] font-cinzel tracking-widest py-2 text-lg">
                  {venue.name}
                </h2>
                <h2 className="text-[#be9343] font-sans pb-4 text-sm ">
                  {/* <span className="text-gray-800 font-bold mr-4">
                   {venueArea}
                  </span> */}
                  {/* <span className="text-gray-800 font-bold">
                    Capacity 100 Guests
                  </span> */}
                </h2>
                <p className="text-xs font-sans line-clamp-6 ">
                  {venue.description}
                </p>
                <div className="flex gap-x-4 items-center ">
                  <div
                    onClick={() => openModal(venue)}
                    className="flex items-center gap-x-1 mt-6 text-sm hover:text-[#84662e] font-cinzel tracking-widest text-[#be9343]"
                  >
                    <h2 className=" cursor-pointer"> Get Info</h2>
                    <MdArrowRightAlt className=" size-6" />
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
      <footer>
        <Footer />
      </footer>
    </>
  );
}
