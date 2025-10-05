import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emptycart from "../assets/images/emptycart.jpg";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../components/Modal";
import ChangeAddress from "../components/ChangeAdderess";
import {
  decreaseQuantity,
  IncreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Main Street, 0012");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>

          <div className="flex flex-col md:flex-row justify-between md:space-x-10 mt-8">
            {/* Left Section - Products */}
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>

              <div>
                {cart.products.map((product, index) => (
                  <div
                    key={product.id || index} // safe fallback
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex space-x-12 items-center">
                      <p>${product.price.toFixed(2)}</p>

                      {/* Quantity Control */}
                      <div className="flex items-center justify-center border rounded">
                        <button
                          className="text-xl font-bold px-2 border-r hover:bg-gray-200"
                          onClick={() => dispatch(decreaseQuantity(product.id))}
                        >
                          -
                        </button>
                        <p className="text-xl px-3">{product.quantity}</p>
                        <button
                          className="text-xl px-2 border-l hover:bg-gray-200"
                          onClick={() => dispatch(IncreaseQuantity(product.id))}
                        >
                          +
                        </button>
                      </div>

                      <p>${(product.quantity * product.price).toFixed(2)}</p>

                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section - Cart Total */}
            <div className="md:w-1/3 bg-white border p-6 rounded-lg shadow-md md:mt-0">
              <h3 className="text-xl font-semibold mb-5">CART TOTAL</h3>

              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>

              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">Shipping to:</p>
                <span className="text-xs font-bold">{address}</span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-blue-500 hover:underline ml-2 text-sm"
                >
                  Change Address
                </button>
              </div>

              <div className="flex justify-between mb-4">
                <span>Total price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>

              <button
                className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>

          {/* Modal for Change Address */}
          <Modal isModelOpen={isModalOpen} setIsModelOpen={setIsModalOpen}>
            <ChangeAddress
              address={address}
              setAddress={setAddress}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img
            src={emptycart}
            alt="Empty Cart"
            className="h-96 object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
