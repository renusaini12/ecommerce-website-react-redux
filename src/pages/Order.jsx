import React from "react";
import { useNavigate } from "react-router-dom";

const Order = ({ order }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-green-600 mb-3">
        Thank you for your order!
      </h2>
      <p className="text-gray-700 mb-6">
        Your order has been placed successfully. You will receive an email
        confirmation shortly.
      </p>

      {/* Order Summary */}
      <div className="border-t pt-4">
        <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
        <p className="text-gray-600 mb-4">
          <span className="font-medium">Order Number:</span>{" "}
          {order.orderNumber || "N/A"}
        </p>

        {/* Shipping Info */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h4 className="text-lg font-semibold mb-2">Shipping Information</h4>
          <p>{order.shippingInformation?.address || "No address provided"}</p>
          <p>{order.shippingInformation?.city || "City not available"}</p>
          <p>{order.shippingInformation?.zip || "Zip not available"}</p>
        </div>

        {/* Products Ordered */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Products Ordered</h3>
          <div className="space-y-3">
            {order.products && order.products.length > 0 ? (
              order.products.map((product, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {product.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">₹{product.price}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No products found in this order.</p>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow transition-all"
          onClick={() => alert("Tracking your order...")}
        >
          Track Order
        </button>

        <button
          className="bg-red-600 hover:bg-red-800 text-white px-6 py-2 rounded-lg shadow transition-all"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Order;
