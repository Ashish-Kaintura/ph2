import Activitesmeta from "../_Components/Activitesmeta";

export default function Page() {
  return (
    <>
      <section>
        <Activitesmeta />
      </section>
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Unique Activities and Experiences |Punarnava Resort & Spa",
    description:
      "Punarnava resort and spa- our activities Trekking, Yoga Meditation, Plantations & many more.",
    alternates: {
      canonical: "https://thepunarnava.com/activities",
    },
  };
}
