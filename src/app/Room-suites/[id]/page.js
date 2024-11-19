// // src/app/Rooms-suites/payment/[id].js
// "use client"
// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';

// export default function PaymentPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const [room, setRoom] = useState(null);

//   useEffect(() => {
//     if (id) {
//       fetch(`/api/room/`)
//         .then((response) => response.json())
//         .then((data) => {
//           const selectedRoom = data.find((room) => room.name === id);
//           setRoom(selectedRoom);
//         })
//         .catch((error) => console.error('Error fetching room:', error));
//     }
//   }, [id]);

//   const handlePayment = async (e) => {
//     e.preventDefault();

//     const res = await fetch('/api/payment', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         amount: room.price,
//         currency: 'INR',
//         receipt: `receipt#${room.name}`,
//       }),
//     });

//     const data = await res.json();

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//       amount: data.amount,
//       currency: data.currency,
//       name: 'Your Company Name',
//       description: 'Room Booking Payment',
//       order_id: data.id,
//       handler: function (response) {
//         alert(`Payment ID: ${response.razorpay_payment_id}`);
//         alert(`Order ID: ${response.razorpay_order_id}`);
//         alert(`Razorpay Signature: ${response.razorpay_signature}`);
//       },
//       prefill: {
//         name: 'Your Name',
//         email: 'youremail@example.com',
//         contact: '9999999999',
//       },
//       notes: {
//         address: 'Your Company Address',
//       },
//       theme: {
//         color: '#3399cc',
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   if (!room) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>Payment for {room.name}</h1>
//       <p>Amount: ₹{room.price}</p>
//       <button onClick={handlePayment}>Proceed to Pay</button>
//     </div>
//   );
// }

/* eslint-disable @next/next/no-img-element */
// "use client";

// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';

// export default function roomDetail() {
//   const { id } = useParams();
//   const [room, setroom] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (id) {
//       fetch(`/api/roombox/${id}`)
//         .then(response => response.json())
//         .then(data => {
//           setroom(data);
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching room data:', error);
//           setLoading(false);
//         });
//     }
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (!room) return <div>room not found</div>;

//   return (
//     <div>
//       <h1>{room.Title}</h1>
//       <img src={room.image1} alt={room.name} />
//       <p>{room.description}</p>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/app/_Components/Header";
import { BsPersonStanding } from "react-icons/bs";

export default function PaymentGateway() {
  const { id } = useParams(); // Ensure 'id' is used
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/room/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Room not found");
          }
          return response.json();
        })
        .then((data) => {
          setRoom(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching room data:", error);
          setLoading(false);
        });
    }
  }, [id]);

  useEffect(() => {
    // Dynamically load the Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleBooking = async () => {
    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: room.price * 100, // Amount in paisa
          currency: "INR",
          receipt: `receipt#${room.name}`,
        }),
      });

      const data = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "Ashish",
        description: "Room Booking Payment",
        order_id: data.id,
        handler: function (response) {
          alert(`Payment ID: ${response.razorpay_payment_id}`);
          alert(`Order ID: ${response.razorpay_order_id}`);
          alert(`Razorpay Signature: ${response.razorpay_signature}`);
          // Optionally, you can send a request to your server to confirm the payment here
        },
        prefill: {
          name: "Your Name",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Your Company Address",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error starting payment:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!room) return <div>Room not found</div>;

  return (
    <>
      <Header />
      <div className=""></div>
      <section>
        <div className="pt-8">
          <div className="sm:flex sm:justify-around justify-center p-5 border-2">
            <div className="">
              <div className="sm:w-[450px] sm:h-[400px] overflow-hidden flex justify-center">
                <img
                  className="w-full h-full object-cover"
                  src={room.image1}
                  alt={room.name}
                />
              </div>
            </div>
            <div className="border-l-2 ps-4">
              <p className="text-2xl font-sans mb-4 sm:w-[650px] border-b-2 pb-2">
                {room.name}
              </p>
              <p className="text-sm font-sans mb-4 sm:w-[650px] line-clamp-3 border-b-2">
                {room.description}
              </p>

              <div className="border-b-2 pb-2">
                {room.roomAmenities.map((amenity) => (
                  <li
                    className="font-sans text-normal font-semibold mt-2"
                    key={amenity}
                  >
                    {amenity}
                  </li>
                ))}
              </div>
              <div className="flex gap-x-8 mt-6">
                <div>
                  <h2 className="font-sans text-xl font-semibold">Price</h2>
                  <span className="font-sans text-lg font-semibold">
                    {room.price} INR
                  </span>
                </div>
                <div>
                  <span className="font-sans text-lg font-semibold">
                    Room For
                  </span>
                  <div className="flex items-center">
                    <span className="font-sans text-lg font-semibold">2</span>
                    <BsPersonStanding className="size-7" />
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleBooking}
                    className="px-4 py-2 rounded-lg text-xm font-sans border-2 border-[#84662e] hover:bg-[#be9343] hover:text-white"
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
