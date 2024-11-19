// src\app\api\room\route.js
export const Gallery = [
  {
    id: 1,
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
      "Experience the epitome of luxury nestled in nature with our Exclusive Cottages. These charming retreats are well integrated into the natural environment, featuring large lawns with magnificent views on the forests and mountains. Every cottage has a comfortable balcony where one can sit alone and enjoy the stunning view. Experience the peace of the Himalayas along with luxury accommodations and first-class amenities that make your stay most comfortable.",
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
];

export async function GET(req) {
  return new Response(JSON.stringify(Gallery), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
