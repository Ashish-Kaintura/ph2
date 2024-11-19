import React from "react";
import Image from "next/image";
import Header from "../_Components/Header";
import Footer from "../_Components/Footer";
import Banner from "/public/Images/managing director/banner.webp";
import Director from "/public/Images/managing director/Dr Ashish Semwal2.webp";
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
            layout="responsive"
          />
        </div>
      </section>

      <section>
        <div className="lg:flex block lg:justify-around py-28 px-4">
          <div className="overflow-hidden lg:w-[450px] lg:h-[450px] rounded-full hover:rounded-none transition-all ease-in-out duration-200">
            <Image
              src={Director}
              className="w-full h-full object-contain shadow-lg hover:scale-125 transition-all ease-in-out duration-150"
              layout="responsive"
              width={450}
              height={450}
            />
          </div>
          <div className="">
            <div>
              <h1 className="sm:text-3xl text-2xl lg:mt-0 mt-6   font-cinzel tracking-widest text-center  uppercase border-b-2 pb-4 font-semibold text-[#be9343]">
                managing-director
              </h1>
            </div>
            <div>
              <h2 className="text-xl font-sans tracking-wide text-start pt-5 font-semibold text-[#be9343]">
                Dr Ashish Semwal
              </h2>
            </div>
            <div>
              <p className="lg:w-[550px] pt-4 text-sm font-sans ">
                Dr. Ashish Semwal is a visionary leader, spiritual healer, and
                motivational speaker who has dedicated his life to promoting
                self-discovery and personal growth. Having academic
                qualification of B.Com, M.Com, MBA and Ph.D, Dr Semwal is an
                educationist by training but has practical experience in social
                activism and spiritual healing. His journey started in the year
                2006 when he started “Vishwa Jan Jagriti Mission” a NGO that
                works for Environment Conservation, Women Empowerment and
                Education. Based on this foundation, he founded the “Astitva”
                trust in 2008, to support the cause of holistic education and
                well-being. Ultimately in 2017, the Punarnava Yog Foundation
                officially manifested into Punarnava Wellness Resort & Spa,
                following Dr. Semwal’s passion for wellness awareness and the
                hospitality industry.
              </p>
              <br />
              <p className="lg:w-[550px] pt-4 text-sm font-sans">
                Pertaining to Dr. Semwals philosophy he says things like, “if
                you convert your anger and attitude to gratitude you should
                become Shiva. ” His work towards making a difference in society
                has seen him garner many awards such as the “Uttarakhand Ratna
                Award,” “Peace Messenger Award,” “Youth Icon Award,” and
                “Leadership Award.” Dr Semwal is a contemporary mystic who has
                an emphasis on love, celebration and creativity in all aspects
                of human life including working life. His multifaceted approach
                to wellness and social responsibility continues to inspire and
                guide individuals on their path to self-actualization and
                community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Managing Director-Punarnava Resort and Spa",
    description:
      "Managing director- Aacharya Ashish Semwal spiritual healer and motivational leader",
    alternates: {
      canonical: "https://thepunarnava.com/managing-director",
    },
  };
}
