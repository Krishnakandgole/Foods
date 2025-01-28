import React, { useState } from "react";
import { FaBasketShopping } from "react-icons/fa6";
import log from "../../img/applog.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F8F9FA] shadow-lg fixed top-0 left-0 w-full z-50 px-4 md:px-20 text-black">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold flex justify-center items-center">
          <img src={log} alt="Logo" className="w-6 md:w-8 mr-2" /> Foods
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-black">
          <ul className="flex items-center space-x-6 font-bold text-black">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-red-700" : "text-black"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipes"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-red-700" : "text-black"}`
                }
              >
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-red-700" : "text-black"}`
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-red-700" : "text-black"}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addtorestuarant"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-red-700" : "text-black"}`
                }
              >
                Restaurant
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-red-700" : "text-black"}`
                }
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </div>

        {/* Right Side: Icons */}
        <div>
          <ul className="flex items-center justify-center gap-4">
            <li className="font-bold">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-red-700" : "text-black"}`
                }
              >
                Login
              </NavLink>
            </li>

            <li className="font-bold sm:hidden hidden md:flex">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-red-700" : "text-black"}`
                }
              >
                <FaBasketShopping size={25} />
              </NavLink>
            </li>
            <li className="font-bold sm:hidden hidden md:flex">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-red-700" : "text-black"}`
                }
              >
                <i className="far fa-heart p-2 rounded text-xl hover:bg-red-500 text-black"></i>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 p-4">
          <ul className="font-bold text-black space-y-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-red-700" : "text-black"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recipes"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-red-700" : "text-black"}`
                }
              >
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-red-700" : "text-black"}`
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-red-700" : "text-black"}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addtorestuarant"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-red-700" : "text-black"}`
                }
              >
                Restaurant
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-red-700" : "text-black"}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="font-bold">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-red-700" : "text-black"}`
                }
              >
                <i className="far fa-heart p-2 rounded text-xl hover:bg-red-500 text-black"></i>
              </NavLink>
            </li>
            <li className="font-bold">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `duration-200 ${isActive ? "text-red-700" : "text-black"}`
                }
              >
                <FaBasketShopping size={25} />
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
