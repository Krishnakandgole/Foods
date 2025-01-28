import React from "react";
import { NavLink } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side: Signup Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 bg-white">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4">Sign Up to InsideBox</h1>
          <p className="text-gray-600 mb-8">Start your journey</p>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  id="text"
                  placeholder="your name"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <div className="mt-1 relative">
                <input
                  type="email"
                  id="email"
                  placeholder="example@email.com"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <div className="mt-1 relative">
                <input
                  type="number"
                  id="number"
                  placeholder="1234567890"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Sign Up
            </button>

            <div className="flex items-center justify-between">
              <span className="text-gray-600">or sign up with</span>
              <div className="flex space-x-4">
                <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                  <i className="fab fa-facebook text-blue-600" />
                </button>
                <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                  <i className="fab fa-google text-red-500" />
                </button>
                <button className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                  <i className="fab fa-apple text-black" />
                </button>
              </div>
            </div>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Have an account<NavLink to="/login" className="text-blue-600 font-bold ml-2 hover:underline" >
              Login?
            </NavLink>
          </p>
        </div>
      </div>

      {/* Right Side: Background Image */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20230831/pngtree-soju-and-sweet-rice-the-ultimate-recipe-for-korean-street-food-image_13166401.jpg')", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat:"no-repeat" }}
      ></div>
    </div>
  );
}
