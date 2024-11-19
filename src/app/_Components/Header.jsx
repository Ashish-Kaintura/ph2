/* eslint-disable @next/next/no-img-element */
// "use client";
// import React from "react";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// // import Logo from "/public/Images/Logo/Punarnnava New Logo-.png";
// import Logo from "/public/Images/Logo/Punarnava-golden-logo.png";
// // import TextLogo from "/public/Images/Logo/Punarnnava text.png";
// import TextLogo from "/public/Images/Logo/Punarnava-golden-text-logo.png";
// import BlackLogo from "/public/Images/Logo/Punarnnava black text.png";
// import { TiThMenu, TiTimes } from "react-icons/ti";
// import Link from "next/link";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleDropdownToggle = () => {
//     setDropdownOpen(!dropdownOpen);
//   };
//   const [isNav1Hidden, setIsNav1Hidden] = useState(false);
//   const [isNav2Sticky, setIsNav2Sticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop =
//         window.pageYOffset || document.documentElement.scrollTop;
//       setIsNav1Hidden(scrollTop > 0); // Hide Nav1 if scrolled down
//       setIsNav2Sticky(scrollTop > 0); // Make Nav2 sticky if scrolled down
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <nav
//         className={`Nav1 flex justify-between mx-auto px-8 bg-white py-4 items-center ${
//           isNav1Hidden ? "hidden" : ""
//         }`}
//       >
//         <div className="flex items-center">
//           <div></div>
//           <div>
//             <Link href="/">
//               {" "}
//               <Image
//                 className=" "
//                 src={BlackLogo}
//                 alt="Logo"
//                 width={140}
//                 height={40}
//               />
//            </Link>
//           </div>
//         </div>

//         <div className="flex gap-x-2 items-center text-black">
//           <div className=" sm:flex hidden items-center gap-x-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="size-6 "
//             >
//               <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
//               <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
//             </svg>

//             <Link
//               className=" font-sans text-sm sm:block hidden"
//               href="mailto: Book@punarnava.com"
//             >
//               {" "}
//               Book@thepunarnava.com
//            </Link>
//           </div>
//           {dropdownOpen && (
//             <div className="dropdown-menu  z-20 ">
//               <ul className="block justify-center">
//                 <div>
//                   <h2 className="text-center font-raleway tracking-widest text-xl  py-4 text-[#be9343]  ">
//                     Wellcome to Punarnava{" "}
//                   </h2>
//                 </div>
//                 <li className="flex justify-center">
//                   <Link href="/login">
//                     <button className="px-4 py-2 rounded-lg text-white bg-[#be9343] w-28 font-sans text-sm">
//                       Login
//                     </button>
//                   </Link>
//                 </li>
//                 <li className="flex justify-center">
//                   <button className="px-4 py-2 rounded-lg text-white bg-[#be9343] w-28 font-sans text-sm">
//                     Sign Up
//                   </button>
//                 </li>
//                 <div className="bg-[#2A2B2D] mt-4">
//                   <li className="text-white font-sans text-sm"></li>
//                 </div>
//               </ul>
//             </div>
//           )}
//           <div className=" w-8 h-8 rounded-full flex items-center text-center justify-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="size-10 "
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </div>
//           <div>
//             <h2 className=" font-sans  text-sm xl:block hidden">
//               Sign In or Join
//             </h2>
//           </div>
//           <div className="block items-center">
//             <button
//               onClick={handleDropdownToggle}
//               className="cursor-pointer flex justify-center relative"
//             >
//               {dropdownOpen ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="size-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="m4.5 15.75 7.5-7.5 7.5 7.5"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="size-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="m19.5 8.25-7.5 7.5-7.5-7.5"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </nav>

