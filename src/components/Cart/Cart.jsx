import React from 'react';
import { NavLink } from 'react-router-dom';

function Cart({ cart, handleremove, handleInc, handleDec, totalCost }) {


  // const shipping = 5;
  // const tax = 15;
  // const subtotal = totalCost();
  // const total = subtotal + shipping + tax;

  return (

    <>
      <div className="w-full min-h-96 mx-auto my-20 p-4 shadow-md  flex flex-wrap items-center justify-center" style={{ backgroundImage: "url(https://c0.wallpaperflare.com/preview/849/691/815/food-truck-illuminated-truck-vehicle.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="relative w-full">
        </div>
      </div>
      <div className="min-h-screen bg-[#f4f1ea] px-20">
        {/* Back Button */}


        {/* Main Section */}
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-6">Bag</h1>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col lg:flex-row items-center lg:items-start bg-white shadow-sm p-4 rounded-lg mb-4"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 m-2object-cover rounded-lg"
                />

                {/* Product Info */}
                <div className="lg:ml-4 mt-4 lg:mt-0 flex-1">
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-sm text-gray-600">Description: {item.description}</p>
                  <p className="text-sm text-gray-600">Flavours: 5</p>
                  <p className="text-sm text-gray-600">
                    Price: {(item.price)}
                  </p>
                  <div className="flex space-x-4  justify-between my-5">
                    <button className="text-sm text-blue-500 hover:underline">
                      <i className="fa-regular fa-heart text-xl"></i>
                    </button>
                    <button onClick={() => handleremove(item.id)} className="text-sm text-red-500 hover:underline">
                      <i className="fa-solid fa-trash text-xl"></i>
                    </button>
                  </div>
                </div>
                {/* Quantity & Price */}
                <div className="flex items-center justify-between w-full lg:w-auto mt-4 lg:mt-0">

                  <button onClick={() => handleDec(item.id)}>
                    <i className="fa-solid fa-minus-circle hover:text-red-700"></i>
                  </button>
                  <p className="mx-4 text-lg font-bold">{item.quantity}</p>
                  <button onClick={() => handleInc(item.id)}>
                    <i className="fa-solid fa-plus-circle hover:text-green-700"></i>
                  </button>
                  <div className='mx-3'>
                    <p className='font-bold text-xl'>$ {Math.round(item.price * item.quantity.toLocaleString())}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white shadow-sm p-6 rounded-lg">
            <div className='flex items-center justify-between'>
              <h2 className="text-2xl font-bold mb-4">Summary</h2>
              <h2 className='text-2xl font-bold mb-4'>{cart.length}</h2>
            </div>

            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$15</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>$5</span>
            </div>
            <div className="flex justify-between text-lg font-bold mt-4">
              <span>Total</span>
              <span>${Math.round(totalCost())}</span>
            </div>
        
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg mt-4 hover:bg-gray-900">
                Payment
              </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
