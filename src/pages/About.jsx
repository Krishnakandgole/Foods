import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import krishna from "../img/krishna.jpeg"
import ram from "../img/ram.jpeg"
import sangamesh from "../img/sangamesh.png";
import { ToastContainer, toast } from 'react-toastify';


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

function About() {

  const [items, setItems] = useState([]);
  const [process, setProcess] = useState([]);
  const [chefs, setChefs] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);


  const processing = () => {

    fetch("/API/config.json")
      .then((res) => res.json())
      .then((data) => {
        setProcess(data.processing)
        // console.table(data.processing/)
        setItems(data.menuItems)
        setChefs(data.chefs)
      })
  };


  useEffect(() => {
    processing();
  }, [processing]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  const currentTestimonial = testimonials[currentIndex];

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
    console.log({ people, phoneNumber, date, email, name });
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

      <section
        className="w-full mt-20"
        style={{
          backgroundImage: "url(https://foodking-react.vercel.app/assets/img/banner/breadcrumb.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-96 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center">
            ABOUT US
          </h1>
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

      <section className="w-full bg-[#f4f1ea] py-10">
        <div
          className="bg-green-900 m-auto rounded text-white px-4 md:px-20 flex flex-col md:flex-row w-full items-center relative justify-center"
          style={{
            backgroundImage: "url(https://foodking-react.vercel.app/assets/img/banner/main-cta-bg-2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Decorative Images */}
          <div className="absolute left-0 bottom-0 animate-bounce">
            <img src="https://foodking-react.vercel.app/assets/img/tomato.png" alt="" className="w-16 md:w-24" />
          </div>
          <div className="absolute right-0 top-0 animate-bounce">
            <img src="https://foodking-react.vercel.app/assets/img/chilli.png" alt="" className="w-16 md:w-24" />
          </div>

          {/* Content */}
          <div className="text-center md:text-left p-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">CRISPY, EVERY BITE TASTE</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              30 MINUTES FAST <span className="text-yellow-500">DELIVERY</span> CHALLENGE
            </h2>
            <NavLink to="/recipes">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-green-700 transition flex items-center justify-between gap-5">
                <i className="fa-solid fa-truck-fast"></i>
                Order Now
              </button>
            </NavLink>
          </div>

          {/* Delivery Image */}
          <div className="mt-8 md:mt-12 relative w-full md:w-1/2">
            <img src="https://foodking-react.vercel.app/assets/img/delivery-man.png" alt="Delivery Scooter" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* meanu section or container */}
      <section className="bg-[#f4f1ea] py-10 px-5 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-lg text-red-700 font-bold">ABOUT OOUR FOOD</h2>
          <h1 className='font-bold text-4xl'>HOT DELICIOUS ITEM</h1>
          <div className='flex items-center justify-center gap-10 flex-wrap'>
            <button className='border p-3 border-black rounded-3xl font-bold hover:bg-green-400 hover:border-green-300 hover:text-white'>CHICKEN</button>
            <button className='border p-3 border-black rounded-3xl font-bold hover:bg-green-400 hover:border-green-300 hover:text-white'>PIZZA</button>
            <button className='border p-3 border-black rounded-3xl font-bold hover:bg-green-400 hover:border-green-300 hover:text-white'>BURGER</button>
            <button className='border p-3 border-black rounded-3xl font-bold hover:bg-green-400 hover:border-green-300 hover:text-white'>DESERTS</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center text-center space-y-4 p-5 rounded hover:shadow-2xl shadow-black"
            >
              <NavLink to="/recipes" >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-60 h-60 object-cover rounded m-auto"
                />
                <h3 className="text-2xl font-bold ">{item.title}</h3>
                <p className="text-gray-600 text-sm font-bold">{item.description}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </section>

      {/* Banner cards section or container */}
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

      <section className="w-full my-20">
        <marquee className="font-custom"> <span className="text-7xl font-custom">🍗 Chicken Restaurant</span> <span className="text-7xl">🍕 The Pizza House</span> <span className="text-7xl">🍔 Best Burgers</span></marquee>
      </section>

      <div className="min-h-screen flex flex-col lg:flex-row items-center lg:items-stretch relative ">
        {/* Left Section - Image */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="https://foodking-react.vercel.app/assets/img/banner/best-sale-4.jpg" // Replace with actual path
            alt="Delicious Pizza"
            className="w-full object-cover"
          />
          <div className="flex items-center gap-4 mt-8 absolute right-0">
            <button className="w-10 h-10 bg-orange-500 flex items-center justify-center rounded-full">
              <span className="text-white text-lg">&#8592;</span>
            </button>
            <button className="w-10 h-10 bg-orange-500 flex items-center justify-center rounded-full">
              <span className="text-white text-lg">&#8594;</span>
            </button>
          </div>

        </div>

        {/* Right Section - Deal Information */}
        <div
          className="w-full lg:w-1/2 bg-green-600 p-8 rounded-lg flex flex-col justify-between text-white relative"
          style={{
            backgroundImage: "url(https://foodking-react.vercel.app/assets/img/shape.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Decorative Images */}
          <img
            src="https://foodking-react.vercel.app/assets/img/shape/fry-shape-4.png"
            alt=""
            className="absolute right-6 top-6 lg:right-12 animate-bounce w-12 md:w-16"
          />
          <img
            src="https://foodking-react.vercel.app/assets/img/shape/burger-shape-4.png"
            alt=""
            className="absolute right-6 bottom-0 lg:right-12 animate-bounce w-16 md:w-20"
          />

          <div className="flex flex-col gap-5 items-center lg:items-start text-center lg:text-left">
            {/* Deal Title */}
            <h2 className="text-base sm:text-lg uppercase">Deal Of The Day</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Today's <br /> the <br /> Hamburger' <br /> Day
            </h1>

            {/* Price Section */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Special Price $55
              </h2>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-md lg:max-w-lg">
              Savor the perfect symphony of flavors. It's the perfect dining experience
              where excellence meets taste.
            </p>
          </div>

          {/* Order Button */}
          <button className="mt-6 border-2 border-gray-100 py-3 rounded font-bold px-5 w-40 sm:w-60 lg:w-80 hover:bg-white hover:text-black transition-all">
            Order Now
          </button>
        </div>
      </div>

      {/* Chefs section or container */}
      <section className='bg-[#f4f1ea] py-20'>
        <div className='flex items-center justify-center flex-col gap-20 py-10'>
          <div className='text-center'>
            <h1 className='text-red-700 font-bold'>ABOUT OUR FOOD</h1>
            <h1 className='font-bold text-4xl'>MEET OUT EXPERT CHEFS</h1>
          </div>
          <div className='flex items-center justify-around flex-wrap w-full '>
            {
              chefs.map((item) => (
                <div key={item.id} className='relative '>
                  <img src={item.image} alt={item.name} className='w-full h-full object-cover rounded-xl' />
                  <div className='w-full my-2  text-center text-green-700 font-bold text-sm'>{item.role}</div>
                  <div className='w-full  text-center text-black font-bold text-2xl'>{item.name}</div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* processing card section or container */}
      <section className="w-full bg-[#f4f1ea] py-10 flex flex-col flex-wrap justify-center items-center" style={{ backgroundImage: "url(https://foodking-react.vercel.app/assets/img/shape/about-food-bg.png)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="w-full text-center py-5 px-4">
          <h2 className="text-red-600 font-bold text-base md:text-lg">FOOD  PROCESSING</h2>
          <h1 className="font-bold text-2xl md:text-4xl">HOW WE SERVE YOU?</h1>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-6 py-10 px-4 max-w-screen-xl m-auto">
          {process.map((category) => (
            <NavLink to="/recipes">
              <div
                key={category.id}
                className="p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer hover:bg-green-400 relative"
              >
                <div className="flex flex-col items-center text-center gap-5">
                  <p className="text-sm font-semibold mb-2">{category.products}</p>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full mb-4"
                  />

                  <h2 className="text-base md:text-lg font-bold uppercase">{category.name}</h2>
                  <h2 className="text-base md:text-sm font-bold uppercase">{category.description}</h2>
                </div>
              </div>
            </NavLink>
          ))}
        </div>


      </section>

      {/* company manegment section or container */}
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

      {/* booking orader section or container */}

      <section
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://foodking-react.vercel.app/assets/img/banner/main-bg.jpg)",
        }}
      >
        <div className="text-white min-h-screen flex items-center justify-center flex-wrap">
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
              className="w-full md:w-1/2 bg-green-900 rounded-xl p-6 md:p-10"
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
                  htmlFor="email"
                  className="block text-white text-sm font-bold mb-2"
                >
                  Name:
                </label>
                <input
                  type="email"
                  id="email"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full px-3 py-2 border rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  placeholder="Enter your email"
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
  )
}

export default About