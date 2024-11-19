import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head from Next.js
import "./Style/globals.css";
import ChatBox from "./_Components/Chatbox";
import SideLink from "./_Components/SideLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // title: "Best 5 Star Hotel in Dehradun | Punarnava Resort & Spa",
  // description:
  //   "The Punarnava Resort & Spa - Top rated Luxury 5 star resorts for destination wedding and events with Swimming Pools in the middle of forest.",
  // alternates: {
  //   canonical: "https://www.thepunarnava.com/", // Replace with your canonical URL
  // },
  openGraph: {
    title: "Rooms & Suites - The Punarnava",
    description:
      "The Punarnava Resort & Spa - Top rated Luxury 5 star resort for destination weddings and events.",
    url: "https://www.thepunarnava.com/Room-suites",
    site_name: "The Punarnava Resort & Spa",
    images: [
      {
        url: "https://www.thepunarnava.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpunarnava%20white%20text1.c4cc5c4d.webp&w=256&q=75",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M7LCBDGZ');`,
          }}
        />
        {/* End Google Tag Manager */}
      </Head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7LCBDGZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ChatBox />
        <SideLink />
        {children}
      </body>
    </html>
  );
}
