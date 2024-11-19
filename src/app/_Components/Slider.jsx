"use client";
import { useState } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import Image from "next/image";
import Image1 from "/public/Images/home/destination-wedding-2.webp";
import Image2 from "/public/Images/home/destination-wedding-4.webp";
import Image3 from "/public/Images/home/destination-wedding-1.jpg";
import Image4 from "/public/Images/home/destination-wedding-5.webp";
import Image5 from "/public/Images/home/corporate-events.jpg";
import Image6 from "/public/Images/home/destination-wedding-6_1.webp";
import Image7 from "/public/Images/home/destination-wedding-6.jpg";
import Image8 from "/public/Images/home/destination-wedding-7.jpg";
import Image9 from "/public/Images/MeetingAndEvent/4.jpg";
import Image10 from "/public/Images/MeetingAndEvent/5.jpg";
import Image11 from "/public/Images/MeetingAndEvent/6.jpg";
// import Image5 from "../public/Images/home/21 studio.jpg";
// import Image6 from "../public/Images/home/30familysuits.jpg";
// import Image7 from "../public/Images/home/50premiumroom.jpg";
export default function Slider() {
  const images = [
    { src: Image1, name: "Destination-wedding" },
    { src: Image3, name: "Destination-wedding" },
    { src: Image2, name: "Destination-wedding" },
    { src: Image7, name: "Destination-wedding" },
    // { src: Image8, name: "Corporate-events" },
    // { src: Image6, name: "Corporate-events" },
    // { src: Image10, name: "Corporate-events" },
    // { src: Image11, name: "Corporate-events" },
    { src: Image4, name: "Destination-wedding" },
    // { src: Image5, name: "Destination-wedding" },
    // { src: Image9, name: "Destination-wedding" },
    // { src: Image5, name: "21 Studio" },
    // { src: Image6, name: "30 Family Suits" },
    // { src: Image7, name: "50 Premimum Rooms" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);

  const goToPrevious = () => {
    setTransition(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setTransition(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleTransitionEnd = () => {
    setTransition(false);
  };
  return (
    <div>
      <div className=" py-10">
        <div>
          <h2 className="text-center text-3xl font-cinzel uppercase text-[#be9343] py-8 tracking-widest">
            Destination Wedding & Events
          </h2>
        </div>
        <div className="justify-center items-center flex-col">
          <div className="sm:flex hidden justify-evenly items-center overflow-hidden">
            {images
              .slice(currentIndex, currentIndex + 3)
              .map((image, index) => (
                <div
                  key={index}
                  className="w-[450px] h-[400px] overflow-hidden"
                >
                  <Image
                    className="w-full h-full object-cover"
                    src={image.src}
                    alt={image.name}
                  />
                </div>
              ))}
          </div>
          <div className="sm:hidden flex justify-evenly items-center overflow-hidden p-4">
            {images
              .slice(currentIndex, currentIndex + 1)
              .map((image, index) => (
                <div
                  key={index}
                  className=" w-[450px] h-[400px] overflow-hidden"
                >
                  <Image
                    className="w-full h-full object-cover"
                    src={image.src}
                    alt={image.name}
                  />
                </div>
              ))}
          </div>
          {/* <div>
            {images.map((image, index) => (
              <div key={index} className="">
                {index === currentIndex && (
                  <h2 className=" text-start sm:px-12 ps-6 pt-4 text-lg tracking-widest font-raleway text-[#be9343]">
                    {image.name}
                  </h2>
                )}
              </div>
            ))}
          </div> */}
          <div className="mt-4 flex justify-end px-12 gap-x-8 ">
            <button
              onClick={goToPrevious}
              className={`bg-[#ad8c4e] hover:bg-amber-800 text-white font-bold py-2 px-4 rounded-l ${
                currentIndex === 0 ? "pointer-events-none opacity-50" : ""
              }`}
              disabled={currentIndex === 0}
            >
              <MdOutlineNavigateBefore className="size-7" />
            </button>
            <button
              onClick={goToNext}
              className="bg-[#ad8c4e] hover:bg-amber-800 text-white font-bold py-2 px-4 rounded-r"
            >
              <MdOutlineNavigateNext className="size-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