//       <nav
//         className={`Nav2 flex justify-between mx-auto lx:px-8 px-2 py-4 text-white items-center fixed w-full z-[10] ${
//           isNav2Sticky ? "top-0" : ""
//         }`}
//         style={{
//           background: "#2D2F30",
//           // backgroundImage:
//           //   "linear-gradient(90deg, rgba(16,16,17,1) 0%, rgba(54,56,58,1) 91%)",
//         }}
//       >
//         <div className="">
//           <h2 className="text-xl font-sans uppercase xl:flex hidden sm:ml-12 ps-20">
//             The Punarnava Resort & Spa
//           </h2>
//         </div>
//         <div className=" flex justify-start items-center  w-[450px]">
//           <div>
//             <Link href="/">
//               {" "}
//               <Image
//                 className=" "
//                 src={Logo}
//                 alt="Logo"
//                 width={60}
//                 height={40}
//               />
//            </Link>
//           </div>
//           <div>
//             <Link href="/">
//               {" "}
//               <Image
//                 className=" "
//                 src={TextLogo}
//                 alt="Logo"
//                 width={180}
//                 height={60}
//               />
//            </Link>
//           </div>
//         </div>

//         <div>
//           <Link href="https://www.swiftbook.io/inst/#home?propertyId=322MTLBmiYVgNQzaaMpAFk2Mzc=&JDRN=Y">
//             <button className="px-4 py-2 bg-white rounded-sm  text-black shadow-lg  hidden xl:block cursor-pointer ">
//               Book Now
//             </button>
//           </Link>
//         </div>
//         <div>
//           <button onClick={toggleMenu} className="cursor-pointer">
//             {isMenuOpen ? (
//               <TiTimes className=" size-8" />
//             ) : (
//               <TiThMenu className=" size-8" />
//             )}
//           </button>
//         </div>
//       </nav>
//       {/* phone nav  */}
//       <div
//         className={`sidenav ${isMenuOpen ? "open" : ""} block z-20`}
//         style={{ top: isScrolled ? 0 : 70 }}
//       >
//         <div className=" flex justify-center pt-[25px] ml-2">
//           <Link href="https://www.swiftbook.io/inst/#home?propertyId=322MTLBmiYVgNQzaaMpAFk2Mzc=&JDRN=Y">
//             {" "}
//             <button className="px-4 py-2 bg-white rounded-sm  text-black shadow-lg  hidden xl:block cursor-pointer ">
//               Book Now
//             </button>
//           </Link>
//         </div>
//         <div className="flex justify-center">
//           <ul className="pt-2">
//             <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
//               <Link href="/">Home</Link>
//             </li>
//             <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
//               <Link href="/about-punarnava">About Punarnava</Link>
//             </li>
//             <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
//               <Link href="/destination-wedding">Destination wedding</Link>
//             </li>
//             <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
//               <Link href="/meeting-and-events">Meeting and Events</Link>
//             </li>
//             <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
//               <Link href="/Room-suites">Room & suites</Link>
//             </li>
//             <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
//               <Link href="/wellness-and-spa">Wellness and spa</Link>
//             </li>
//             {/* <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
//               <Link href="/exclusive-offers">Exclusives offers</Link>
//             </li> */}
//             {/* <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
//               <Link href="/parking-transportation">
//                 Parking & Transportation{" "}
//               </Link>
//             </li> */}
//             <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
//               <Link href="/managing-director">Managing director</Link>
//             </li>
//             <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
//               <Link href="/activities">Activities</Link>
//             </li>
//             {/* <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
//               <Link href="/philosophy">Philosophy</Link>
//             </li> */}
//             <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
//               <Link href="/facilities">Facilities</Link>
//             </li>
//             <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
//               <Link href="/dining">Dining </Link>
//             </li>

//             <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
//               <Link href="/contact-us">Contact us</Link>
//             </li>
//             <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
//               <Link href="/gallery">Gallery</Link>
//             </li>
//           </ul>
//           <div>
//             <button onClick={toggleMenu} className="cursor-pointer closebtn">
//               {isMenuOpen ? (
//                 <TiTimes className=" size-8" />
//               ) : (
//                 <TiThMenu className=" size-8" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// transparent

