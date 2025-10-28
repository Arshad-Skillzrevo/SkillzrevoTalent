"use client";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="pt-8 pb-2 px-6 md:px-20 max-w-5xl mx-auto">
        <h1 className="text-gray-500 md:text-6xl text-3xl font-bold text-left">
          Privacy Policy
        </h1>
      </div>

      {/* White Content Section */}
      <div className="bg-white text-gray-900 px-6 md:px-20 pb-12 max-w-5xl mx-auto">
        <div className="mt-8 space-y-6">
          <p>
            At SkillzRevo Solutions Pvt Ltd ("we," "us," or "our"), we are
            committed to protecting your privacy and ensuring data security.
            This Privacy Policy explains how we collect, use, share, and secure
            your personal information when you access our websites, mobile apps,
            and services. It also describes your choices regarding the use,
            access, and correction of your data.
          </p>

          <p>
            We use your information solely to provide the services you select.
            Terms not defined here have the meanings given in our Terms and
            Conditions. Sensitive personal data is handled according to
            applicable privacy laws.
          </p>

          <h2 className="text-xl font-semibold">01. Information We Collect</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Personal Information:</strong> We collect personal details
              you provide when registering on our sites or using our services.
              This includes your name, email address, billing information, and
              any other data you submit.
            </li>
            <li>
              <strong>Usage Data:</strong> We gather information about how you
              interact with our website. This includes your IP address, browser
              type, pages visited, and time spent on those pages.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use
              cookies, web beacons, analytics tools, and similar technologies to
              track your access and activities on our website. You can manage
              cookie preferences through your browser settings.
            </li>
          </ol>

          <h2 className="text-xl font-semibold">
            02. How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              To provide and enhance the quality of the services we offer.
            </li>
            <li>
              To handle and process your transactions and manage related
              information.
            </li>
            <li>
              To provide updates, newsletters, and marketing materials, but only
              with your initial consent.
            </li>
            <li>
              Enhance your experience on our website to better suit your
              preferences.
            </li>
            <li>
              To monitor and analyze website usage patterns to improve our site
              and services.
            </li>
            <li>
              Ensure compliance with legal obligations and safeguard your
              rights.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">
            03. Sharing Your Information
          </h2>
          <p>
            We do not sell, trade, or transfer your personally identifiable
            information to outside parties without providing you with advance
            notice.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Service Providers:</strong> We may share your information
              with third-party service providers who perform services on our
              behalf, such as payment processing, data analysis, email delivery,
              hosting services, and customer support.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your
              information in response to formal requests from public authorities
              or legal entities.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event that Toolstation
              or substantially all of its assets are acquired by a third party,
              your personal data may be transferred as part of the acquisition.
            </li>
            <li>
              <strong>International Data Transfers:</strong> Your personal
              information may be transferred to and processed in countries
              outside your own. We ensure that any such transfers comply with
              applicable data protection laws.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">04. Data Security</h2>
          <p>
            We take all reasonable measures to protect your personal information
            from unauthorized access, use, alteration, or destruction. However,
            no transmission method over the internet or electronic storage
            system can be guaranteed to be 100% secure, and we cannot ensure
            absolute security.
          </p>

          <h2 className="text-xl font-semibold">05. Your Rights and Choices</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Access and Correction:</strong> You can access or update
              your personal information by logging into your account on our
              website or by contacting our customer service directly.
            </li>
            <li>
              <strong>Right to Data Portability:</strong> You have the right to
              obtain a copy of your personal information in a common,
              structured, and machine-readable format.
            </li>
            <li>
              <strong>Deletion Request:</strong> You may request the deletion of
              your personal information, subject to certain exceptions.
            </li>
            <li>
              <strong>Opt-Out:</strong> You can opt out of receiving any or all
              non-service-related emails from us by following the unsubscribe
              instructions provided in those emails.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">06. Third-Party Links</h2>
          <p>
            Our website may include links to third-party sites. We are not
            responsible for the content or privacy practices of these external
            sites. We recommend reviewing the privacy policies of any
            third-party websites you visit.
          </p>

          <h2 className="text-xl font-semibold">07. Children's Privacy</h2>
          <p>
            Our services are intended for individuals aged 13 and older. We do
            not knowingly collect personal data from children under 13. If we
            become aware that a child under 13 has provided us with personal
            information, we will take steps to remove it.
          </p>

          <h2 className="text-xl font-semibold">
            08. This Privacy Policy May Change
          </h2>
          <p>
            Any changes to this Privacy Policy will be posted on this page with
            a new “effective date” at the top. We will inform you of updates by
            reflecting the changes here. Please review this Privacy Policy
            periodically to stay informed about how we protect your information.
            For any questions or concerns, you can contact us using the details
            provided.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
