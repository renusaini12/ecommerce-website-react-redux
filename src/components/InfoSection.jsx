import React from "react";
import {
  FaShippingFast,
  FaMoneyBillWave,
  FaHeadset,
  FaLock,
  FaTag,
} from "react-icons/fa";

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaLock className="text-3xl  text-red-600" />,
      title: "Secure Payment",
      description: "100% secure payment protection",
    },
    {
      icon: <FaHeadset className="text-3xl  text-red-600" />,
      title: "24/7 Support",
      description: "We are here to help anytime",
    },
    {
      icon: <FaTag className="text-3xl  text-red-600" />,
      title: "Best Price",
      description: "Get the best deals & discounts",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "Easy Return",
      description: "Hassle-free 7 days return policy",
    },
  ];

  return (
    <div className="pb-8 pt-12 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5 gap-6 ">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-md border rounded-2xl p-6 hover:shadow-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
            <p className="text-lg text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
