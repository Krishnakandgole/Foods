import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';

const AddToRestuarant = () => {
  const [articles, setArticles] = useState([]);
  // const [selectedValue, setSelectedValue] = useState("");
  const [options, setOptions] = useState([])


  useEffect(() => {
    fetch('/API/Restaurant.json')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data)
        setOptions(data)
      })
  }, []);

  const booking = (id) => {
    const element = document.getElementById("book");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
    toast.success("Success! Your booking", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] my-20 font-sans">
      <div className='h-96 w-full ' style={{ backgroundImage: "url(https://thumbs.dreamstime.com/b/night-scene-empty-table-restaurant-background-ads-featuring-wooden-foreground-blurred-under-lights-setting-provides-337072366.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

      </div>


      <main className="container mx-auto p-5">
        <h1 className="m-4 text-2xl sm:text-3xl font-bold text-black text-center sm:text-left">
          ADD RESTAURANTS
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              {/* Article Image */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 sm:h-64 lg:h-72 object-cover"
              />

              {/* Article Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">
                    {article.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {article.descripation}
                  </p>
                  <div className="text-gray-400 text-sm sm:text-base">
                    <span className="font-bold text-green-700">
                      {article.distance}
                    </span>
                    <span className="mx-2">•</span>
                    <span>${article.price}</span>
                  </div>
                </div>
              </div>

              {/* Booking Button */}
              <div className="p-6">
                <button
                  onClick={booking}
                  className="w-full flex items-center justify-center px-4 py-3 text-sm sm:text-base text-white font-semibold rounded-lg shadow-md bg-black border border-transparent hover:border-gradient-to-r hover:border-transparent from-purple-500 to-green-500 relative group"
                  style={{
                    borderImage: "linear-gradient(90deg, #7f5af0, #2cb67d) 1",
                    borderWidth: "4px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                  }}
                >
                  <span className="mr-2">🚀</span> Book Now
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>


      <div className="min-h-screen flex items-center text-white justify-center bg-[#f4f1ea] px-4" style={{backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/053/700/906/small/seafood-frame-on-black-stone-background-with-copy-spacerealistic-photo.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
        <div className="w-full max-w-lg  rounded-lg shadow-lg p-6 text-white">
          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            Responsive Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4" id='book'>
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 p-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 p-2 text-black   rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Phone
              </label>
              <input
                type="number"
                name="password"
                className="w-full border border-gray-300 text-black p-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Select Field */}
            <div className='space-y-4'>
              <label className="block text-sm font-medium text-white">
                Restaurant
              </label>
              <select
                name="restaurant"
                // value={selectedValue}
                className='w-full border border-gray-300 text-black p-2 rounded-lg outline-none focus:ring-2 focus:ring-green-500'
              >
                <option value=""> Select Restaurant</option>
                {
                  options.map((option) => (
                    <option key={option.id} value={option.id} className='text-black'>
                      {option.name}
                    </option>
                  ))
                }
              </select>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-900 transition"
              >
                Submit
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AddToRestuarant;
