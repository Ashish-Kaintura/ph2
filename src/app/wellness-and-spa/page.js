import React from "react";
import Header from "../_Components/Header";
import Image from "next/image";
import Banner from "/public/Images/WellmessAndSpa/banner.webp";
import Logo from "/public/Images/Logo/punarnava logo png (1).webp";
import TextLogo from "/public/Images/Logo/Punarnnava black text.webp";
import Signature from "/public/Images/WellmessAndSpa/1.webp";
import Massage from "/public/Images/WellmessAndSpa/4.webp";
import Treatment from "/public/Images/WellmessAndSpa/2.webp";
import Wellness from "/public/Images/WellmessAndSpa/3.webp";
import Couple from "/public/Images/WellmessAndSpa/image.webp";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoIosMail, IoMail } from "react-icons/io5";
import Footer from "../_Components/Footer";
import Head from "next/head";
export default function Page() {
  return (
    <>
      <Header />
      <section>
        <div className="sm:pt-0 pt-16">
          <Image
            className="w-full h-full object-cover"
            src={Banner}
            alt="Wellness And Spa"
            loading="lazy"
            layout=""
          />
        </div>
      </section>

      <section className="sm:py-12  py-4">
        <div className="p-4 ">
          <div className="flex justify-center ">
            <div className="flex justify-center">
              <Image width={110} height={110} src={Logo} alt="logo" layout="" />
            </div>
          </div>
          <div className="flex  justify-center">
            <div className="sm:w-[450px] rounded-lg border-[#be9343] border-2 mt-4 sm:flex hidden "></div>
          </div>
          <div className="flex justify-center pt-8">
            <h1 className="text-center font-raleway sm:text-2xl text-normal tracking-widest font-thin text-[#be9343]">
              WELLNESS AND SPA ( PANCHTATVA )
            </h1>
          </div>
          <div className="flex justify-center pt-1">
            <div className="flex justify-center">
              <Image width={250} height={100} src={TextLogo} alt="logo" />
            </div>
          </div>
          <div>
            <p className="text-center font-sans pt-6 sm:px-12 text-gray-800">
              At Punarnava, we strive to give each and every guest an experience
              of a transformative journey. At Punarnava we revitalize your mind,
              body, and spirit. The philosophy of Purnava is to embrace the
              timeless wisdom of PANCHTATVA wellness. The harnessing and the
              healing of the energies of the five elements:{" "}
              <b> earth, water, fire, air, and sky.</b> At our wellness
              sanctuary, we understand that true wellness goes far beyond simple
              relaxation. That&apos;s why we seamlessly integrate time-honored
              Ayurvedic practices with advanced modern medical techniques to
              provide you with exceptional therapeutic benefits. Our dedicated
              team of wellness masters, experienced counselors, and expert
              dietitians work collaboratively to create personalized programs
              tailored specifically to your unique needs and goals. Embark on a
              transformative journey with us and unlock a new level of
              rejuvenation, where ancient wisdom meets contemporary innovation
              for your ultimate well-being.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="lg:flex justify-center py-12">
          <div className="relative overflow-hidden h-[300px] ">
            <Image
              src={Signature}
              alt="Ayurweda Therapi"
              className=" hover:scale-125 transition-all object-cover"
              layout="responsive"
            ></Image>
            {/* <div className=" absolute inset-0 lg:w-[400px] lg:h-[300px] bg-black opacity-60 "></div> */}
            <div className="absolute inset-0 lg:w-[400px] lg:h-[300px] flex  justify-center items-center ">
              <div>
                <h2 className="text-center text-white text-3xl font-raleway tracking-wide ">
                  Ayurveda Therapies
                </h2>
                <div className="flex justify-center pt-2">
                  <button className="px-6 font-sans text-white bg-[#a78139] border-[#be9343] hover:bg-blue-800 py-1 rounded-lg border-2 text-xl ">
                    Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden h-[300px] ">
            <Image
              src={Wellness}
              alt="Ayurweda Therapi"
              className=" hover:scale-125 transition-all object-cover"
              layout="responsive"
            ></Image>
            {/* <div className=" absolute inset-0 lg:w-[400px] lg:h-[300px] bg-black opacity-60 "></div> */}
            <div className="absolute inset-0 lg:w-[400px] lg:h-[300px] flex  justify-center items-center ">
              <div>
                <h2 className="text-center text-white text-3xl font-raleway tracking-wide ">
                  Wellness Therapies
                </h2>
                <div className="flex justify-center pt-2">
                  <button className="px-6 font-sans text-white bg-[#a78139] border-[#be9343] hover:bg-blue-800 py-1 rounded-lg border-2 text-xl ">
                    Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden h-[300px] ">
            <Image
              src={Massage}
              alt="Ayurweda Therapi"
              className=" hover:scale-125 transition-all object-cover"
              layout="responsive"
            ></Image>
            {/* <div className=" absolute inset-0 lg:w-[400px] lg:h-[300px] bg-black opacity-60 "></div> */}
            <div className="absolute inset-0 lg:w-[400px] lg:h-[300px] flex  justify-center items-center ">
              <div>
                <h2 className="text-center text-white text-3xl font-raleway tracking-wide ">
                  Massage
                </h2>
                <div className="flex justify-center pt-2">
                  <button className="px-6 font-sans text-white bg-[#a78139] border-[#be9343] hover:bg-blue-800 py-1 rounded-lg border-2 text-xl ">
                    Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden h-[300px] ">
            <Image
              src={Treatment}
              alt="Ayurweda Therapi"
              className=" hover:scale-125 transition-all object-cover"
              layout="responsive"
            ></Image>
            {/* <div className=" absolute inset-0 lg:w-[400px] lg:h-[300px] bg-black opacity-60 "></div> */}
            <div className="absolute inset-0 lg:w-[400px] lg:h-[300px] flex  justify-center items-center ">
              <div>
                <h2 className="text-center text-white text-3xl font-raleway tracking-wide ">
                  Body Treatments
                </h2>
                <div className="flex justify-center pt-2">
                  <button className="px-6 font-sans text-white bg-[#a78139] border-[#be9343] hover:bg-blue-800 py-1 rounded-lg border-2 text-xl ">
                    Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="p-4 ">
          <div className="flex justify-center ">
            <div className="flex justify-center overflow-hidden w-28 h-28">
              <Image src={Logo} alt="logo" layout="responsive" />
            </div>
          </div>
          <div className="flex  justify-center">
            <div className="sm:w-[450px] rounded-lg border-[#be9343] border-2 mt-4 "></div>
          </div>
          <div>
            <h2 className="text-center text-3xl font-raleway tracking-widest text-[#be9343] pt-12 uppercase">
              Journey to Transformation
            </h2>
          </div>
        </div>
        <div className="lg:flex justify-center p-4  items-center gap-x-8">
          <div>
            <p className="lg:w-[650px] font-sans text-sm">
              Punarnava offers their guests individual sessions, a range of
              comprehensive wellness packages designed to extend over several
              days to several weeks. Punarnava Resort & Spa have immersive
              programs that are meticulously crafted to address various concerns
              such as stress, weight management, detoxification, and overall
              spiritual well-being. At Punarnava Wellness and Spa, we recognize
              that true transformation is a gradual process that demands time
              and patience. To support this journey, we create a serene,
              cocoon-like environment where you can set aside all your daily
              stresses and fully focus on your personal needs. Our aim extends
              beyond merely offering a temporary retreat; we are committed to
              empowering you with the tools, insights, and knowledge necessary
              for sustaining your wellness progress long after you depart from
              our sanctuary. Our goal is to ensure that your experience with us
              fosters enduring change and continues to benefit you well into the
              future.
            </p>
            <div className="mt-4">
              <button className="px-6 font-sans text-white bg-[#a78139] border-[#be9343] hover:opacity-85 py-1 rounded-sm border-2 text-xl uppercase ">
                Choose Your Journey
              </button>
            </div>
          </div>
          <div className="lg:mt-0 mt-6">
            <Image
              width={400}
              height={400}
              src={Couple}
              alt="journey"
              layout="responsive"
            ></Image>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Spa & Wellness Resort in Dehradun",
    description:
      "Luxury spa and wellness resort in India, offering the best practices in Ayurveda, fitness and yoga",
    alternates: {
      canonical: "https://thepunarnava.com/wellness-and-spa",
    },
  };
}
