import Header from "@/app/_Components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Banner from "/public/Images/Dining/Dining banner.webp";
import Img1 from "/public/Images/Dining/rooftop.webp";
import Img2 from "/public/Images/Dining/Floting Breakfast.webp";
import Img3 from "/public/Images/Dining/Santusti Restro Dine.webp";
import Img4 from "/public/Images/Dining/Cabdel light.webp";
import Img5 from "/public/Images/Dining/Jungle Lunch.webp";
import Img6 from "/public/Images/Dining/room dining.webp";
import { MdArrowRightAlt } from "react-icons/md";
import Footer from "../_Components/Footer";
import Head from "next/head";


const Dine = [
  {
    name: "Roof Top Dining",
    image: Img1,
    Des: "Experience breathtaking views of the Mussoorie Himalayas at Punarnava's rooftop restaurant, Santushti. Relish international dishes cooked by professional chefs with locally sourced produce wherever the seasons allow. It serves as the best venue to unwind with friends and family while enjoying delicious cuisines, a factor that makes it amongst the best hotels in Dehradun for diners.",
  },
  {
    name: "Floating Breakfast",
    image: Img2,
    Des: "Experience a special morning tradition in one of the best hotels in Dehradun – Punarnava. Start your day with a healthy breakfast meal on our floating tray right in the refreshing water of the pool while overlooking the breathtaking views of the Himalayas. This luxurious experience is a perfect blend of wellness and luxury if you are looking for a spa in Dehradun or planning a weekend trip from Delhi.",
  },
  {
    name: "Restro Dining",
    image: Img3,
    Des: "Experience a variety of dining options for Continental, Indian, Asian, and Mediterranean food at Punarnava’s restaurants. We serve fresh farm produce from our own organic gardens, making us one of the best resorts in Dehradun. Savour tasty food with nutrition values being considered using Ayurveda concepts in a perfect ambiance for tourists on vacation and businessmen on working trips.",
  },
  {
    name: "Candel Light Dinner",
    image: Img4,
    Des: "The spirit of romance comes alive at Punarnava with candle lit dinner for two. The luxury of these dinners is that they are held close to the backdrop of the Himalayas; the food is something that will suit the entire palate. Being one of the best hotels in India, it is also a preferred destination for couples and hence is the perfect place for marriage and engagement ceremonies in India.",
  },
  {
    name: "Jungle Lunch ",
    image: Img5,
    Des: "Discover the pleasures of dining with a delicious jungle lunch plan on offer at Punarnava. Sounds like a lovely day in the tropical rainforests nearby our resort, strolling leisurely, feasting on the delicious food with local superfoods.",
  },
  {
    name: "In-room Dining",
    image: Img6,
    Des: "At Punarnava, you can relax in your room and enjoy a truly cozy getaway. We make it easy for you by delivering delicious meals right to your door. This way, you can unwind and have everything you need without any hassle. It's all about making your stay as comfortable and enjoyable as possible.",
  },
];

export default function Diningpage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "Spa"],
    name: "The Punarnava Resort & Spa",
    image:
      "https://www.thepunarnava.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpunarnava%20white%20text1.c4cc5c4d.webp&w=256&q=75",
    "@id": "https://www.thepunarnava.com/dining",
    url: "https://www.thepunarnava.com/dining",
    telephone: "7217011476",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Village – Bhitarli, Kimadi, Lambidhar – Mussoorie Road, Dehradun, Uttarakhand, India",
      addressLocality: "Dehradun",
      postalCode: "248001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.4230625,
      longitude: 78.0721875,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.facebook.com/thepunarnavaresort",
      "https://x.com/ThePunarnava_",
      "https://www.youtube.com/channel/UC6U9pJg6edqzxvSbz-YTqAQ",
      "https://www.linkedin.com/company/the-punarnava-resort/",
      "https://in.pinterest.com/thepunarnavaresort/",
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />
      <section>
        <div className="flex justify-center  overflow-hidden relative sm:pt-0 pt-16">
          <Image
            className="w-full h-full object-cover"
            src={Banner}
            alt="destination wedding"
            loading="lazy"
          />
        </div>
      </section>

      <section>
        <div className="px-4">
          <div className="flex justify-center ">
            <h1 className="text-center font-cinzel tracking-widest text-2xl text-[#be9343] font-thin py-8 uppercase">
              Dining Places
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center ">
          <p className="text-start font-sans  py-8 lg:w-[750px] sm:px-0 px-2 ">
            Here at Punarnava, we strive to give our guests the best experience
            in in-room dining—an experience that remains unforgettable. We
            believe that feasting with family, friends, and loved ones should be
            done properly and with the highest quality available. At Punarnava,
            we care for our guests by providing the finest organically grown
            vegetables and fruits from our own 25 acres of dedicated land.
            Additionally, we have 10 cows to meet all the dairy needs of our
            guests. Punarnava has a dedicated space only for dining with the
            loved ones. SANTUSTHI settled on the top of the picturesque heights
            of the Mussoorie Himalayas provides a memorable rooftop dining
            experience. Guests can indulge in a symphony of tastes and flavors
            while taking in the amazing scenery, which makes it a perfect place
            for both the palate and the soul in this enchanting natural setting
          </p>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:justify-items-center justify-center sm:pt-12 py-12 gap-12 lg:mx-8 lg::px-12 px-4">
          {Dine.map((dine, index) => (
            <div
              className=" sm:w-[450px]  m-1 rounded-t-lg border-2 shadow-lg "
              key={index}
            >
              <div className="overflow-hidden sm:w-[450px] sm:h-72  flex justify-center rounded-t-lg shadow-xl sm:mt-0 ">
                <Image
                  className="w-full h-full object-contain sm:object-cover hover:scale-125 transition-all ease-in duration-100"
                  src={dine.image}
                  loading="lazy"
                  alt="Meeting"
                ></Image>
              </div>
              <div className="p-2">
                <h2 className="text-[#be9343] font-cinzel tracking-widest py-2 text-lg">
                  {dine.name}
                </h2>
                <h2 className="text-[#be9343] font-sans pb-4 text-sm ">
                  {/* <span className="text-gray-800 font-bold mr-4">
                   {dineArea}
                  </span> */}
                  {/* <span className="text-gray-800 font-bold">
                    Capacity 100 Guests
                  </span> */}
                </h2>
                <p className="sm:w-96 text-xs font-sans font-semibold line-clamp-6 ">
                  {dine.Des}
                </p>
                {/* <div className="flex gap-x-4 items-center ">
                  <div className="flex items-center gap-x-1 mt-6 text-sm hover:text-[#84662e] font-cinzel tracking-widest text-[#be9343]">
                    <Link href="">Get Info </Link>
                    <MdArrowRightAlt className=" size-6" />
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Fine Dining Restaurant | Punarnava Resorts & Spa",
    description:
      "Experience the ultimate dining adventure at Punarnava, where gourmet cuisine meets stunning rooftop views.",
    alternates: {
      canonical: "https://thepunarnava.com/dining",
    },
    // Add schema via a script tag
    // script: [
    //   {
    //     type: "application/ld+json",
    //     children: JSON.stringify(schemaData),
    //   },
    // ],
  };
}