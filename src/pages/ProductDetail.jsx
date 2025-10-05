import React, { useEffect, useState } from "react";
import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      const newProduct = products.find((item) => item.id === parseInt(id));
      setProduct(newProduct);
    }
  }, [id, products]);

  if (!product) {
    return (
      <div className="text-center py-10 text-gray-600 text-lg">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      {/* Product Info Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-64 object-cover rounded-lg mb-6 md:mb-0 md:mr-10"
        />

        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-xl font-semibold text-green-600 mb-4">
            ₹{product.price}
          </p>

          {/* Quantity + Button */}
          <div className="flex items-center space-x-2 mb-4">
            <input
              id="quantity"
              type="number"
              className="border border-gray-300 p-2 w-20 rounded"
            />
            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
              Add to Cart
            </button>
          </div>

          {/* Icons Section */}
          <div className="flex flex-col gap-y-3 mt-6 text-gray-700">
            <p className="flex items-center text-sm md:text-base">
              <FaCarSide className="mr-2 text-red-500" />
              Delivery & Return within 7 days
            </p>
            <p className="flex items-center text-sm md:text-base">
              <FaQuestion className="mr-2 text-red-500" />
              Ask a Question
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-2xl font-semibold mb-3">Product Description</h3>
        <p className="text-gray-600 leading-relaxed">
          {product.description
            ? product.description
            : "Product description will go here. This section gives details about the features, material, and benefits of the product."}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
