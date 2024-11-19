import React from "react";
import Error from "/public/Images/404/404.webp";
import Image from "next/image";
import Header from "./_Components/Header";
import Footer from "./_Components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <section className="">
        <div className="flex justify-center overflow-hidden sm:h-[100vh] ">
          <Image
            layout="responsive"
            className="w-full h-full object-contain"
            src={Error}
            alt="404 error"
          ></Image>
        </div>
      </section>
      <Footer />
    </>
  );
}
