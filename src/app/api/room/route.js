// src\app\api\room\route.js
export const rooms = [
  {
    id: 1,
    name: "Punarnava Exclusive Villas",
    image1: "/Images/rooms/Villa.webp",
    image: [
      "/Images/rooms/Villa.webp",
      "/Images/rooms/Villa1.webp",
      "/Images/rooms/Villa2.webp",
      "/Images/rooms/Villa3.webp",
      "/Images/rooms/Villa4.webp",
    ],
    ft: "516 sq ft",
    view: "Mountain View",
    description:
      "Come and discover the peak of luxury with the Exclusive Villa Punarnava has to offer. The Villas are the perfect example of luxury meets the breathtaking beauty of nature. Each villa is a luxurious retreat with its own private plunge pool, a peaceful forest setting, and amazing views of the Himalayas. Enjoy the beautiful scenery of Mussoorie Hills and breathtaking view of the Himalaya in style is ideal for families or groups wanting a special and private getaway.",
    category: "Villa",
    price: 300,
    roomAmenities: [
      "Free WiFi",
      "Air Conditioning",
      "Room Service",
      "Minibar",
      "Smart TV",
    ],
  },
  {
    id: 2,
    name: "PUNARNAVA EXCLUSIVE Cotages",
    image1: "/Images/rooms/Cotage.webp",
    image: [
      "/Images/rooms/Cotage.webp",
      "/Images/rooms/cotage1.webp",
      "/Images/rooms/cotage2.webp",
      "/Images/rooms/cotage3.webp",
      "/Images/rooms/cotage4.webp",
    ],
    ft: "400 ft²",
    view: "Mountain View",
    description:
      "Dive into the epitome of luxury with our Cottages. Our cottages are the perfect example of nature and elegance harmoniously meeting. Situated between the lush landscape, breathtaking vistas of verdant forests, and majestic mountains, each cottage is paired with a private balcony perfect for the panoramic beauty. Revel in the serene splendor of the   Himalayas in the best resort in Dehradun with all the top-tier amenities tailored to ensure guests the utmost comfort.",
    category: "Cotage",
    price: 300,
    roomAmenities: [
      "Free WiFi",
      "Air Conditioning",
      "Room Service",
      "Minibar",
      "Smart TV",
    ],
  },
  {
    id: 3,
    name: "Punarnava Deluxe Room With Balcony",
    image1: "/Images/rooms/delux4.webp",
    image: [
      "/Images/rooms/delux4.webp",
      "/Images/rooms/delux5.webp",
      "/Images/rooms/delux6.webp",
      "/Images/rooms/delux7.webp",
      "/Images/rooms/delux8.webp",
    ],
    ft: "516 sq ft",
    view: "Mountain View",
    description:
      "Punarnava provides Deluxe Rooms specially designed to give every guest the best experience, blending style and comfort. Each room exudes a welcoming and inviting atmosphere featuring elegance with modern convenience. The large windows offer a magnificent view of the Himalayas. Guests indulge in the cozy environment that gives a peaceful and immersive stay in the heart of this stunning region.",
    category: "Room",
    price: 300,
    roomAmenities: [
      "Free WiFi",
      "Air Conditioning",
      "Room Service",
      "Minibar",
      "Smart TV",
    ],
  },
  {
    id: 4,
    name: "Punarnava Deluxe Room",
    image1: "/Images/rooms/delux1.webp",
    image: [
      "/Images/rooms/delux1.webp",
      "/Images/rooms/delux2.webp",
      "/Images/rooms/delux3.webp",
    ],
    ft: "387 sq ft",
    view: "Mountain View",
    description:
      "Elevate your mountain getaway with our Deluxe Rooms, each featuring a private balcony for an unparalleled experience. These luxurious retreats go beyond conventional lodging, allowing you to immerse yourself in nature’s beauty easily. Step onto your private deck and breathe in the crisp, fresh mountain air while soaking in panoramic views of the majestic Himalayan range, George Everest, Hathi Paw, and the picturesque Mussoorie hills. Embrace the ultimate blend of comfort and natural splendor from the serenity of your own private vantage point.",
    category: "Room",
    price: 300,
    roomAmenities: [
      "Free WiFi",
      "Air Conditioning",
      "Room Service",
      "Minibar",
      "Smart TV",
    ],
  },
  {
    id: 5,
    name: "Punarnava Family Suite",
    image1: "/Images/suits/Family-suites.webp",
    image: [
      "/Images/suits/Family-suites.webp",
      "/Images/suits/Family-suites1.webp",
      "/Images/suits/Family-suites2.webp",
    ],
    ft: "1,022 sq ft",
    view: "Mountain View",
    description:
      "At Punarnava, guests can enjoy staying in Family Suits that offer the perfect combination of spaciousness and privacy, ensuring that every member of your family feels at ease. This luxurious suite has a master bedroom and supplementary bedroom with its own private balcony where each member of the family staying can enjoy the breathtaking view of the surroundings. At Punarnava, accommodation is thoughtfully designed to strike an ideal balance between shared moments and individual relaxation.",
    category: "Suite",
    price: 600,
    roomAmenities: [
      "Free WiFi",
      "Air Conditioning",
      "Room Service",
      "Minibar",
      "Smart TV",
      "Kitchenette",
    ],
  },
  {
    id: 6,
    name: "Punarnava Studio Suites",
    image1: "/Images/suits/Studio-suiets.webp",
    image: [
      "/Images/suits/Studio-suiets.webp",
      "/Images/suits/Studio-suiets1.webp",
      "/Images/suits/Studio-suiets2.webp",
      "/Images/suits/Studio-suiets3.webp",
      "/Images/suits/Studio-suiets4.webp",
    ],
    ft: "800 ft²",
    view: "City View",
    description:
      "At Punarnava Studio, Suites are thoroughly designed to provide an outstanding retreat experience for the sophisticated traveler. All these elegant suites are a blend of comfort and functionality, featuring a beautifully appointed bedroom area alongside a cozy lounge space. Guests can enjoy the sleek, high-end features and amazing views of the beautiful natural surroundings. Whether you're here for relaxation or even for work, our Studio Suites provide a peaceful, luxurious, and stylish getaway in a stunning setting.",
    category: "Suite",
    price: 600,
    roomAmenities: [
      "Free WiFi",
      "Air Conditioning",
      "Room Service",
      "Minibar",
      "Smart TV",
      "Kitchenette",
    ],
  },
];

export async function GET(req) {
  return new Response(JSON.stringify(rooms), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
