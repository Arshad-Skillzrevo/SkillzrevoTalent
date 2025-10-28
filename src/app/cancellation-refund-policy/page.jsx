"use client";

import React from "react";

const CancellationRefundPolicy = () => {
  return (
    <>
      {/* Blue Header Strip */}
      <div className="pt-8 pb-2 px-6 md:px-20 max-w-5xl mx-auto">
        <h1 className="text-gray-500 md:text-6xl text-3xl font-bold text-left">
          Cancellation and Refund Policy
        </h1>
      </div>

      {/* Content Section */}
      <div className="bg-white text-gray-900 px-6 md:px-20 py-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            01. Cancellation of Enrollment by Learner
          </h2>
          <p>
            <strong>Before Course Commencement:</strong> Learners may cancel
            their enrollment up to 7 days before the course begins. To do so, a
            written cancellation request must be submitted to SkillzRevo
            Solutions Pvt Ltd. A full refund will be issued, minus a
            non-refundable registration fee and any applicable administrative
            charges.
          </p>
          <p>
            <strong>After 7 Days Before Course Commencement:</strong>{" "}
            Cancellations requested less than 7 days before the course starts
            will not be eligible for a refund. Learners will be responsible for
            the full course fee.
          </p>

          <h2 className="text-xl font-semibold">
            02. Cancellation of Enrollment by SkillzRevo Solutions Pvt Ltd
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Failure to Provide Required Documentation:</strong> If a
              learner fails to submit necessary documents verifying their
              qualifications within the specified time frame, SkillzRevo
              Solutions Pvt Ltd reserves the right to cancel the enrollment. In
              such cases, no refund will be issued.
            </li>
            <li>
              <strong>Non-Payment of Fees:</strong> If a learner does not pay
              the required fees within the agreed deadlines, including any grace
              period, SkillzRevo Solutions Pvt Ltd may cancel their enrollment.
              No refund will be given for any fees already paid.
            </li>
            <li>
              <strong>Violation of Policies:</strong> SkillzRevo Solutions Pvt
              Ltd may cancel enrollment for violations of the Terms and
              Conditions. Learners will not be entitled to a refund in such
              cases.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">
            03. Course Cancellation or Modification by SkillzRevo Solutions Pvt
            Ltd
          </h2>
          <p>
            <strong>Course Discontinuation or Changes:</strong> If SkillzRevo
            Solutions Pvt Ltd cancels a course after enrollment, learners will
            receive a full refund. In cases where the course content is modified
            or updated, additional fees may apply for accessing revised
            materials.
          </p>

          <h2 className="text-xl font-semibold">04. Refund Process</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Submission of Refund Requests:</strong> Learners must
              submit refund requests in writing within 7 days of the initial
              enrollment. Requests should be made via the registered email
              address and include relevant details.
            </li>
            <li>
              <strong>Processing Time:</strong> Approved refunds will be
              processed within 30 business days from the receipt of the request.
              Refunds will be credited to the original method of payment.
            </li>
            <li>
              <strong>Refund Recipients:</strong> Refunds will be issued to the
              original payer only. Third-party refund requests will not be
              accepted.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">05. No Refund Policy</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Digital Products and Resources:</strong> Refunds are not
              available for digital products, including downloadable content,
              e-books, and recorded lectures, once accessed or downloaded.
            </li>
            <li>
              <strong>Partial Completion:</strong> No refunds will be provided
              for partial completion of a course.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">
            06. Exceptional Circumstances
          </h2>
          <p>
            <strong>Medical or Personal Emergencies:</strong> In the event of
            documented medical or personal emergencies, SkillzRevo Solutions Pvt
            Ltd may, at its discretion, offer a credit toward a future course.
            Requests must be accompanied by relevant documentation and are
            subject to management approval.
          </p>

          <h2 className="text-xl font-semibold">07. Self-Paced Learning</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              You must submit your refund request within 7 days from the date of
              purchase.
            </li>
            <li>
              You must have consumed less than 20% of the video-learning
              content.
            </li>
            <li>You must not have requested any exam vouchers or kits.</li>
          </ul>

          <h2 className="text-xl font-semibold">08. Instructor-Led Training</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              You need to submit your refund request within 7 days of purchase.
            </li>
            <li>
              You must have consumed less than 20% of the video-learning
              content.
            </li>
            <li>You must have attended no more than one live online class.</li>
            <li>You must not have requested any exam vouchers or kits.</li>
          </ul>

          <h2 className="text-xl font-semibold">
            09. Contact for Cancellation and Refund Requests
          </h2>
          <p>
            <strong>Submission of Requests:</strong> To request a cancellation
            or refund, contact SkillzRevo Solutions Pvt Ltd’s customer service
            using the details provided on our website. Include your name, course
            details, reason for cancellation or refund, and any supporting
            documents.
          </p>
        </div>
      </div>
    </>
  );
};

export default CancellationRefundPolicy;
