import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/ProductSlice";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.cart.products);

  // Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search)); // Dispatch the search term to Redux
    navigate("/filter-data"); // Navigate to filtered data page
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  return (
    <div>
      <nav className="bg-white shadow-md">
        {/* Top Navbar */}
        <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
          <div className="text-lg font-bold">
            <Link to="/">e-SHOP</Link>
          </div>

          {/* Search */}
          <div className="relative flex-1 mx-4">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search Product"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border py-2 px-4 rounded"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-red-500"
              >
                <FaSearch />
              </button>
            </form>
          </div>

          {/* Cart & Login */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-3xl" />
              {products.length > 0 && (
                <span className="absolute top-0 left-3 w-4 h-4 text-xs bg-red-600 rounded-full flex justify-center items-center text-white">
                  {products.length}
                </span>
              )}
            </Link>

            <button
              className="hidden md:block px-4 py-2 border rounded hover:bg-gray-100"
              onClick={openLogin}
            >
              Login | Register
            </button>

            <button className="block md:hidden">
              <FaUser />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-center space-x-10 py-4 text-xl font-bold">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/shop" className="hover:underline">
            Shop
          </Link>
          <Link to="/" className="hover:underline">
            Contact
          </Link>
          <Link to="/" className="hover:underline">
            About
          </Link>
        </div>

        {/* Modal */}
        <Modal isModelOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          {isLogin ? (
            <Login openSignUp={openSignUp} />
          ) : (
            <Register openLogin={openLogin} />
          )}
        </Modal>
      </nav>
    </div>
  );
};

export default Navbar;
