import GalleryMeta from "../_Components/GalleryMeta";

export default function Page() {
  return (
    <>
      <section>
      <GalleryMeta/>
      </section>
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Resort Images | Punarnava Resort & Spa",
    description:
      "Take a look inside Punarnava Resort and Spa, our luxury resort destination in middle of the forest.",
    alternates: {
      canonical: "https://thepunarnava.com/gallery",
    },
  };
}
