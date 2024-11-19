import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Header from "../_Components/Header";
import Footer from "../_Components/Footer";
import { VscFeedback } from "react-icons/vsc";
import Head from "next/head";

export default function page() {
  return (
    <>
      <Header />
      <div className="sm:mx-12 sm-px-12  px-2">
        <h1 className="font-cinzel tracking-wide text-[#be9343] text-center   text-3xl uppercase pt-28">
          Contact us
        </h1>
        <div className="sm:mx-12 sm-px-12">
          <p className=" text-center font-sans pt-8  pb-1 text-sm">
            Welcome to your second home. At Punarnava, we are ready to give you
            a memorable experience. Your stay will be unforgettable, combining
            comfort, luxury, and the natural beauty of the Himalayas. Punarnava
            Resort & Spa is your sanctuary, where every moment feels like home.
            Come, relax, and enjoy the warmth of our hospitality at Punarnava.
          </p>

          <p className="text-center font-sans  text-sm">
            For any inquiries about our services or to provide feedback,
            including complaints, please feel free to contact us. We value all
            input as it helps us improve and better serve you.
          </p>

          <p className="text-center font-sans  text-sm">
            The Punarnava Resort, located in the breathtaking Uttarakhand
            Himalayas, offers a serene escape in the ‘Devbhumi.’
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-12 sm-px-12 pt-8 ">
        <div className="sm:mx-12 sm-px-12 sm:flex block flex-wrap justify-center gap-5 sm:gap-32 items-center">
          <div className="flex flex-col justify-center text-center">
            <div className="flex justify-center py-4">
              <FaLocationDot className="size-7 text-[#be9343]" />
            </div>
            <p>
              Village – Bhitarli, Kimadi, Lambidhar – Mussoorie Road,
              <br />
              Dehradun, Uttarakhand, India - 248001
            </p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <div className="flex justify-center py-4">
              <FaPhoneAlt className="size-7 text-[#be9343]" />
            </div>
            <p>+91 7217011476 </p>
          </div>
          <div className="flex flex-col justify-center text-center">
            <div className="flex justify-center py-4">
              <IoMail className="size-7 text-[#be9343]" />
            </div>
            <p> Book@thepunarnava.com</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap sm:justify-around justify-center sm:gap-32  sm:py-12 items-center">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.6993311595234!2d78.03747417545033!3d30.416271374738553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7ffdd2a351d%3A0xd70fc800adde2fcd!2sThe%20Punarnava%20Wellness%20resort!5e0!3m2!1sen!2sin!4v1724418338834&zoom=50"
              allowFullScreen
              loading="lazy"
              className="sm:w-[600px] w-[410px] sm:h-[450px] h-[450px]"
            ></iframe>
          </div>
          <div>
            <form>
              <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <p className="text-xl font-bold leading-tight  text-[#be9343] md:text-2xl  uppercase tracking-widest">
                      Get in Touch
                    </p>
                    <div className="flex justify-between gap-x-4">
                      {/* Name Field */}
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600 font-sans">
                          Your Name
                        </label>
                        <input
                          placeholder="John Doe"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                          id="username"
                          type="text"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600 font-sans">
                          Your Email
                        </label>
                        <input
                          placeholder="example@example.com"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                          id="email"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between gap-x-4">
                      {/* Phone Number Field */}
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600 font-sans">
                          Your Phone Number
                        </label>
                        <input
                          placeholder="123-456-7890"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                          id="phone"
                          type="tel"
                        />
                      </div>
                      {/* company Name*/}
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600 font-sans">
                          Subject
                        </label>
                        <input
                          placeholder="For Booking"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                          id="Subject"
                          type="text"
                        />
                      </div>
                    </div>
                    {/* Message Field */}
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-600 font-sans">
                        Your Message
                      </label>
                      <textarea
                        placeholder="Write your message here..."
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                        id="message"
                        rows="4"
                      />
                    </div>

                    <button
                      className="w-full bg-[#be9343] hover:bg-[#e8b75c] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <section>
        <div className="flex justify-center py-8">
          <button className="px-4 py-2 flex gap-x-2 items-center rounded-sm border-2 border-[#be9343] hover:rounded-lg hover:bg-[#be9343] hover:text-white hover:border-white transition-all ease-in duration-200">
            Feedback & Review <VscFeedback className=" size-6" />
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export function generateMetadata() {
  return {
    title: "Contact with Punarnava Resort & Spa",
    description:
      "Punarnava Resort & Spa | The Best resorts in Dehradun Mussoorie Road",
    alternates: {
      canonical: "https://thepunarnava.com/contact-us",
    },
  };
}
