import React from "react";

const Login = ({ openSignUp }) => {
  return (
    <div className="flex items-center justify-center  px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Remember & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" className="accent-red-600" />
              <span>Remember Me</span>
            </label>
            <a
              href="#"
              className="text-red-600 hover:underline hover:text-red-700"
              onClick={openSignUp}
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-all"
            >
              Login
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="text-center text-sm text-gray-600 mt-6">
          <span>Don't have an account? </span>
          <a
            href="#"
            className="text-red-600 font-medium hover:underline hover:text-red-700 "
            onClick={openSignUp}
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
