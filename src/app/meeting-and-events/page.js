import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "@/app/_Components/Header";
import Banner from "/public/Images/MeetingAndEvent/metting and event.jpg";
import Image1 from "/public/Images/MeetingAndEvent/1.jpg";
import Image2 from "/public/Images/MeetingAndEvent/2.1.jpg";
import Image3 from "/public/Images/MeetingAndEvent/3.1.png";
import Image4 from "/public/Images/MeetingAndEvent/4.jpg";
import Image5 from "/public/Images/MeetingAndEvent/5.jpg";
import Image6 from "/public/Images/MeetingAndEvent/6.jpg";
import { MdArrowRightAlt } from "react-icons/md";
import Footer from "../_Components/Footer";
import Head from "next/head";

export default function page() {
  return (
    <>
      <Header />
      <section>
        <div className="flex justify-center  overflow-hidden relative sm:pt-0 pt-16">
          <Image
            className="w-full h-full object-cover"
            src={Banner}
            alt="destination wedding"
            loading="lazy"
            layout=""
          />
        </div>
      </section>

      <section>
        <div className="flex justify-center ">
          <h1 className="text-center font-cinzel tracking-widest text-2xl text-[#be9343] font-thin py-4 uppercase">
            Meeting & Events
          </h1>
        </div>
        <div className="flex justify-center ">
          <h2 className="text-center font-cinzel tracking-widest text-2xl text-[#be9343] font-thin pb-8  uppercase">
            Unplug from the technology and Reconnect with nature.
          </h2>
        </div>
        <section>
          <div className="pb-12 px-4">
            <div className="flex justify-center ">
              <p className="text-start font-sans  py-8 lg:w-[750px] ">
                At Punarnava Resort & Spa, the staff wants guests to feel
                relaxed and connected with life and nature. The theme of the
                best resorts in dehradun is to Rejuvenate, Refresh, and
                Reconnect. At Punarnava Resort & Spa, every moment of your stay
                is designed to ensure you feel rejuvenated, refreshed, and
                deeply connected to the beauty of life and nature. <br /> <br />{" "}
                Punarnava Resort & Spa offers the perfect setting for meetings
                and events. The perfect setting combines top-notch facilities
                and luxury with natural beauty and a refreshing environment.
                Punarnava Resort & Spa ensures that every moment is productive
                and memorable. The resort has a dedicated team that tailors each
                event to meet the guest&apos;s unique needs and make it the best
                destination for every gathering.
              </p>
            </div>
          </div>
        </section>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 sm:justify-items-center justify-center sm:pt-12 py-12 gap-12 lg:mx-8 lg::px-12 px-4 ">
          <div className=" sm:w-[450px]  m-1 rounded-t-lg border-2 shadow-lg ">
            <div className="overflow-hidden sm:h-72  flex justify-center rounded-t-lg shadow-xl sm:mt-0 mt-4 ">
              <Image
                className="w-full h-full object-contain sm:object-cover hover:scale-125 transition-all ease-in duration-100"
                src={Image1}
                loading="lazy"
                alt="Meeting"
              ></Image>
            </div>
            <div className="p-2">
              <h2 className="text-[#be9343] font-cinzel tracking-widest py-2 text-lg">
                Living Room
              </h2>

              <p className=" text-xs font-sans font-semibold line-clamp-6 mt-2 ">
                Elevate your downtime in our elegant lounge. As the perfect
                blend of luxury and leisure, this stylish space is uniquely
                suited for high-stakes business meetings, intimate private
                gatherings and chic late-night soirees. Unlike any other luxury
                resort in India, our Living Room strikes a chord of refined
                relaxation, making it the ultimate spot to unwind and delight
              </p>
              <div className="flex gap-x-4 items-center "></div>
            </div>
          </div>
          <div className=" sm:w-[450px]  m-1 rounded-t-lg border-2 shadow-lg ">
            <div className="overflow-hidden sm:h-72  flex justify-center rounded-t-lg shadow-xl sm:mt-0 mt-4 ">
              <Image
                className="w-full h-full object-contain sm:object-cover hover:scale-125 transition-all ease-in duration-100"
                src={Image2}
                loading="lazy"
                alt="Meeting"
              ></Image>
            </div>
            <div className="p-2">
              <h2 className="text-[#be9343] font-cinzel tracking-widest py-2 text-lg">
                Vista Lawns
              </h2>

              <p className=" text-xs font-sans font-semibold line-clamp-6 mt-2 ">
                Witness breathtaking sunsets at our picturesque Vista Lawns,
                between the lush Mussoorie Forest and the stunning Dehradun
                skyline. This unparalleled location solidifies our position as
                one of India&apos;s premier mountain resorts, perfect for
                hosting unforgettable destination weddings and unwinding on a
                rejuvenating weekend getaway from Delhi. Our Vista Lawns offer a
                unique blend of natural beauty and luxurious tranquility, making
                us the ultimate retreat for those seeking serenity and wonder.
              </p>
              <div className="flex gap-x-4 items-center "></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 sm:justify-items-center justify-center sm:pt-12 py-12 gap-12 lg:mx-8 lg::px-12 px-4">
          <div className="sm:w-[450px]  m-1 rounded-t-lg border-2 shadow-lg ">
            <div className="overflow-hidden sm:h-72  flex justify-center rounded-t-lg shadow-xl sm:mt-0 mt-4">
              <Image
                className="w-full h-full object-contain sm:object-cover hover:scale-125 transition-all ease-in duration-100"
                src={Image3}
                loading="lazy"
                alt="Meeting"
              ></Image>
            </div>
            <div className="p-2">
              <h2 className="text-[#be9343] font-cinzel tracking-widest py-2 text-lg">
                Punarnava Lawns
              </h2>

              <p className=" text-xs font-sans font-semibold line-clamp-6 mt-2">
                Spanning an impressive 15,800 sq. ft., our meticulously
                manicured lawns are a testament to our standing as one of
                Dehradun&apos;s premier resorts. This expansive green oasis,
                nestled amidst rolling hills, provides a breathtaking canvas.
                The sheer scale and serene beauty of Punarnava Lawns make them
                an ideal setting for unforgettable celebrations and
                sophisticated gatherings.
              </p>
              <div className="flex gap-x-4 items-center "></div>
            </div>
          </div>
          <div className="sm:w-[450px]  m-1 rounded-t-lg border-2 shadow-lg ">
            <div className="overflow-hidden sm:h-72  flex justify-center rounded-t-lg shadow-xl sm:mt-0 mt-4">
              <Image
                className="w-full h-full object-contain sm:object-cover hover:scale-125 transition-all ease-in duration-100"
                src={Image4}
                loading="lazy"
                alt="Meeting"
              ></Image>
            </div>
            <div className="p-2">
              <h2 className="text-[#be9343] font-cinzel tracking-widest py-2 text-lg">
                Pre-function Area
              </h2>

              <p className=" text-xs font-sans font-semibold line-clamp-6 mt-2 ">
                Step into the soothing ambiance of our sleek pre-function
                lounge, a tempting preview of the majesty to come. With its
                impeccable style and poise, our pre-function area is the perfect
                precursor to an extraordinary experience, expertly blending
                elegance and excitement.
              </p>
              <div className="flex gap-x-4 items-center "></div>
            </div>
          </div>
        </div> */}
      </section>

      <Footer />
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Perfect Places For Corporate Events outing in Dehradun",
    description:
      "Punarnava Resort & Spa offer one of the perfect destinations for corporate meetings and events in Uttarakhand",
    alternates: {
      canonical: "https://thepunarnava.com/meeting-and-events",
    },
  };
}
