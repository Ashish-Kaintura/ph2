import Header from "./_Components/Header";
import Image from "next/image";
import Image2 from "/public/Images/home/homeabout.webp";
// import Video1 from "/public/videos/DJI_00071.mp4";
import Slider from "./_Components/Slider";
import Celeb from "/public/Images/celebrity/big-image4.webp";
import Celeb2 from "/public/Images/celebrity/big-image5.webp";
import Dining from "./_Components/Dining";
import Rooms from "./_Components/Rooms";
import GalleryBlock from "./_Components/GalleryBlock";
import backgroundImage from "/public/Images/download.png"; // Adjust the path as necessary
import petImage from "/public/Images/Pet Friendly.webp"; // Adjust the path as necessary
import Amenities from "./_Components/Amenities";
import Footer from "./_Components/Footer";
import Things from "./_Components/Things";

import Script from "next/script";
import Activities from "./_Components/Activities";

export const metadata = {
  title: "Best 5 Star Hotel in Dehradun | Punarnava Resort & Spa",
  description:
    "The Punarnava Resort & Spa - Top rated Luxury 5 star resorts for destination wedding and events with Swimming Pools in the middle of forest.",
  alternates: {
    canonical: "https://thepunarnava.com/", // Replace with your canonical URL
  },
};
export default function Home() {
  return (
    <>
      <main>
        <Header />
        <div className=" h-[750px] overflow-hidden ">
          {/* <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            src={Video1}
          ></video> */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/Home Page Video.mp4" type="video/mp4" />
            <track
              src="/videos/Home Page Video.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          </video>
        </div>
        <div id="quickbook-widget" className=" pt-8 "></div>

        <Script
          src="https://www.swiftbook.io/plugin/js/booking-service.min.js"
          id="propInfo"
          propertyid="423MTkBCCnHDj92hDroqmMfZLfi2Mzc="
          cal-rendererId="quickbook-widget"
          JDRN="Y"
          strategy="lazyOnload"
        />
        <div>
          <div className="w-full justify-center gap-x-10 sm:flex block items-center py-16 sm:px-0 px-4">
            <div className="sm:hidden flex justify-center sm:w-[540px] sm:h-[450px] h-[450px] ">
              <Image
                className="overflow-hidden w-full h-full object-cover z-0   brightness-125"
                // style={{
                //   clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                // }}
                src={Image2}
                alt="punarnava hotel "
                layout="responsive"
              ></Image>
            </div>
            <br />
            <div>
              <h1 className=" text-3xl font-thin text-[#be9343] font-cinzel ">
                {/* Welcome to Punarnava Resort & Spa Rejuvenate, Refresh, <br />
                and Reconnect in the Paradise of the Himalayas */}
                Welcome To Punarnava
              </h1>
              <br />
              <p className="sm:w-[500px] font-sans">
                Experience unparalleled luxury and serenity at Punarnava Resort
                & Spa, India’s premier destination for relaxation, rejuvenation,
                and reconnection with nature. Punarnava is regarded as one of
                the best five-star resorts in Dehradun. Nestled in the Himalayas
                and surrounded by dense forests in the Mussoorie Hills,
                Punarnava Resort & Spa is conveniently located just 10
                kilometers from both Dehradun and Mussoorie. This is your
                perfect getaway from the hustle of modern life, harmoniously
                integrated with the land of Shiva.
                <br />
                <br /> The concept of Punarnava embodies peace and prosperity
                and is deeply rooted in ancient Indian traditions and
                philosophies, particularly in Ayurveda and spiritual contexts.
                The term Punarnava, derived from Sanskrit, translates to
                &quot;renewal&quot; or &quot;regeneration.&quot; It comes from
                &quot;punar,&quot; meaning &quot;again,&quot; and
                &quot;nava,&quot; meaning &quot;new&quot; or &quot;fresh.&quot;
                In Ayurveda, Punarnava also refers to a medicinal herb found in
                the region, known for its rejuvenating and detoxifying
                properties.
                <br /> Let the symphony of nature&apos;s sounds, the warmth of
                golden light, and the gentle rustle of leaves transport you to
                deep relaxation. Here, in this sacred space, you can Awaken your
                spirit to the whispers of the forest, Rekindle your connection
                to the earth&apos;s primal heartbeat, and Surrender to the
                opulence of a luxury that nurtures body and soul. In this
                pyramid sanctuary, time stands still, and the boundaries between
                self and nature dissolve, leaving only the essence of peace and
                unity.
              </p>
              <br />
              <p className="sm:w-[450px] font-sans">
                Village – Bhitarli, Kimadi, Lambidhar – Mussoorie Road,
                Dehradun, Uttarakhand, India
              </p>
            </div>
            <div className="sm:flex hidden justify-center w-[520px] h-[420px] ">
              <Image
                className="overflow-hidden w-full h-full object-cover brightness-125 contrast-100 "
                // style={{
                //   clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                // }}
                alt="punarnava hotel "
                layout="responsive"
                src={Image2}
              ></Image>
            </div>
          </div>
        </div>
        <section>
          <Slider />
        </section>

        <section
          className=" sm:flex sm:justify-between justify-center p-8 sm:px-20 sm:py-12 items-center gap-x-8 bg-fixed bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h2 className="text-3xl font-cinzel tracking-widest uppercase text-black">
              Celebrity At Punarnava
            </h2>
            <br />
            <p className="font-sans text-xm sm:w-[450px]">
              Punarnava is a blessed property nestled in the lap of the
              Himalayas. The journey Punarnava has taken over the last three
              years has been splendid.Punarnava hosted an ample number of social
              parties and events. The guests were blown away as they were
              treated with honor and respect at Punarnava.
              <br />
              <br />
              Punarnava’s luxurious retreat, amidst breathtaking mountains, has
              played host to India&apos;s most celebrated celebrities, who seek
              refuge in its exclusive ambiance. Bask in the same splendid views
              and indulgent atmosphere that have enchanted the stars and left
              them yearning to return. At Punarnava, the boundaries between
              reality and celebrity blur, inviting you to live like a star in a
              world of unbridled luxury and natural beauty.
            </p>
          </div>
          <div className="sm:pt-0 pt-8 sm:flex block gap-x-2">
            <div className="sm:w-96 sm:h-96 overflow-hidden">
              {" "}
              <Image
                alt="punarnava celibrity vist"
                layout=""
                className="w-full h-full object-cover"
                src={Celeb}
              ></Image>
            </div>
            <div className="sm:w-96 sm:h-96 sm:mt-0 mt-2 overflow-hidden">
              <Image
                alt="punarnava celibrity vist"
                layout=""
                className=""
                src={Celeb2}
              ></Image>
            </div>
          </div>
        </section>
        <section>
          <Rooms />
        </section>
        <section>
          <Dining />
        </section>
        <section>
          <Things />
        </section>
        <section>
          <GalleryBlock />
        </section>
        <section>
          <div
            className="flex items-center justify-center py-10 sm:h-[70vh]  bg-cover bg-fixed bg-center bg-no-repeat "
            style={{
              backgroundImage: `url(${backgroundImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <div className="bg-white shadow-xl border-2 rounded-lg flex flex-col md:flex-row max-w-4xl w-full">
              <div className="p-6 flex flex-col justify-between md:w-1/2">
                <h2 className="text-2xl font-cinzel uppercase tracking-widest text-[#be9343] mb-4">
                  We Are Pet Friendly
                </h2>
                <p className="text-gray-700 font-sans mb-6">
                  We cheerily welcome your furry friend and your travel
                  companions, either they are dogs or cats. Remember to tell us
                  if you&apos;re bringing your furry friend along at least three days
                  before your visit so we can get ready to welcome them!
                </p>
                <div className="mb-4">
                  <h3 className="text-sm font-sans text-gray-900">Pet Fees</h3>
                  <p className="text-gray-700">
                    Up to three nights: ₹2,500 / 1 stay
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-sans text-gray-900">
                    Weight Limits
                  </h3>
                  <p className="text-gray-700">
                    Individual pet weight limit: 22 kilograms
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 md:w-1/2 w-full shadow-xl">
                <Image
                  src={petImage}
                  alt="Pet on bed"
                  className="rounded-b-lg md:rounded-r-lg md:rounded-b-none object-cover w-full h-full"
                  width={500}
                  height={500}
                />
              </div>
            </div> */}
            <Activities />
          </div>
        </section>

        <section>
          <Amenities />
        </section>
        {/* <SideLink /> */}
        {/* <ChatBox /> */}
        <div className="">
          <Footer />
        </div>
      </main>
    </>
  );
}