// components/Navbar.js
"use client";
import { useState, useEffect } from "react";
import { TiThMenu, TiTimes } from "react-icons/ti";
import Link from "next/link";
import Logo from "/public/Images/Logo/punarnava white.webp";
import TextLogo from "/public/Images/Logo/punarnava white text1.webp";
import Image from "next/image";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNav2Sticky, setIsNav2Sticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setIsNav2Sticky(scrollTop > 0); // Make Nav2 sticky if scrolled down
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-10 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0D0C0C]  backdrop-blur-[1.4495413303375244px] bg-opacity-40 "
            : "bg-[#0D0C0C]  backdrop-blur-[1.4495413303375244px] bg-opacity-40"
        }`}
      >
        <div className=" px-4 sm:py-4 py-1 flex justify-between items-center">
          <div className=" flex justify-start items-center  lg:ps-8 ps-1 ">
            <div>
              <Link href="/">
                {" "}
                <Image
                  className=" "
                  src={Logo}
                  alt="Logo"
                  width={60}
                  height={40}
                />
              </Link>
            </div>
            <div>
              <Link href="/">
                {" "}
                <Image
                  className=" "
                  src={TextLogo}
                  alt="Logo"
                  width={150}
                  height={60}
                />
              </Link>
            </div>
          </div>

          <ul
            className={`lg:flex hidden font-sans font-light tracking-wide  items-center gap-x-4 text-[19px] uppercase ${
              isScrolled ? "text-white " : "text-white"
            }`}
          >
            <li>
              <Link href="/about-us" className="">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/destination-wedding" className="">
                Destination Wedding
              </Link>
            </li>
            <li>
              <Link href="/Room-suites" className="">
                Room & Suites
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="">
                Contact US
              </Link>
            </li>
          </ul>

          <div>
            {" "}
            <Link href="https://www.swiftbook.io/inst/#home?propertyId=322MTLBmiYVgNQzaaMpAFk2Mzc=&JDRN=Y">
              <button className="px-4 py-2 bg-white rounded-sm  text-black shadow-lg  hidden xl:block cursor-pointer ">
                Book Now
              </button>
            </Link>
          </div>
          <div>
            <button
              onClick={toggleMenu}
              className={`cursor-pointer ${
                isScrolled ? "text-white " : "text-white"
              }`}
            >
              {isMenuOpen ? (
                <TiTimes className=" size-8" />
              ) : (
                <TiThMenu className=" size-8" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`sidenav ${isMenuOpen ? "open" : ""} h-full  block z-20 sm:mt-[90px] mt-[65px]`}
        style={{ top: isScrolled ? 0 : 0 }}
      >
        <div
          className={`block justify-center h-full ${
            isScrolled
              ? "bg-[#0D0C0C]  backdrop-blur-[1.4495413303375244px] bg-opacity-40"
              : "bg-[#0D0C0C]  backdrop-blur-[1.4495413303375244px] bg-opacity-40"
          }`}
        >
          {/* <div className=" flex justify-start pt-[25px] pl-[130px]">
            <Link href="https://www.swiftbook.io/inst/#home?propertyId=322MTLBmiYVgNQzaaMpAFk2Mzc=&JDRN=Y">
              <button className="px-6 py-2 bg-white rounded-sm  text-black shadow-lg  hidden xl:block cursor-pointer ">
                Book Now
              </button>
            </Link>
          </div> */}
          <ul className="pt-2 text-start ps-12 ">
            <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
              <Link href="/">Home</Link>
            </li>
            <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
              <Link href="/about-us">About Punarnava</Link>
            </li>
            <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
              <Link href="/destination-wedding">Destination Wedding</Link>
            </li>
            <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
              <Link href="/meeting-and-events">Meeting and Events</Link>
            </li>
            <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
              <Link href="/Room-suites">Room & Suites</Link>
            </li>
            <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
              <Link href="/wellness-and-spa">Wellness and Spa</Link>
            </li>

            <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
              <Link href="/managing-director">Managing Director</Link>
            </li>
            <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
              <Link href="/activities">Activities</Link>
            </li>

            <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
              <Link href="/facilities">Facilities</Link>
            </li>
            <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
              <Link href="/dining">Dining </Link>
            </li>

            <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li className=" font-sans mt-2 text-white text-xl font-thin hover:text-[#be9343] ">
              <Link href="/gallery">Gallery</Link>
            </li>
          </ul>
          {/* <div>
            <button onClick={toggleMenu} className="cursor-pointer closebtn">
              {isMenuOpen ? (
                <TiTimes className=" size-8" />
              ) : (
                <TiThMenu className=" size-8" />
              )}
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}
