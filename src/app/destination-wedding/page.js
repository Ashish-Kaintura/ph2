import Activitesmeta from "../_Components/Activitesmeta";
import DestinationMeta from "../_Components/DestinationMeta";

export default function Page() {
  return (
    <>
      <section>
        <DestinationMeta />
      </section>
    </>
  );
}
export function generateMetadata() {
  return {
    title: " Best Destination Wedding in India | Punarnava Resort & Spa",
    description:
      "The Punarnava offers the Best destination wedding in India which is located in Dehradun Uttarakhand",
    alternates: {
      canonical: "https://thepunarnava.com/destination-wedding",
    },
  };
}
