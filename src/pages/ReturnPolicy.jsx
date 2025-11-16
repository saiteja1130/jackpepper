import React from "react";
import { SHIPPING_POLICY } from "../data/constants";

const ReturnPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-10 font-body">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Return & Refund Policy</h1>
      <p className="text-lg text-gray-700 mb-4">
        At Jack Pepper Farms, we strive to ensure your complete satisfaction with every purchase.
        Please read our policy carefully regarding returns and refunds.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">General Policy</h2>
      <p className="text-lg text-gray-700 mb-4">
        Due to the nature of our products (food and perishable goods), we generally do not accept returns or offer refunds once an order has been shipped and delivered, unless the product received is damaged, defective, or incorrect.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Damaged, Defective, or Incorrect Products</h2>
      <p className="text-lg text-gray-700 mb-4">
        If you receive a product that is damaged, defective, or not what you ordered, please contact us immediately within <strong>24 hours</strong> of delivery.
        To help us resolve the issue quickly, please provide:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4 ml-4">
        <li>Your order number.</li>
        <li>A clear description of the issue.</li>
        <li>Photographs of the damaged/defective/incorrect product and its packaging.</li>
      </ul>
      <p className="text-lg text-gray-700 mb-4">
        Upon review, we will either send a replacement product or issue a full refund, depending on product availability and your preference.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cancellations</h2>
      <p className="text-lg text-gray-700 mb-4">
        Orders can be cancelled within <strong>[Specify Time, e.g., 2 hours]</strong> of placement, provided they have not yet been processed for shipping.
        To cancel an order, please contact us with your order number.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Refund Processing</h2>
      <p className="text-lg text-gray-700 mb-4">
        Refunds, if applicable, will be processed to the original method of payment within <strong>5-7 business days</strong>.
        You will receive a confirmation email once your refund has been issued.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Charges</h2>
      <p className="text-lg text-gray-700 mb-4">
        For orders up to ₹{SHIPPING_POLICY.freeDeliveryThreshold}, a courier charge of ₹{SHIPPING_POLICY.courierCharge} applies.
        Delivery is free for orders above ₹{SHIPPING_POLICY.freeDeliveryThreshold}.
        Shipping charges are non-refundable, except in cases where you received a damaged, defective, or incorrect product.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
      <p className="text-lg text-gray-700 mb-4">
        If you have any questions about our Return & Refund Policy, please contact us at [Your Contact Email/Phone Number].
      </p>
    </div>
  );
};

export default ReturnPolicy;
