// Inside RoomsAndSuitesPage.js
import RoomsMeta from "../_Components/RoomsMeta";

export const generateMetadata = () => {
  return {
    title: "Luxury Living Room | Eco-friendly Cottage &amp; villas",
    description:
      "Luxury Rooms and cottages Near Mountains in Dehradun | Punarnava Resort &amp; Spa",

    additionalMetaTags: [
      {
        name: "keywords",
        content: "rooms, suites, luxury, resort, Punarnava",
      },
    ],
    alternates: {
      canonical: "https://www.thepunarnava.com/Room-suites",
    },
  };
};

export default function RoomsAndSuitesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "The Punarnava",
    image:
      "https://www.thepunarnava.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpunarnava%20white%20text1.c4cc5c4d.webp&w=256&q=75",
    "@id": "https://www.thepunarnava.com/Room-suites/",
    url: "https://www.thepunarnava.com/Room-suites",
    telephone: "7217011476",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Village – Bhitarli, Kimadi, Lambidhar – Mussoorie Road, Dehradun, Uttarakhand, India",
      addressLocality: "Dehradun",
      postalCode: "248001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.4230625,
      longitude: 78.0721875,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      "https://www.facebook.com/thepunarnavaresort",
      "https://x.com/ThePunarnava_",
      "https://www.youtube.com/channel/UC6U9pJg6edqzxvSbz-YTqAQ",
      "https://www.linkedin.com/company/the-punarnava-resort/",
      "https://in.pinterest.com/thepunarnavaresort/",
    ],
  };
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <RoomsMeta />
    </section>
  );
}
