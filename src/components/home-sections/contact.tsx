"use client";

import FadeInWrapper from "components/shared/FadeInWrapper";
import HeadingWithTag from "components/shared/HeadingWithTag";
import SimpleCard from "components/shared/SimpleCard";

export default function Contact() {
  const contactMethods = [
    {
      title: "Email",
      body: "Get in touch with us via email for general inquiries and information about our programs.",
    },
    {
      title: "Phone",
      body: "Call us during business hours for immediate assistance and questions about our services.",
    },
    {
      title: "Address",
      body: "Visit us at our temple location for in-person consultations and community gatherings.",
    },
  ];

  return (
    <section className="bg-neutral-lightest px-6 py-16 text-gray-950">
      <FadeInWrapper delay={0}>
        <HeadingWithTag heading="Contact Us" tag="Get in Touch" />
      </FadeInWrapper>

      <FadeInWrapper delay={100}>
        <p className="mb-6">
          We welcome your questions, feedback, and participation in our community. Whether you&apos;re 
          interested in learning more about Buddhism, attending our events, or joining our programs, 
          we&apos;re here to help.
        </p>
      </FadeInWrapper>

      {/* Contact Methods - Basic implementation */}
      {contactMethods.map((method) => (
        <FadeInWrapper key={method.title} delay={200} duration="normal">
          <SimpleCard title={method.title} body={method.body} />
        </FadeInWrapper>
      ))}

      {/* TODO: Add actual contact details, contact form, map, and mobile-optimized layout */}
      <FadeInWrapper delay={300}>
        <div className="mt-8 rounded-md bg-neutral-lighter/30 p-4">
          <p className="text-sm text-neutral-dark">
            <strong>Note:</strong> Contact details and interactive features are currently being implemented. 
            This section will be updated with complete contact information, forms, and location details.
          </p>
        </div>
      </FadeInWrapper>
    </section>
  );
}