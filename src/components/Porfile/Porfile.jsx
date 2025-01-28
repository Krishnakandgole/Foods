import React from "react";

const Porfile = ({ list, handleremove }) => {


  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 my-20">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white p-6 shadow-lg">
        <h3 className="text-lg font-bold mb-6">Hello, Krishna Kandgule</h3>
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center gap-2 text-blue-600 font-medium">
              <span className="material-icons">home</span>
              My Orders
            </a>
          </li>
          <li className="mb-4">
            <span className="font-bold text-gray-700">Account Settings</span>
            <ul className="ml-4 mt-2 text-gray-600">
              <li><a href="#">Profile Information</a></li>
              <li><a href="#">Manage Addresses</a></li>
              <li><a href="#">PAN Card Information</a></li>
            </ul>
          </li>
          <li className="mb-4">
            <span className="font-bold text-gray-700">Payments</span>
            <ul className="ml-4 mt-2 text-gray-600">
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Saved UPI</a></li>
              <li><a href="#">Saved Cards</a></li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-gray-700">My Stuff</span>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <div className="bg-white shadow-md p-4 rounded-lg mb-6">
          <h1 className="text-xl font-bold">My Wishlist ({list.length})</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col relative"
            >
              <div className="w-full  bg-gray-200 mb-4 rounded-lg">
                <img src={item.image} alt="" className="w-full" />
              </div>
              <button onClick={() => handleremove(item.id)} className="text-sm text-red-500 hover:underline absolute top-2 right-2">
                <i className="fa-solid fa-trash text-xl"></i>
              </button>
              <h3 className="text-md font-semibold">{item.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-bold text-gray-900">
                  ₹{item.price}
                </span>
                <span className="line-through text-sm text-gray-500">
                  ₹{item.offer}
                </span>
                <span className="text-green-600 font-bold">₹{item.offer ? item.price - item.offer : item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Porfile;

