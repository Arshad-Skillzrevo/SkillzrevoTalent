"use client";
import React from "react";

const TermsAndConditions = () => {
  return (
    <>
      {/* Blue Heading Strip */}
      <div className="pt-8 pb-2 px-6 md:px-20 max-w-5xl mx-auto">
        <h1 className="text-gray-500 md:text-6xl text-3xl font-bold text-left">
          Terms and Conditions
        </h1>
      </div>

      {/* Content Section */}
      <div className="bg-white text-gray-900 px-6 md:px-20 py-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          <p>
            This document constitutes a legally binding agreement between you,
            referred to as “user” or “you,” and SkillzRevo Solutions Pvt Ltd,
            including its subsidiaries, international affiliates, and associated
            entities (collectively referred to as “SkillzRevo Solutions Pvt
            Ltd,” “us,” “we,” “our,” or “the Company”). It outlines the terms
            governing your use of the Platform, which includes the website
            www.skillzrevo.com, mobile applications, and all associated
            information, services, and materials.
          </p>
          <p>
            Please review our Terms of Use, Privacy Policy, and other policies
            available on the Platform (collectively referred to as the “Terms”),
            as they govern the use of the Platform and Programs. By accepting
            these Terms or accessing the website, you consent to and agree to
            follow them. If you do not agree to these Terms, you are not
            permitted to use the Programs, and any subsequent use will be
            unauthorized.
          </p>
          <p>
            Please take a moment to review this information properly before
            using the services offered on this website. Please use this site in
            accordance with applicable regulations and ensure that you adhere to
            the Website Terms and Conditions as well as the Privacy Policy.
          </p>
          <p>
            The Company is not responsible for any changes to the content
            provided on the Website through its products and services. This
            includes, but is not limited to, any errors, losses, or damages
            incurred in connection with the use of content accessed through our
            products, services, or resources such as email and blog posts.
          </p>
          <p>
            Certain sections of the Website require login credentials. The
            Company reserves the right to deny access to any user who fails to
            comply with these requirements. While we strive to provide
            uninterrupted access to our services, we cannot guarantee continuous
            availability.
          </p>

          <h2 className="text-xl font-semibold">Learning Guidelines</h2>
          <p>
            All academic and certified programs must comply with academic rules,
            regulations, and relevant domestic laws, which will be published and
            updated periodically.
          </p>

          <h2 className="text-xl font-semibold">Registration Fee</h2>
          <p>
            Fees for each course are set by the admissions team and may vary.
            SkillzRevo Solutions Pvt Ltd reserves the right to modify course
            fees at any time as necessary.
          </p>

          <h2 className="text-xl font-semibold">Enrollment Policy</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              You agree to adhere to the Rules and Regulations set by SkillzRevo
              Solutions Pvt Ltd, including discipline, exams, training, and fee
              policies.
            </li>
            <li>
              Failure to provide required documents may result in termination of
              enrollment without refund.
            </li>
            <li>
              Non-payment of fees within the specified deadline may lead to
              cancellation of admission without refund.
            </li>
            <li>
              A minimum attendance of 75% is required to be eligible for
              placement services.
            </li>
            <li>
              If information in your application is false or incomplete, your
              admission may be canceled.
            </li>
            <li>
              Courses may be updated, discontinued, or substituted based on
              academic needs.
            </li>
            <li>
              Certificates are issued only after full training completion.
            </li>
            <li>
              You must not share or distribute course materials, or it may lead
              to legal action.
            </li>
            <li>
              No guarantee of placement, salary, or employment is provided.
            </li>
            <li>Certificates may be withheld until all fees are cleared.</li>
            <li>
              By registering, you authorize the company to use your name and
              other details for marketing.
            </li>
            <li>
              Learners failing to progress academically may be removed without
              obligation for placement.
            </li>
            <li>
              Learners must check their LMS account for important updates.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">
            User ID and Password Integrity
          </h2>
          <p>
            You are responsible for maintaining the confidentiality of your user
            ID and password. Sharing your credentials is strictly prohibited and
            may result in suspension or termination of your account and access
            to services.
          </p>

          <h2 className="text-xl font-semibold">Learning Resources</h2>
          <p>
            We grant access to content, practice tests, and other materials as
            part of our services. We may revise or update these resources at our
            discretion. Additional charges may apply for accessing revised
            materials.
          </p>

          <h2 className="text-xl font-semibold">
            Intellectual Property Rights
          </h2>
          <p>
            We retain sole ownership of the Website, Services, and Content,
            including all intellectual property and proprietary rights. You are
            granted limited use solely for learning purposes.
          </p>

          <h2 className="text-xl font-semibold">Batch Change Cost Charges</h2>
          <p>
            The fee at admission time is campaign-specific. A Batch Change Cost
            of INR 8,000 (Inclusive of GST) or USD 100 will apply for switching
            to a new batch, due to the impact on planned delivery and resources.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
