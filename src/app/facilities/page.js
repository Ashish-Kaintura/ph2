import FacilityMeta from "../_Components/FacilityMeta";

export default function Page() {
  return (
    <>
      <section>
       <FacilityMeta/>
      </section>
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Punarnava Resort and Spa | Our Facilities ",
    description:
      "Resort in Uttarakhand | India | Punarnava Resort and spa",
    alternates: {
      canonical: "https://thepunarnava.com/facilities/",
    },
  };
}
