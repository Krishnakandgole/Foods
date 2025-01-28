import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import krishna from "../img/krishna.jpeg"
import ram from "../img/ram.jpeg"
import sangamesh from "../img/sangamesh.png";
import { ToastContainer, toast } from "react-toastify";

import "../App.css";

const testimonials = [
  {
    name: "Krishna Kandgole",
    title: "Business CEO & Co Founder",
    text: "THANK YOU FOR DINNER LAST NIGHT. IT WAS AMAZING!! I HAVE SAY IT’S THE BEST MEAL I HAVE HAD IN QUITE SOME TIME. WILL DEFINITELY BE SEEING MORE EATING NEXT YEAR.",
    stars: 5,
    image: `${krishna}`, // Replace with the actual profile picture URL
  },
  {
    name: "Ramrant Patil",
    title: "Food Blogger",
    text: "The flavors were incredible, and the presentation was beautiful! I'll definitely recommend this to all my followers.",
    stars: 4,
    image: `${ram}`,
  },
  {
    name: "Sangamesh Panchal",
    title: "Gourmet Chef",
    text: "What a treat! The perfect balance of taste and texture. This is a place I’ll return to again and again.",
    stars: 5,
    image: ` ${sangamesh}`,
  },
];


const Home = ({ AddTocart, AddToList }) => {

  const [product, setProduct] = useState([]);
  const [logo, setLogo] = useState([]);
  const [populare, setpopulare] = useState([]);
  const [feature, setFeature] = useState([]);
  // const [title, setTitle] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    fetch("/API/config.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.populare);
        setLogo(data.sponsorship);
        setpopulare(data.items);
        setFeature(data.features);
        // setTitle(data.testimonials);
      })
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  const currentTestimonial = testimonials[currentIndex];

  // user data to given the data by user

  const [people, setPeople] = useState(1);
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');

  const handlePeopleChange = (event) => {
    setPeople(event.target.value);
  };

  const handleemailChange = (event) => {
    setemail(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.table({ people, phoneNumber, date, email, name });
    toast.success("Success! Your booking table", {
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
    <>

      {/* //banner section or container */}
      <section className=" text-white min-h-screen flex items-center justify-center mt-14 relative" style={{ backgroundImage: "url(https://foodking-react.vercel.app/assets/img/hero/hero-bg.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div>
          <img src="https://foodking-react.vercel.app/assets/img/hero/fire-shape.png" alt="" className="absolute bottom-0 left-0" />
          <img src="https://foodking-react.vercel.app/assets/img/hero/chilli-shape.png" alt="" className="absolute top-0 left-0" />
          <img src="https://foodking-react.vercel.app/assets/img/hero/chilli-shape-2.png" alt="" className="absolute top-0 right-0" />
          <img src="https://foodking-react.vercel.app/assets/img/hero/chilli-shape-3.png" alt="" className="absolute bottom-0 right-0" />
        </div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center w-4/5">
          {/* Text Section */}
          <div className="text-center md:text-left md:w-1/2">
            <p className="text-red-500 uppercase tracking-wide text-sm mb-2">
              Crispy, Every Bite Taste
            </p>
            <h1 className="text-7xl md:text-7xl font-extrabold mb-4">
              Delicious <span className="text-yellow-400">Fried Chicken</span>
            </h1>
            <p className="text-gray-400 text-lg mb-6">
              Save up to <span className="text-yellow-400 font-bold">50%</span>
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-green-700 transition flex items-center justify-between gap-5">
              <i className="fa-solid fa-truck-fast"></i>
              Order Now
            </button>
          </div>

          {/* Image Section */}
          <div className="relative mt-8 md:mt-0 md:w-2/3 flex justify-center w-full">
            <div className="relative w-full">
              <img src="https://foodking-react.vercel.app/assets/img/hero/offer-shape.png" alt="" className="absolute w-full top-[-10px] left-0" />
            </div>
            <img
              src="https://foodking-react.vercel.app/assets/img/hero/chiken.png"
              alt="Fried Chicken"
              className="rounded-lg shadow-lg w-full max-w-full md:max-w-md animate-float"
            />
          </div>
        </div>
      </section>

      {/* // Foods slider container or section */}

      <section className="w-full bg-[#f4f1ea] relative h-[100%]">
        <img
          src="https://foodking-react.vercel.app/assets/img/shape/tomato-shape.png"
          className="absolute top-0 left-0"
          alt=""
        />
        <img src="https://foodking-react.vercel.app/assets/img/shape/burger-shape-2.png" className="absolute bottom-0 left-0" alt="" />
        <div className="py-10 w-full">
          <div className="container mx-auto px-5 w-full">
            <p className="text-red-500 text-sm text-center uppercase mb-2">
              Crispy, every bite taste
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
              Popular Food Items
            </h2>
            <section className="w-full flex flex-col items-center justify-center px-5 md:px-10 lg:px-20">
              <div className="flex overflow-x-auto overflow-y-hidden flex-nowrap flex-row gap-5 md:gap-10 snap-x w-full scroll-smooth py-10">
                {product.map((team, index) => (
                  <div
                    className="snap-center py-5 relative bg-cover bg-center shadow-xl flex flex-col items-center justify-start gap-2 cursor-pointer rounded-xl w-64 md:w-80 lg:w-[22%] flex-shrink-0 hover:bg-green-300 group"
                    key={index}
                    style={{
                      backgroundImage:
                        "url(https://foodking-react.vercel.app/assets/img/shape/catagory-card-shape.jpg)",
                    }}
                  >
                    {/* Background Image on Hover */}
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        backgroundImage:
                          "url(https://foodking-react.vercel.app/assets/img/shape/catagory-card-shape.jpg)",
                      }}
                    ></div>
                    <NavLink to="/recipes" className={({ isActive }) => `duration-200 ${isActive ? "text-red-700" : "text-black"}`}>
                      <img
                        src={team.image}
                        className="w-full h-48 md:h-80 object-cover rounded-t-xl z-10"
                        alt={team.name}
                      />
                    </NavLink>
                    <div className="bg-red-700 w-24 h-[2px] my-1 mx-auto"></div>
                    <h1 className="font-bold text-lg md:text-xl text-center px-2 z-10">
                      {team.name}
                    </h1>
                    <p className="text-sm md:text-base text-center px-2 z-10">
                      {team.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* populare section for watching */}

      <section className="w-full p-10 md:p-20 bg-[#f4f1ea] relative">
        <div>
          <img
            src="https://foodking-react.vercel.app/assets/img/shape/chili-shape.png"
            alt="Chili Shape"
            className="absolute bottom-0 left-0 w-20 md:w-32"
          />
        </div>
        <div className="flex  w-full items-center justify-center gap-10 px-6 md:gap-10">
          {/* Left Banner Section */}
          <div
            className="w-full md:w-[70vw] rounded-xl py-5 flex flex-col md:flex-row h-auto md:h-96 items-center justify-between"
            style={{
              backgroundImage:
                "url(https://foodking-react.vercel.app/assets/img/banner/offer-bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "50%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-center md:text-left px-4 md:px-6">
              <h1 className="text-red-700 text-lg md:text-xl mb-2">CRISPY, EVERY BITE TASTE</h1>
              <h3 className="text-white text-2xl md:text-5xl font-bold leading-tight">
                SUPER <br /> DELICIOUS
              </h3>
              <img
                src="https://foodking-react.vercel.app/assets/img/offer/50percent-off.png"
                alt="50% Off"
                className="animate-zoom-in-out w-24 md:w-[150px] mt-4 mx-auto md:mx-0"
              />
            </div>
            <img
              src="https://foodking-react.vercel.app/assets/img/food/main-food.png"
              alt="Main Food"
              className="w-40 md:w-64 mt-6 md:mt-0 transition-transform duration-500 hover:scale-110 hover:rotate-3"
            />
          </div>

          {/* Right Banner Section */}
          <div
            className="w-full md:w-[45vw] h-auto md:h-96 py-5 flex flex-col md:flex-row items-center justify-center rounded-xl px-4 md:px-6"
            style={{
              backgroundImage:
                "url(https://foodking-react.vercel.app/assets/img/banner/pizza-bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="mb-6 md:mb-0">
              <img
                src="https://foodking-react.vercel.app/assets/img/shape/pizza-text.png"
                alt="Pizza Text"
                className="w-32 md:w-40"
              />
            </div>
            <div className="relative">
              <img
                src="https://foodking-react.vercel.app/assets/img/food/pizza-2.png"
                alt="Pizza"
                className="w-40 md:w-64 transition-transform duration-500 hover:scale-110 hover:rotate-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Populare restaurant section or container */}
      <section className="w-full bg-[#f4f1ea] h-auto md:h-auto px-6 md:px-20 py-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row w-full items-center justify-between gap-4">
          <h3 className="font-bold text-center md:text-left text-lg md:text-xl">
            GLOBAL <span className="text-yellow-400">5K+</span> HAPPY SPONSORS WITH US
          </h3>
          <div className="h-1 bg-gray-900 rounded w-full md:w-[70%]"></div>
        </div>

        {/* Logo Carousel Section */}
        <div className="flex items-center overflow-x-auto overflow-y-hidden flex-nowrap snap-x w-full scroll-smooth py-5 gap-4">
          {logo.map((logoItem, index) => (
            <div
              key={index}
              className="snap-center relative bg-cover bg-center flex flex-col items-center justify-center cursor-pointer rounded-xl w-32 md:w-48 lg:w-[22%] flex-shrink-0"
            >
              <img
                src={logoItem.image}
                alt={`Sponsor ${index}`}
                className="object-cover rounded-t-xl w-full h-20 md:h-28 lg:h-32"
              />
            </div>
          ))}
        </div>
      </section>


      {/* banner section or container */}
      <section
        className="w-full relative"
        style={{
          backgroundImage:
            "url(https://foodking-react.vercel.app/assets/img/banner/main-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Tomato Shape */}
        <div>
          <img
            src="https://foodking-react.vercel.app/assets/img/shape/tomato-shape-2.png"
            alt="Tomato Shape"
            className="absolute bottom-0 right-0 w-16 md:w-32"
          />
        </div>

        {/* Content Section */}
        <div className="flex  items-center justify-center p-10 md:p-20 relative z-50 gap-8">
          {/* Text Section */}
          <div className="flex items-start justify-center w-full md:w-1/2 gap-5 flex-col relative text-center md:text-left">
            <h2 className="text-white font-bold text-lg md:text-xl">SAVE 20%</h2>
            <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
              TODAY'S <span className="text-yellow-500">ASTACKIN</span> DAY
            </h1>
            <h2 className="text-white font-bold text-lg md:text-2xl">
              GRILLED <span className="text-yellow-500">CHICKEN $59.00</span>
            </h2>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium text-base md:text-lg hover:bg-green-700 transition flex items-center justify-between gap-3">
              <i className="fa-solid fa-truck-fast"></i>
              Order Now
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            <img
              src="https://foodking-react.vercel.app/assets/img/food/grilled.png"
              alt="Grilled Chicken"
              className="w-3/4 md:w-[50vw]"
            />
            <img
              src="https://foodking-react.vercel.app/assets/img/shape/spicy.png"
              alt="Spicy Icon"
              className="absolute top-4 right-4 md:top-0 md:right-0 w-10 md:w-16 animate-spin"
            />
            <img
              src="https://foodking-react.vercel.app/assets/img/shape/pizza-text-2.png"
              alt="Pizza Text"
              className="absolute bottom-4 left-4 md:bottom-0 md:left-0 w-16 md:w-32 animate-zoom-in-out"
            />
          </div>
        </div>
      </section>


      {/* // Popular section or container */}
      <section className="w-full bg-[#f4f1ea] py-10 flex flex-col justify-center items-center">
        <div className="w-full text-center py-5 px-4">
          <h2 className="text-red-600 font-bold text-base md:text-lg">CRISPY, EVERY BITE TASTE</h2>
          <h1 className="font-bold text-2xl md:text-4xl">POPULAR FOOD ITEMS</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 px-4 max-w-screen-xl m-auto">
          {populare.map((category, index) => (
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
                <button onClick={() => AddToList(category)} className="rounded-full hover:text-white transition absolute top-4 left-4">
                  <i className="far fa-heart bg-gray-900 p-2 rounded text-xl hover:bg-red-500 text-white"></i>
                </button>
                <button onClick={() => AddTocart(category)} className="flex items-center justify-center gap-2 p-2 w-full max-w-xs bg-red-500 text-white font-semibold text-sm rounded-lg shadow-md hover:bg-red-600 transition duration-200 transform hover:scale-105">
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
        <NavLink to="/recipes">
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium text-sm md:text-lg hover:bg-green-900 transition flex items-center justify-between gap-3">
            <i className="fa-solid fa-truck-fast"></i>
            VIEW MORE
          </button>
        </NavLink>
      </section>


      {/* offer container or section */}

      <section>
        <div className="relative bg-gray-50 w-full">
          {/* Decorative Image */}
          <div>
            <img
              src="https://foodking-react.vercel.app/assets/img/shape/drinks.png"
              alt="Decorative Drink Shape"
              className="absolute bottom-0 left-0 w-12 md:w-20"
            />
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-center justify-between min-h-screen max-w-full mx-auto p-6 md:p-10">
            {/* Left Section */}
            <div className="text-center w-full flex items-center justify-center flex-col md:text-left md:max-w-md space-y-4">
              <p className="text-red-500 font-semibold text-sm uppercase">
                Crispy, Every Bite Taste
              </p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Trending Food Combo <br />
                <span className="text-red-500">Offer Less 20%</span>
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                A team of dreamers and doers building unique interactive music and
                art festivals.
              </p>

              {/* Offers Section */}
              <div className="space-y-4 mt-6">
                <div className="flex items-center bg-gray-200 rounded-lg p-4">
                  <span className="font-semibold text-sm md:text-lg mr-2 text-black">
                    🍗 Chicken Restaurant
                  </span>
                  <span className="text-gray-600 text-xs md:text-sm">
                    30% OFF 4PCS HOT CRISPY & 8 PCS WING
                  </span>
                </div>
                <div className="flex items-center bg-yellow-200 rounded-lg p-4">
                  <span className="font-semibold text-sm md:text-lg mr-2 text-black">
                    🍕 The Pizza House
                  </span>
                  <span className="text-gray-600 text-xs md:text-sm">
                    20% OFF TASTY PIZZA WITH DRINK
                  </span>
                </div>
                <div className="flex items-center bg-gray-300 rounded-lg p-4">
                  <span className="font-semibold text-sm md:text-lg mr-2 text-black">
                    🍔 Best Burgers
                  </span>
                  <span className="text-gray-600 text-xs md:text-sm">
                    2PCS HAMBURGER WITH DRINKS & SAUCE
                  </span>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div
              className="mt-10 md:mt-0 relative flex items-center justify-center w-full md:w-1/2 h-[50vh] md:h-screen"
              style={{
                backgroundImage:
                  "url(https://foodking-react.vercel.app/assets/img/banner/comboo-bg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Pizza Image */}
              <img
                src="https://foodking-react.vercel.app/assets/img/food/big-pizza.png"
                alt="Delicious Pizza"
                className="rounded-lg shadow-lg w-[80%] md:w-64 lg:w-80"
              />
              {/* Discount Badge */}
              <div className="absolute top-5 right-5 md:top-10 md:right-10 bg-yellow-400 text-black text-xs md:text-sm font-bold p-2 rounded-full transform translate-x-1/4 -translate-y-1/2">
                Up to Save 50% Off
              </div>
              {/* Decorative Images */}
              <img
                src="https://foodking-react.vercel.app/assets/img/shape/combo-pizza-text.png"
                alt="Combo Pizza Text"
                className="absolute top-16 md:top-20 left-4 md:left-10 animate-bounce w-40 md:w-60"
              />
              <img
                src="https://foodking-react.vercel.app/assets/img/offer/50percent-off-2.png"
                alt="50% Off Badge"
                className="absolute top-20 left-24 md:left-36 animate-zoom-in-out w-12 md:w-20"
              />
              <img
                src="https://foodking-react.vercel.app/assets/img/shape/vegetable.png"
                alt="Decorative Vegetable"
                className="absolute top-5 right-16 md:right-24 animate-pulse w-10 md:w-16"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="w-full my-20">
        <marquee className="font-custom"> <span className="text-7xl font-custom">🍗 Chicken Restaurant</span> <span className="text-7xl">🍕 The Pizza House</span> <span className="text-7xl">🍔 Best Burgers</span></marquee>
      </section>

      <section className="w-full" >
        <div className=" py-16 bg-gray-900" style={{ backgroundImage: "url(https://foodking-react.vercel.app/assets/img/shape/food-shape-2.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {feature.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800 text-white p-6 rounded-lg shadow-lg"
                >
                  <div className="text-yellow-500 text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#f4f1ea] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Image */}
            <div className="relative">
              <img
                src="https://foodking-react.vercel.app/assets/img/about/burger.png" // Replace with the burger image URL
                alt="Burger"
                className="w-full rounded-lg"
              />
              {/* Burger Label */}
              <span className="absolute top-4 left-4 text-orange-500 font-bold text-6xl transform rotate-[-15deg] animate-pulse">
                -Burger
              </span>
              {/* Price */}
              <span className="absolute bottom-6 left-6 text-black font-bold text-7xl px-4 py-2 rounded-md shadow-lg">
                $4.99
              </span>
              {/* Since Badge */}
              <span className="absolute bottom-6 right-6 bg-yellow-500 text-white font-bold text-lg px-4 py-2 rounded-md shadow-lg transform rotate-[-10deg]">
                SINCE / 1985
              </span>
            </div>

            {/* Right Section - Content */}
            <div>
              <h3 className="text-red-600 text-sm font-bold uppercase mb-2">
                About Our Food
              </h3>
              <h1 className="text-gray-800 text-4xl md:text-5xl font-extrabold leading-tight">
                Where Quality Meet <span className="text-red-500">Excellent Service.</span>
              </h1>
              <p className="text-gray-600 text-lg mt-4 mb-8">
                It's the perfect dining experience where every dish is crafted with fresh, high-quality
                ingredients and served with quick and efficient service that ensures your food is always fresh.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature 1 */}
                <div className="flex items-start space-x-4">
                  <div className="text-red-600 text-3xl">
                    🍔 {/* Replace with a proper icon if needed */}
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-bold">Super Quality Food</h4>
                    <p className="text-gray-600 text-sm">
                      A team of dreamers and doers build unique interactive music and art.
                    </p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex items-start space-x-4">
                  <div className="text-red-600 text-3xl">
                    ⭐ {/* Replace with a proper icon if needed */}
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-bold">Well Reputation</h4>
                    <p className="text-gray-600 text-sm">
                      A team of dreamers and doers build unique interactive music and art.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8">
                <NavLink to="/about" >
                  <button className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition">
                    More About Us
                  </button>
                </NavLink>
                <p className="mt-4 text-gray-500 text-sm">
                  <span className="text-red-500 font-bold">Brendon Garrey</span> - Customer's Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#f4f1ea] min-h-screen flex justify-center items-center px-4 py-10">
          <div className="grid gap-6 lg:grid-cols-2 max-w-6xl w-full">
            {/* Left Card */}
            <div
              className="text-white rounded-lg overflow-hidden shadow-lg flex flex-col lg:flex-row items-center justify-between w-full p-6 gap-5"
              style={{
                backgroundImage:
                  "url(https://foodking-react.vercel.app/assets/img/banner/burger-bg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="p-6 bg-opacity-90 flex flex-col items-center lg:items-start justify-center gap-3">
                <h3 className="text-2xl font-bold">TODAY</h3>
                <h2 className="text-4xl font-extrabold mt-2">SPECIAL</h2>
                <h3 className="text-xl mt-4">
                  BEEF <span className="text-yellow-500">BURGER</span>
                </h3>
                <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-green-700 transition flex items-center justify-between gap-2 mt-4">
                  <i className="fa-solid fa-truck-fast"></i>
                  Order Now
                </button>
              </div>
              <div className="relative w-full max-w-sm lg:max-w-xs">
                <img
                  src="https://foodking-react.vercel.app/assets/img/food/big-burger.png"
                  alt="Beef Burger"
                  className="w-full transition-transform duration-500 hover:scale-110 hover:rotate-3"
                />
              </div>
            </div>

            {/* Right Card */}
            <div
              className="text-white rounded-lg overflow-hidden shadow-lg flex flex-col lg:flex-row items-center justify-between w-full p-6 gap-5"
              style={{
                backgroundImage:
                  "url(https://foodking-react.vercel.app/assets/img/banner/pepsi-bg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="p-6 bg-opacity-90 flex flex-col items-center lg:items-start justify-center gap-3">
                <h3 className="text-xl uppercase text-yellow-500">
                  Crispy, every bite taste
                </h3>
                <h2 className="text-4xl font-extrabold mt-2">FAST FOOD MEAL</h2>
                <p className="text-sm mt-4 text-center lg:text-left">
                  The mouth-watering aroma of sizzling burgers
                </p>
                <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-green-700 transition flex items-center justify-between gap-2 mt-4">
                  <i className="fa-solid fa-truck-fast"></i>
                  Order Now
                </button>
              </div>
              <div className="relative w-full max-w-sm lg:max-w-xs">
                <img
                  src="https://foodking-react.vercel.app/assets/img/food/roller-box.png"
                  alt="Fast Food Meal"
                  className="w-full transition-transform duration-500 hover:scale-110 hover:rotate-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* offers banner section or container */}
      <section className="w-full">
        <div className="bg-[#f4f1ea] min-h-screen flex justify-center items-center px-4 py-10 lg:px-16">
          <div className="max-w-6xl flex flex-col lg:flex-row items-center rounded-lg overflow-hidden">
            {/* Left Side: Image Section */}
            <div
              className="w-full lg:w-3/5 flex justify-center items-center relative p-6"
              style={{
                backgroundImage:
                  "url(https://foodking-react.vercel.app/assets/img/banner/kfc-bg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                src="https://foodking-react.vercel.app/assets/img/food/kfc.png"
                alt="KFC Meal"
                className="w-full h-auto object-contain"
              />
              <div className="absolute top-4 right-4 bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-sm">
                UP TO SAVE 50% OFF
              </div>
            </div>

            {/* Right Side: Content Section */}
            <div className="w-full lg:w-2/5 p-6 flex flex-col justify-center items-start gap-6">
              <h3 className="text-red-600 font-bold uppercase tracking-wide text-sm">
                Crispy, every bite taste
              </h3>
              <h1 className="text-3xl md:text-4xl font-extrabold text-black mt-2">
                KFC CHICKEN HOT WING & FRENCH FRIES
              </h1>
              <p className="text-gray-600 mt-4 text-sm md:text-base">
                Wheat tortilla with spicy chicken bites, cheese sauce, tomatoes, and
                soft cheese
              </p>

              {/* Countdown Section */}
              <div className="flex items-center mt-6 space-x-4">
                {["30 Days", "22 Hours", "48 Min", "22 Sec"].map((time, index) => {
                  const [value, label] = time.split(" ");
                  return (
                    <div key={index} className="text-center">
                      <span className="block text-2xl md:text-3xl font-bold text-black">
                        {value}
                      </span>
                      <span className="text-gray-500 text-xs md:text-sm">{label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Order Button */}
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-green-700 transition flex items-center justify-center gap-2 mt-4">
                <i className="fa-solid fa-truck-fast"></i>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* company members container or section */}
      <section className="w-full">
        <div className="bg-[#f4f1ea] min-h-96 flex justify-center items-start relative py-12 px-4 md:px-8 lg:px-16">
          {/* Background Shapes */}
          <div>
            <img
              src="https://foodking-react.vercel.app/assets/img/shape/burger-shape-3.png"
              alt="Burger Shape"
              className="absolute bottom-0 left-10 md:left-20 w-16 md:w-24"
            />
            <img
              src="https://foodking-react.vercel.app/assets/img/shape/fry-shape-2.png"
              alt="Fry Shape"
              className="absolute top-0 right-10 md:right-20 w-16 md:w-24"
            />
            <img
              src="https://foodking-react.vercel.app/assets/img/shape/pizzashape.png"
              alt="Pizza Shape"
              className="absolute bottom-0 right-16 md:right-40 w-20 md:w-28"
            />
          </div>

          {/* Testimonial Content */}
          <div className="max-w-5xl rounded-lg p-6 md:p-8 text-center">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-5xl font-bold text-gray-800">
                {currentTestimonial.name}
              </h3>
              <p className="text-red-600 text-md md:text-lg">
                {currentTestimonial.title}
              </p>
              <p className="text-base md:text-lg font-semibold text-black italic">
                “{currentTestimonial.text}”
              </p>

              {/* Star Ratings */}
              <div className="flex justify-center space-x-1 text-yellow-500">
                {Array(currentTestimonial.stars)
                  .fill("")
                  .map((_, index) => (
                    <span key={index}>★</span>
                  ))}
              </div>
            </div>

            {/* Profile Images */}
            <div className="mt-6 flex justify-center">
              <div className="flex items-center space-x-4 overflow-x-auto">
                {testimonials.map((testimonial, index) => (
                  <img
                    key={index}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-4 transition ${index === currentIndex
                      ? "border-yellow-500"
                      : "border-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* /banner section or container */}
      <section className="w-full bg-[#f4f1ea] py-10">
        <div
          className="bg-green-900 mx-auto rounded text-white px-6 py-10 md:px-12 flex flex-wrap items-center justify-between w-[95%] max-w-7xl"
          style={{
            backgroundImage:
              "url(https://foodking-react.vercel.app/assets/img/banner/main-cta-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">CRISPY, EVERY BITE TASTE</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
              30 MINUTES FAST{" "}
              <span className="text-yellow-500">DELIVERY</span> CHALLENGE
            </h2>
            <NavLink to="/recipes">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-green-700 transition flex items-center justify-center gap-3">
                <i className="fa-solid fa-truck-fast"></i>
                Order Now
              </button>
            </NavLink>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg">
              <img
                src="https://foodking-react.vercel.app/assets/img/delivery-man.png"
                alt="Delivery Scooter"
                className="w-full"
              />
              {/* Uncomment below if needed */}
              {/* <img
          src="/free-delivery.svg"
          alt="Free Delivery Text"
          className="w-24 md:w-32 lg:w-48 absolute right-0 bottom-0"
        /> */}
            </div>
          </div>
        </div>
      </section>


      {/*Table booking section or container  */}

      <section
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://foodking-react.vercel.app/assets/img/banner/main-bg.jpg)",
        }}
      >
        <div className="text-white min-h-screen flex items-center justify-center sm:flex-col">
          <div className="w-full max-w-7xl rounded-lg p-8 flex  items-center justify-evenly gap-10 flex-wrap">
            {/* Left Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-lg md:text-xl text-red-700 font-bold mb-4">
                CRISPY, EVERY BITE TASTE
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold mb-4">
                NEED BOOKING?
              </h2>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold">
                RESERVE YOUR TABLE
              </h2>
            </div>

            {/* Form Section */}
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md md:w-1/2 bg-green-900 rounded-xl p-4 md:p-10 mx-auto"
            >
              <div className="mb-6">
                <label
                  htmlFor="people"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Number of People:
                </label>
                <select
                  id="people"
                  value={people}
                  onChange={handlePeopleChange}
                  className="w-full px-3 py-2 border rounded-md text-white bg-transparent focus:outline-none"
                >
                  {[...Array(8).keys()].map((num) => (
                    <option
                      key={num + 1}
                      value={num + 1}
                      className="bg-gray-900 text-white"
                    >
                      {num + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full px-3 py-2 border rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleemailChange}
                  className="w-full px-3 py-2 border rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="w-full px-3 py-2 border rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="date"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Date:
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={handleDateChange}
                  className="w-full px-3 py-2 border rounded-md bg-transparent text-white focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded w-full transition-all"
              >
                BOOK NOW
              </button>
              <ToastContainer />
            </form>

          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
