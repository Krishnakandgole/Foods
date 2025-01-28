import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBasketShopping } from "react-icons/fa6";
import { ToastContainer } from 'react-toastify';

function Products({AddTocart, AddToList}) {
  const [items, setItems] = useState([]);
  const [filteritems, setFliterItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const trem = event.target.value.toLowerCase();
    setSearchTerm(trem);
    const filtered = items.filter((items) => 
      items.name.toLowerCase().includes(trem) 
    )
    setFliterItems(filtered);
  }

  useEffect(() => {
    fetch('/API/config.json')
      .then((res) => res.json())
      .then((data) => {
        setItems(data.recipes);
        // console.table(data.populare)
        setFliterItems(data.recipes);
      })
  }, [])
  return (
    <>
      <div className="w-full h-60 mx-auto p-4 rounded-lg shadow-md mt-20 flex items-center justify-center" style={{ backgroundImage: "url(https://foodking-react.vercel.app/assets/img/banner/breadcrumb.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="relative w-[60vw]">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
            className="w-full px-4 py-4 border text-white placeholder:text-white bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      <section className="w-full bg-[#f4f1ea] py-10 flex flex-col justify-center items-center">
        <div className="w-full text-center py-5 px-4">
          <h2 className="text-red-600 font-bold text-base md:text-lg">CRISPY, EVERY BITE TASTE</h2>
          <h1 className="font-bold text-2xl md:text-4xl">POPULAR FOOD ITEMS</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-20 w-full  m-auto">
          {filteritems.map((category, index) => (
            <div
              key={index}
              className="p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer hover:bg-green-400 relative"
            >
              <div className="flex flex-col items-center text-center gap-5">
                <p className="text-sm font-semibold mb-2">{category.products}</p>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full mb-4"
                />
                <button onClick={()=> AddToList(category)} className="rounded-full hover:text-white transition absolute top-4 left-4">
                  <i className="far fa-heart bg-gray-900 p-2 rounded text-xl hover:bg-red-500 text-white"></i>
                </button>
                <button onClick={()=> AddTocart(category)} className="flex items-center justify-center gap-2 p-2 w-full max-w-xs bg-red-500 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-red-600 transition duration-200 transform hover:scale-105">
                  <FaBasketShopping size={20} />
                  <span>Add to Cart</span>
                </button>
                <h2 className="text-base md:text-lg font-bold uppercase">${category.price}</h2>
                <h2 className="text-base md:text-lg font-bold uppercase">{category.name}</h2>
                <h2 className="text-base md:text-lg font-bold uppercase">{category.rating}</h2>
              </div>
            </div>
          ))}
          <ToastContainer />
        </div>
      </section>
      <section className="w-full bg-[#f4f1ea] py-10 flex flex-col justify-center items-center">


      </section>
      <div>
        <ul className='flex items-center justify-center gap-10 h-20'>
          <li className='border p-2 rounded hover:bg-green-700 hover:text-white'>
            <NavLink to="/recipes" >
              <i className="fa-solid fa-chevron-left text-3xl "></i>
            </NavLink>
          </li>
          <li className='hover:bg-green-700 hover:text-white border p-2 rounded'>
            <NavLink to="/products" >
              <span className='text-2xl p-2  rounded hover:text-white hover:bg-green-700'>1</span>
            </NavLink>
          </li>
          <li className='hover:bg-green-700 hover:text-white border p-2 rounded'>
            <NavLink to="/product" >
              <i className="fa-solid fa-chevron-right text-3xl"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Products;