"use client";

import React from "react";

const ShippingAndDelivery = () => {
  return (
    <>
      {/* Blue Heading Strip */}
      <div className="pt-8 pb-2 px-6 md:px-20 max-w-5xl mx-auto">
        <h1 className="text-gray-500 md:text-6xl text-3xl font-bold text-left">
          Shipping and Delivery
        </h1>
      </div>

      {/* Content Section */}
      <div className="bg-white text-gray-900 px-6 md:px-20 py-12 max-w-5xl mx-auto">
        <div className="space-y-6">
          <p>
            For physical certificates, SkillzRevo Solutions Pvt Ltd will arrange
            for delivery to the address provided by you during registration. The
            learner is responsible for all associated costs, including shipping
            fees, Goods and Services Tax (GST), and any other applicable
            charges.
          </p>

          <p>
            Ensure that your address details are accurate and complete to avoid
            delays or issues with delivery. SkillzRevo Solutions Pvt Ltd is not
            liable for any delivery issues arising from incorrect or incomplete
            address information provided by the learner.
          </p>

          <p>
            Delivery times may vary based on your location, the shipping method
            selected, and other logistical factors. Generally, International
            learners should expect to receive their certificates within 15–20
            working days, while Domestic learners can expect delivery within
            10–15 working days. While we strive to deliver your certificate as
            promptly as possible, we cannot guarantee specific delivery dates or
            times.
          </p>

          <p>
            If there are any discrepancies or problems with the delivery of your
            certificate, please contact us as soon as possible. We will assist
            in resolving any issues, but SkillzRevo Solutions Pvt Ltd is not
            responsible for delays or losses beyond our control once the
            certificate has been dispatched.
          </p>

          <p>
            Additionally, please retain proof of shipment and any related
            correspondence for your records.
          </p>
        </div>
      </div>
    </>
  );
};

export default ShippingAndDelivery;
