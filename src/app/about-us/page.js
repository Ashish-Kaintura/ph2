// src/app/about-punarnava/page.js

import Aboutmeta from "../_Components/aboutmeta";

export default function Page() {
  return (
    <>
      <section>
        <Aboutmeta/>
      </section>
    </>
  );
}
export function generateMetadata() {
  return {
    title: "About- Punarnava Resort and Spa",
    description:
      "Punarnava Resort and Spa - best destination wedding places in Dehradun, India.",
    alternates: {
      canonical: "https://thepunarnava.com/about-us",
    },
  };
}
