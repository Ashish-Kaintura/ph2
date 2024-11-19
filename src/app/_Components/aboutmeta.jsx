"use client";
import React from "react";
import { useState } from "react";
import Header from "./Header";
import Image from "next/image";
import Banner from "/public/Images/Aboutus/about-banner4.webp";
import Image1 from "/public/Images/Aboutus/about-punarnava-1.webp";
import Story from "/public/Images/Aboutus/story3-1.webp";
import Meeting from "/public/Images/Aboutus/meetandevent.webp";
import Weeding from "/public/Images/Aboutus/destination-wedding-1.webp";
import Memories1 from "/public/Images/Aboutus/Memories 1.webp";
import Gallery2 from "/public/Images/Aboutus/gallery2.webp";
import Memories2 from "/public/Images/Aboutus/BG.webp";
import Memories3 from "/public/Images/Aboutus/Memories 3.webp";
import Memories4 from "/public/Images/Aboutus/plant.webp";

import Footer from "./Footer";
// import Rooms from "../_Components/Rooms";
import { MdArrowRightAlt } from "react-icons/md";
import Link from "next/link";

export default function Aboutmeta() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      {/* <Head>
        <title>About- Punarnava Resort and Spa</title>
        <meta
          name="description"
          content="Punarnava Resort and Spa-best destination wedding places in Dehradun , India"
        />
        <link
          rel="canonical "
          href="https://www.thepunarnava.com/about-punarnava"
        />
      </Head> */}
      <Header />
      <section className="sm:pt-0 pt-16">
        <div className="bg-black overflow-hidden ">
          <Image
            alt="About us image"
            loading="lazy"
            className="w-full h-full object-cover "
            src={Banner}
            layout=""
          ></Image>
        </div>
      </section>
      <section>
        <div>
          <div className="w-full justify-center sm:gap-x-20 sm:flex block items-center py-20 sm:px-0 px-4 mt-4">
            <div>
              <h1 className=" text-normal text-[#be9343] font-cinzel uppercase ">
                <span className="text-3xl"> About Punarnava Resort & Spa</span>{" "}
              </h1>
              <br />
              <p className="sm:w-[450px] font-sans">
                Nestled in the majestic Himalayan mountains and lush Mussoorie
                Hills, Punarnava Resort and Spa is a luxurious oasis dedicated
                to wellness and rejuvenation. Our resort, inspired by the
                ancient wisdom of Panchtatva and Vedic traditions, offers a
                serene escape from the hustle and bustle of modern life,
                providing the perfect backdrop for various memorable
                experiences:
                <br />
                <br />
                <b>- Vedic Destination Weddings and Himalayan Celebrations </b>
                <br />
                <b>- Unforgettable Family Vacations and Anniversaries</b>
                <br />
                <b>- A Tranquil Retreat from the Chaos of City Life</b>
                <br />
                <br />
                Our name, Punarnava, is derived from the revered Ayurvedic herb
                known for its properties of inner cleansing, rejuvenation, and
                reconnection. True to its name, our resort embodies the essence
                of this herb, providing a sanctuary for guests to restart,
                relieve, and recharge their lives amidst nature&apos;s splendor.
                Experience a unique blend of luxury, tradition, and natural
                beauty at Punarnava Resort and Spa, where every moment is
                crafted to offer relaxation, renewal, and unforgettable
                experiences.
              </p>
            </div>
            <div className="flex justify-center sm:w-[550px] sm:h-[450px] rounded-lg overflow-hidden shadow-lg ">
              <Image
                alt="About us image"
                loading="lazy"
                className="overflow-hidden w-full h-full object-cover "
                src={Image1}
                layout="responsive"
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-12 px-4">
          <div>
            <h2 className="text-center font-cinzel tracking-widest text-4xl font-extralight text-[#be9343] uppercase">
              Our Story
            </h2>
          </div>
          <div className="flex justify-center text-start font-sans sm:px-52 pt-8">
            <p>
              Punarnava stands as one of the best five-star resorts in Dehradun,
              exemplifying a unique blend of Panchtatva wellness and the
              principles of Vedic Vivah. Established in October 2018, Punarnava
              was conceived with the vision of embracing &quot;Panch Tatwa&quot;
              and the ideals of &quot;Rejuvenate, Refresh, and Reconnect.&quot;
              Nestled in the Himalayas and surrounded by dense forests in the
              Mussoorie Hills, Punarnava Resort & Spa is conveniently located
              just 10 kilometers from both Dehradun and Mussoorie, offering a
              perfect escape from the hustle and bustle of modern life,
              harmoniously integrated with the sacred land of Shiva.
              {isExpanded && (
                <div>
                  <span>
                    Punarnava is the realization of Acharya Ashish Semwal&apos;s
                    vision. Acharya Ji achieved profound enlightenment at the
                    age of 22 through his relentless pursuit of absolute truth.
                    He envisioned a world where people could experience joy as
                    pure as the morning birdsong, vibrancy akin to blooming
                    flowers, and boundless freedom like a bird in the sky. His
                    deep aspiration was for people to fully appreciate and
                    embrace the beauty of life and nature with a wholehearted
                    <b> “yes” </b> Driven by this vision, Acharya Ji sought out
                    tranquil and peaceful locations for meditation, guided by
                    divine grace. His spiritual journey led him to the serene
                    village of Bhtarli, nestled amidst the lush Himalayan
                    forests near Mussoorie. Here, he discovered an ideal
                    environment to practice meditation and share his vision of
                    embracing the natural world&apos;s splendor. The area&apos;s
                    spiritual energy, calming sound of flowing water, and
                    peaceful surroundings were deeply moving. Acharya Ji was
                    also fascinated by a historic cottage and an eco-friendly
                    walking path built from local materials, designed according
                    to traditional Vastu Shastra principles. Curious about the
                    village&apos;s traditions, he inquired with the elders, who
                    informed him that a British scholar, known as “Firangi
                    Baba,” had discovered this tranquil spot in the 1940s during
                    British rule. The scholar frequented the area for spiritual
                    healing, yoga, meditation, and self-discovery. Acharya Ji’s
                    friend, Abhijit Verma, later visited him to share his
                    dramatic life journey. After earning a Master’s degree from
                    the National University of California and advancing to a
                    high-profile, high-stress corporate position, Abhijit’s
                    health suffered due to extreme stress and mental strain. He
                    was diagnosed with severe heart disease, with only 10% of
                    his heart functioning. Fortunately, Dr. K.R. Balakrishnan at
                    Fortis Malar Hospital in Chennai performed a life-saving
                    heart transplant, which restored his health. Moved by his
                    friend&apos;s ordeal, Acharya Ji began chanting mantras and
                    praying for Abhijit. Thanks to divine grace, Abhijit
                    recovered and is now thriving. Inspired by this serene
                    environment, Acharya Ji established Punarnava Wellness, a
                    premier health resort that emphasizes the integration of
                    mental, emotional, and physical well-being for holistic
                    health. Punarnava is truly a paradise on earth, situated in
                    the sacred land of Shiva. In alignment with its foundational
                    principles, Punarnava is committed to connecting with the
                    traditions of &quot;Vedic Vivah&quot; and the &quot;Panch
                    Tatva&quot; (Five Elements). To embody these values, a
                    temple named Purnishwar Temple has been constructed, serving
                    as a spiritual anchor for the community and reinforcing the
                    resort&apos;s dedication to holistic well-being.
                  </span>
                </div>
              )}
            </p>
          </div>
          <div className="flex justify-center pt-4">
            <button
              onClick={toggleReadMore}
              className="font-sans px-4 py-2 border-2 border-[#be9343] text-[#be9343] "
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          </div>
          <div className="flex justify-center py-8">
            <div className="sm:w-[750px] sm:h-96 overflow-hidden rounded-lg shadow-lg">
              <Image
                className="w-full h-full object-cover"
                src={Story}
                alt="Punarnava story"
                loading="lazy"
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pb-12 px-4">
          <div className="flex justify-center ">
            <h2 className="text-center font-cinzel tracking-widest text-2xl text-[#be9343] font-thin py-8">
              MEETINGS & WEDDINGS
            </h2>
          </div>
          <div className="sm:flex justify-center  sm:gap-x-12 items-center mt-4 ">
            <div className="sm:w-[450px] sm:h-96 overflow-hidden flex justify-center rounded-lg shadow-xl ">
              <Image
                className="w-full h-full object-contain sm:object-cover"
                src={Weeding}
                loading="lazy"
                alt="Meeting"
              ></Image>
            </div>
            <div>
              <h2 className="text-[#be9343] font-cinzel tracking-widest py-2 text-lg">
                Weddings & Celebration
              </h2>
              <p className="sm:w-96 text-sm font-sans">
                Immerse yourself in the divine beauty of a Vedic Wedding at
                Punarnava, nestled in the majestic embrace of the Himalayas. Our
                enchanting resort is a premier destination for weddings and
                honeymoons, situated near the revered Triyuginarayan temple, a
                sacred symbol of Lord Shiva and Parvati&apos;s eternal union.
                With breathtaking vistas of the lush forest, majestic Himalayas,
                George Everest, Hathi Paw, and the rolling Mussoorie hills, our
                expansive and versatile spaces offer an unforgettable setting
                for every momentous occasion. Let the sanctity of nature and the
                bliss of love converge at Punarnava, crafting an unforgettable
                experience for you and your beloved.
              </p>
              <div className="flex">
                <div className="flex items-center gap-x-1 mt-6 text-sm hover:text-[#84662e] font-cinzel tracking-widest text-[#be9343]">
                  <Link href="destination-wedding">View Details </Link>
                  <MdArrowRightAlt className=" size-6" />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex justify-center  sm:gap-x-12 items-center mt-4 pt-20">
            <div>
              <h2 className="text-[#be9343] font-cinzel tracking-widest py-2 text-lg">
                Meetings & Events
              </h2>
              <p className="sm:w-96 text-sm font-sans">
                Boost your corporate meetings for more productivity amid the
                tranquility of The Himalayas at Punarnava Resort & Spa.
                Punarnava Resort & Spa offers you their wonderful conference
                hall, &quot;Manan Conference Hall.&quot; The conference hall
                provides the corporates with the best environment for strategic
                business meetings and planning sessions. And explore 132 acres
                of stunning landscapes with our team-building adventures, where
                every activity is designed to boost morale and forge stronger
                bonds.
              </p>
              <div className="flex">
                <div className="flex items-center gap-x-1 mt-6 mb-2 sm:mb-0 text-sm hover:text-[#84662e] font-cinzel tracking-widest text-[#be9343]">
                  <Link href="/meeting-and-events">View Details </Link>
                  <MdArrowRightAlt className=" size-6" />
                </div>
              </div>
            </div>
            <div className="sm:w-[450px] sm:h-96 overflow-hidden flex justify-center rounded-lg shadow-xl ">
              <Image
                className="w-full h-full object-contain sm:object-cover"
                src={Meeting}
                loading="lazy"
                alt="Meeting"
                layout=""
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 overflow-hidden">
        <div>
          <h2 className="text-center font-cinzel tracking-widest text-[#be9343] text-xl py-10 ">
            Make Your Memories
          </h2>
        </div>
        <div className="AboutGrid">
          <Image
            className="AboutGallery"
            src={Memories1}
            alt="a forest after an apocalypse"
          />
          {/* <video className="AboutGallery" controls>
            <source
              src="https://www.thepunarnava.com/wp-content/uploads/2024/03/Savvy-Fernweh-at-The-Punarnava-A-Luxury-Health-and-Wellness-Resort-in-Dehradun-YouTubeShorts.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
          <Image
            className="AboutGallery"
            src={Gallery2}
            alt="a waterfall and many rocks"
          />
          <Image
            className="AboutGallery"
            src={Memories2}
            alt="a house on a mountain"
          />

          <Image
            className="AboutGallery"
            src={Memories3}
            alt="big rocks with some trees"
          />
          <Image
            className="AboutGallery"
            src={Memories4}
            alt="big rocks with some trees"
          />
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
// export function generateMetadata(){
//   return {
//     title: "About- Punarnava Resort and Spa",
//     description:
//       "Punarnava Resort and Spa - best destination wedding places in Dehradun, India.",
//     alternates: {
//       canonical: "https://www.thepunarnava.com/about-punarnava",
//     },
//   }
// }
