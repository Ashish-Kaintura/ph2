// components/Gallery.js
import Image from "next/image";
import Image1 from "/public/Images/gallery/gallery1.webp";
import Image2 from "/public/Images/gallery/gallery2.webp";
import Image3 from "/public/Images/gallery/gallery3.webp";
import Image4 from "/public/Images/gallery/gallery4.webp";
import Image5 from "/public/Images/gallery/gallery5.webp";
import Image6 from "/public/Images/gallery/gallery6.webp";
import Image7 from "/public/Images/gallery/gallery7.webp";
import Image8 from "/public/Images/gallery/gallery8.webp";
import Image9 from "/public/Images/gallery/gallery collage 2.webp";
// Add more imports as needed

// Add the rest of the images similarly

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,

  // Add the rest of the image variables here
];

const GalleryBlock = () => {
  return (
    <div className="p-4  sm:pt-20">
      <div className="flex justify-between sm:px-10 px-2 items-center my-4 ">
        <div>
          <h2 className="sm:text-2xl text-xs tracking-widest font-raleway sm:mb-4 mb-0 text-[#be9343] lg:invisible hidden   ">
            GALLERY
          </h2>
        </div>
        <div>
          <h2 className="text-2xl tracking-widest font-cinzel sm:mb-4 mb-0 sm:mt-4 mt-0 text-[#be9343] ">
            GALLERY
          </h2>
        </div>
        <div>
          <button className="sm:px-4 px-2 py-2  border-[#be9343] text-[#be9343] hover:bg-[#be9343] hover:text-white border-2 rounded-sm sm:text-sm text-xs font-raleway tracking-widest shadow-xl">
            View More
          </button>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        {images.map((src, index) => (
          <div key={index} className="relative lg:h-52 overflow-hidden ">
            <Image
              src={src}
              className="w-full h-full object-cover"
              alt={`Gallery image ${index + 1}`}
            />
          </div>
        ))}
      </div> */}
      <div className="flex justify-center bg-[#be9343] ">
        <Image
          src={Image9}
          className="w-full h-full object-contain "
          alt="gallery"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default GalleryBlock;
