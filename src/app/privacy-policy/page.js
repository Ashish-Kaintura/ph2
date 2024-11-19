import React from "react";
import Footer from "../_Components/Footer";
import Header from "../_Components/Header";
import Head from "next/head";

export default function page() {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-28">
        <h1 className="text-4xl font-bold mb-6 font-cinzel">Privacy Policy</h1>
        <p className="mb-2 font-sans text-gray-600">
          Effective Date: MM-DD-YYYY
        </p>
        <p className="mb-6 font-sans">
          Welcome to Punarnava! We are committed to protecting your privacy and
          ensuring that your personal information is handled safely. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit our website or use our services. By
          using our website or services, you agree to the practices described in
          this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4 font-cinzel">
          1. Information We Collect
        </h2>
        <p className="mb-4 font-sans">
          - <strong>Personal Information:</strong> We may collect personal
          information that you provide directly, such as your name, email
          address, phone number, and any other details you provide when you
          create an account, sign up for newsletters, or contact us.
        </p>
        <p className="mb-4 font-sans">
          - <strong>Usage Data:</strong> We collect information about your
          interactions with our website, including IP addresses, browser types,
          pages visited, and the dates and times of visits. This helps us
          understand how users engage with our site and improve their
          experience.
        </p>
        <p className="mb-4 font-sans">
          - <strong>Cookies and Tracking Technologies:</strong> We use cookies
          and similar technologies to track activity on our website and store
          certain information. Cookies help us enhance user experience, analyze
          site traffic, and personalize content.
        </p>

        <h2 className="text-2xl font-semibold mb-4 font-cinzel">
          2. How We Use Your Information
        </h2>
        <p className="mb-4 font-sans">
          - To Provide and Improve Our Services: We use your information to
          deliver the services you request, respond to inquiries, and enhance
          the functionality and performance of our website.
        </p>
        <p className="mb-4 font-sans">
          - To Communicate with You: We may use your contact information to send
          you updates, newsletters, marketing materials, and other information
          related to our services. You can opt out of these communications at
          any time.
        </p>
        <p className="mb-4 font-sans">
          - To Analyze Usage and Trends: We analyze usage data to understand how
          users interact with our site, identify areas for improvement, and
          develop new features.
        </p>

        <h2 className="text-2xl font-semibold mb-4 font-cinzel">
          3. How We Share Your Information
        </h2>
        <p className="mb-4 font-sans">
          - <strong>Service Providers:</strong> We may share your information
          with third-party service providers who perform functions on our
          behalf, such as website hosting, data analysis, and marketing
          services. These providers are obligated to protect your information
          and use it only for the purposes for which it was disclosed.
        </p>
        <p className="mb-4 font-sans">
          - <strong>Legal Requirements:</strong> We may disclose your
          information if required to do so by law, or in response to valid
          requests by public authorities, such as to meet national security or
          law enforcement requirements.
        </p>
        <p className="mb-4 font-sans">
          - <strong>Business Transfers:</strong> In the event of a merger,
          acquisition, or other business transition, your information may be
          transferred to the new entity as part of the transaction.
        </p>

        <h2 className="text-2xl font-semibold mb-4 font-cinzel">
          4. Data Security
        </h2>
        <p className="mb-4 font-sans">
          We take reasonable measures to protect your information from
          unauthorized access, use, or disclosure. However, no data transmission
          over the internet or electronic storage system can be guaranteed to be
          completely secure. We strive to protect your information, but we
          cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-semibold mb-4 font-cinzel">
          5. Your Choices and Rights
        </h2>
        <p className="mb-4 font-sans">
          - <strong>Access and Update:</strong> You have the right to access and
          update your personal information. You can do this by logging into your
          account or contacting us directly.
        </p>
        <p className="mb-4 font-sans">
          - <strong>Opt-Out:</strong> You may opt out of receiving promotional
          communications from us by following the unsubscribe instructions
          included in each message or by contacting us.
        </p>
        <p className="mb-4 font-sans">
          - <strong>Data Deletion:</strong> You can request the deletion of your
          personal information by contacting us. We will take reasonable steps
          to honor your request, subject to legal or contractual obligations.
        </p>

        <h2 className="text-2xl font-semibold mb-4 font-cinzel">
          6. Third-Party Links
        </h2>
        <p className="mb-4 font-sans">
          Our website may contain links to third-party websites or services. We
          are not responsible for the privacy practices or content of these
          external sites. We encourage you to review the privacy policies of any
          third-party sites you visit.
        </p>

        <h2 className="text-2xl font-semibold mb-4 font-cinzel">
          7. Changes to This Privacy Policy
        </h2>
        <p className="mb-4 font-sans">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal requirements. We will post any changes on
          this page and update the effective date. Your continued use of our
          services after any changes indicates your acceptance of the updated
          policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4 font-cinzel">
          8. Contact Us
        </h2>
        <p className="mb-4 font-sans">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
        </p>
        <p className="mb-4 font-sans">
          Punarnava <br />
          Email: [Your Email] <br />
          Address: [Your Address] <br />
          Phone: [Your Phone Number]
        </p>

        <p className="mt-8 font-sans text-gray-600">
          Thank you for trusting Punarnava with your personal information. We
          are committed to safeguarding your privacy and ensuring a positive
          experience with our services.
        </p>
      </div>
      <Footer />
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Privacy & Policy | Punarnava Resort & Spa",
    description:
      "Learn more about the resort privacy & policies and other details at Punarnava Resort and Spa",
    alternates: {
      canonical: "https://thepunarnava.com/privacy-policy",
    },
  };
}
