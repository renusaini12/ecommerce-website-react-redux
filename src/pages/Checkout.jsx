import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "12344",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
      paymentMethod: paymentMethod,
    };
    setOrder(newOrder);
    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>

      <div className="flex flex-col md:flex-row justify-between md:space-x-10 mt-8">
        {/* ---------------- Left Section ---------------- */}
        <div className="md:w-2/3 space-y-6">
          {/* Billing Information */}
          <div className="border p-4 rounded-lg shadow-sm">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold">Billing Information</h3>
              {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            <div className={`space-y-4 mt-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Phone</label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="border p-4 rounded-lg shadow-sm">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold">Shipping Information</h3>
              {shippingToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            <div className={`space-y-4 mt-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border rounded"
                  value={shippingInfo.address}
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  placeholder="Enter City"
                  className="w-full px-3 py-2 border rounded"
                  value={shippingInfo.city}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, city: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Zip Code</label>
                <input
                  type="text"
                  placeholder="Enter Zip Code"
                  className="w-full px-3 py-2 border rounded"
                  value={shippingInfo.zip}
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, zip: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border p-4 rounded-lg shadow-sm">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold">Payment Method</h3>
              {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            <div className={`space-y-4 mt-4 ${paymentToggle ? "" : "hidden"}`}>
              {/* Cash On Delivery */}
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="text-gray-700">Cash on Delivery</label>
              </div>

              {/* Credit / Debit Card */}
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                <label className="text-gray-700">Credit / Debit Card</label>
              </div>

              {/* Debit Card Form */}
              {paymentMethod === "card" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold mb-4">
                    Debit Card Information
                  </h3>

                  <div>
                    <label className="block text-gray-700 mb-1">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter cardholder name"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="xxxx xxxx xxxx xxxx"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">CVV</label>
                      <input
                        type="password"
                        placeholder="***"
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ---------------- Right Section (Summary) ---------------- */}
        <div className="md:w-1/3 bg-white border p-6 rounded-lg shadow-md md:mt-0">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="text-gray-600 text-sm space-y-2">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded object-contain"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-600">
                      ₹{product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800">
                  ₹{(product.price * product.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between">
              <span>Total Price</span>
              <span className="font-semibold">
                ₹{cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            className="mt-6 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
