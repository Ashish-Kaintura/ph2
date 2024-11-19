import React from "react";
import Image1 from "/public/Images/Blog/Blog1.webp";
import Image2 from "/public/Images/Blog/Blog2.webp";
import Image3 from "/public/Images/Blog/blog3.webp";
import Image4 from "/public/Images/Blog/blog4.webp";
import Footer from "../_Components/Footer";
import Header from "../_Components/Header";
import Link from "next/link";
import Image from "next/image";
export default function page() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-start text-center p-28">
        <h1 className="text-center text-4xl font-cinzel mb-6">Blogs</h1>
      </div>
      <div className="p-6">
        <div className="">
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  ">
            <div className="bg-white shadow-md rounded-lg overflow-hidden sm:w-[450px]">
              <div className="p-6 overflow-hidden">
                <Image
                  src={Image1}
                  alt=" Unforgettable Destination Weddings: Experience the Magic of
                  Punarnava Resort & Spa, Dehradun"
                />
                <h2 className="text-2xl font-semibold text-gray-800 line-clamp-2">
                  Unforgettable Destination Weddings: Experience the Magic of
                  Punarnava Resort & Spa, Dehradun
                </h2>
                <p className="text-gray-600 mt-2 line-clamp-4">
                  Your wedding day is one of the most significant moments in
                  your life, a day where dreams come true and memories are
                  etched forever. For a celebration that is as unique as your
                  love story, choosing the right venue is paramount. If
                  you&lsquore envisioning an enchanting destination wedding in
                  India, the Punarnava Resort & Spa in Dehradun stands out as
                  the perfect choice for your dream celebration
                </p>
                <Link href="/unforgettable-destination-weddings-experience-the-magic-of-punarnava-resort-spa-dehradun">
                  <h2 className="mt-4 text-blue-600 hover:underline">
                    Read More
                  </h2>
                </Link>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden sm:w-[450px]">
              <div className="p-6 overflow-hidden">
                <Image
                  src={Image2}
                  alt=" Unforgettable Destination Weddings: Experience the Magic of
                  Punarnava Resort & Spa, Dehradun"
                />
                <h2 className="text-2xl font-semibold text-gray-800 line-clamp-2">
                  Uncover Dehradun&apos;s Hidden Gems with a Stay at Punarnava
                  Resort & Spa.
                </h2>
                <p className="text-gray-600 mt-2 line-clamp-4">
                  Nestled in the lush green valleys of Dehradun, Punarnava
                  Resort & Spa offers an ideal retreat for travelers seeking
                  serenity, luxury, and a connection to nature. If you&apos;re
                  looking for the perfect weekend getaway in Uttarakhand, this
                  resort is your answer. Located in the middle of a dense
                  forest, Punarnava is a paradise where the soul finds peace
                  amidst the breathtaking views of George Everest, Hathi Paw,
                  and the Mussoorie Hills.
                </p>
                <Link href="/uncover-dehraduns-hidden-gems-with-a-stay-at-punarnava-resort-spa">
                  <h2 className="mt-4 text-blue-600 hover:underline">
                    Read More
                  </h2>
                </Link>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden sm:w-[450px]">
              <div className="p-6 overflow-hidden">
                <Image
                  src={Image3}
                  alt=" Unforgettable Destination Weddings: Experience the Magic of
                  Punarnava Resort & Spa, Dehradun"
                />
                <h2 className="text-2xl font-semibold text-gray-800 line-clamp-2">
                  Escape-the-Citylights-Relax-at-Punarnava-Resort
                </h2>
                <p className="text-gray-600 mt-2 line-clamp-4">
                  In our daily city lives, our lives are filled with stress,
                  hassles, and struggles, which is overwhelming for anyone. The
                  pressure of living a modern life, the endless work load, or
                  the long or short commute, everybody can escape to something
                  peaceful and relaxing getaway.
                </p>
                <Link href="/Escape-the-Citylights-Relax-at-Punarnava-Resort-spa">
                  <h2 className="mt-4 text-blue-600 hover:underline">
                    Read More
                  </h2>
                </Link>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden sm:w-[450px]">
              <div className="p-6 overflow-hidden">
                <Image
                  src={Image4}
                  alt=" Unforgettable Destination Weddings: Experience the Magic of
                  Punarnava Resort & Spa, Dehradun"
                />
                <h2 className="text-2xl font-semibold text-gray-800 line-clamp-2">
                  The Best Middle of Mountain Luxury Resort & Spa in Dehradun:
                  Punarnava Resort & Spa
                </h2>
                <p className="text-gray-600 mt-2 line-clamp-4">
                  Punarnava Resort & Spa is an undiscovered gem among luxurious
                  retreats in the foothills of the Himalayan Mountains. It is
                  situated in the tranquil surroundings of Dehradun and
                  surrounded by lush vegetation; this mountain retreat is a
                  unique combination of luxury, nature, and whole-body wellness.
                  If you&apos;re looking for some time away from the hum of city life
                  or an unwinding getaway with your loved ones, Punarnava Resort
                  & Spa is the place to be.
                </p>
                <Link href="/the-best-middle-of-mountain-resor">
                  <h2 className="mt-4 text-blue-600 hover:underline">
                    Read More
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Blog- Punarnava Resort & Spa",
    description:
      "Punarnava Resort & Spa | Top resorts in Dehradun Uttarakhand for Gateway",
    alternates: {
      canonical: "https://thepunarnava.com/blogs",
    },
  };
}
