import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { ToastContainer , toast} from "react-toastify";

function Blog() {
  const [comments, setComments] = useState([])

  const commentss = () => {
    fetch('/API/config.json')
      .then(response => response.json())
      .then(data => setComments(data.comments))
      .catch(error => console.error('Error:', error))
  }

  useEffect(() => {
    commentss()
  }, []);

  const [commentData, setCommentData] = useState({
    name: "",
    email: "",
    comment: "",
    photo: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData({
      ...commentData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(commentData);
    toast.success("Success! Your booking table", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
    // You can process the data here or send it to a server
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
            BLOG US
          </h1>
        </div>
      </section>

      {/* center containner or section */}

      <section>
        <div className="bg-[#f4f1ea] text-gray-800 min-h-screen">
          <div className="container mx-auto px-4 lg:px-8 py-8">
            {/* Main Content Section */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Article */}
              <div className="lg:w-2/3">
                <img
                  src="https://foodking-react.vercel.app/assets/img/news/post-4.jpg"
                  alt="Food Banner"
                  className="rounded-lg w-full h-auto"
                />
                <h1 className="text-2xl lg:text-3xl font-bold mt-4">
                  THE PEOPLE WHO GIVE YOU THEIR FOOD GIVE YOU THEIR HEART
                </h1>
                <p className="mt-2 text-gray-600 textsm">
                  This shortage is being seen in both the airline and the cargo industries. With such a small pool of applicants to choose form, these two sectors are batting to get the most qualified avaiable candidates, Many pilots are increasingly being wooed to get behind the controls of passenger planes over cargo flights-frankly, it's tough to complete with jobs perjs like fixed schedules and free filghts for your family across the world.
                </p>
                <div className='p-10 bg-green-700 rounded-lg h-60 flex  items-center justify-center mt-10 w-full text-white '>
                  <h1 className='font-bold text-2xl'>Your time is limited, so don't waste it living someone else's life, Don't be trapped by dogma - which is living with the results</h1>
                </div>
                <div>
                  <h1 className='font-bold text-sm my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute.</h1>
                </div>
                {/* table list  */}
                <ul className='list-none flex flex-col gap-5 font-bold'>
                  <li><i className="fa-solid fa-check text-green-600 font-900"></i> Cooking is love made visible</li>
                  <li><i className="fa-solid fa-check text-green-600 font-900"></i> We're an open book</li>
                  <li><i className="fa-solid fa-check text-green-600 font-900"></i> 100% goes to the field</li>
                  <li><i className="fa-solid fa-check text-green-600 font-900"></i> REceived the highest grades</li>
                </ul>
                <div className='my-10 flex flex-col items-start justify-center gap-5'>
                  <h1 className='font-bold text-lg'>PEOPLE WHO LOVE TO EAT ARE ALWAYS THE BEST PEOPLE </h1>
                  <p className='font-semibold'>Just as we’ve found with the truck driver shortage, the impetus behind skilled labor leaving is many-fold. Demographics play a large role—a massive amount of pilots are expected to hang up their hats in the next few years as they reach the mandatory commercial pilot retirement age of 65. And there’s no large group of applicants sitting waiting to replace them.This is likely because it’s becoming considerably more difficult to obtain a pilot license than it was ten years ago.</p>
                </div>
                <div className='flex items-start justify-between gap-10'>
                  <img src="https://foodking-react.vercel.app/assets/img/news/post-inner.jpg" alt="" className='rounded-xl' />
                  <div className='font-semibold flex flex-col gap-5'>
                    <p>
                      This is a constantly updated list of hand-curated food quotes from popular chefs, cooks, and quotes from notable writers. Feel free to share these food quotes on Pinterest, Facebook, Twitter, Instagram, etc.
                    </p>
                    <p>When Food is a Love Language Food is a powerful way to show love. That's especially true in many Asian American and Pacific Islander (AAPI) cultures, where it's more common to show care through actions rather than words—and especially through food. I watch cooking change the cook, just as it transforms the food</p>
                  </div>
                </div>
              </div>

              {/* Sidebar Section */}
              <div className="lg:w-1/3">
                {/* Popular Feeds */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold border-b pb-2 border-gray-300">
                    POPULAR FEEDS
                  </h2>
                  <div className="mt-4 space-y-4">
                    {/* Feed Item */}
                    <div className="flex items-start gap-4">
                      <img
                        src="https://foodking-react.vercel.app/assets/img/news/pp1.jpg"
                        alt="Feed Thumbnail"
                        className="w-16 h-16 rounded-lg"
                      />
                      <div>
                        <h3 className="text-sm font-semibold">
                          BUDGET ISSUES FORCE THE OUR TO BECOME
                        </h3>
                        <p className="text-xs text-green-500 mt-1">24th March 2024</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <img
                        src="https://foodking-react.vercel.app/assets/img/news/pp2.jpg"
                        alt="Feed Thumbnail"
                        className="w-16 h-16 rounded-lg"
                      />
                      <div>
                        <h3 className="text-sm font-semibold">
                          THE BEST PRODUCTS THAT SHAPE FASHION
                        </h3>
                        <p className="text-xs text-green-500 mt-1">25th March 2024</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <img
                        src="https://foodking-react.vercel.app/assets/img/news/pp3.jpg"
                        alt="Feed Thumbnail"
                        className="w-16 h-16 rounded-lg"
                      />
                      <div>
                        <h3 className="text-sm font-semibold">
                          THE BEST PRODUCTS THAT SHAPE FASHION
                        </h3>
                        <p className="text-xs text-green-500 mt-1">26th March 2024</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className='flex flex-col items-center justify-center gap-10'>
                  <h2 className="text-xl font-semibold border-l-4 pb-2 border-green-700">
                    CATEGORIES
                  </h2>
                  <div className="mt-4 flex items-center justify-center flex-col gap-5 w-full shadow-sm border p-5">
                    <div className="flex justify-between items-center p-2 border-b bg-white shadow w-full">

                      <span className="text-sm font-bold"> <i className="fa-solid fa-burger text-2xl pr-2"></i>BURGER</span>
                      <span className="text-lg font-bold text-center bg-green-500 text-white p-2 w-14 rounded">
                        23
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2 border-b bg-white shadow w-full">
                      <span className="text-sm  font-bold"><i className="fa-solid fa-drumstick-bite text-2xl pr-2"></i> FRIED CHIKEN</span>
                      <span className="text-lg font-bold text-center bg-green-500 text-white p-2 w-14 rounded">
                        24
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white shadow w-full">
                      <span className="text-sm font-bold"><i className="fa-solid fa-french-fries"></i> FRENCH FRIES</span>
                      <span className="text-lg font-bold text-center bg-green-500 text-white p-2 w-14 rounded">
                        11
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white shadow w-full">
                      <span className="text-sm font-bold"><i className="fa-solid fa-pizza-slice text-2xl pr-2"></i> HOT PIZZAS</span>
                      <span className="text-lg font-bold text-center bg-green-500 text-white p-2 w-14 rounded">
                        05
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white shadow w-full">
                      <span className="text-sm font-bold"><i className="fa-solid fa-hotdog text-2xl pr-2"></i>SANDWICH</span>
                      <span className="text-lg font-bold text-center bg-green-500 text-white p-2 w-14 rounded">
                        06
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white shadow w-full">
                      <span className="text-sm font-bold"><i className="fa-solid fa-bread-slice text-2xl pr-2"></i>BREAD</span>
                      <span className="text-lg font-bold text-center bg-green-500 text-white p-2 w-14 rounded">
                        10
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white shadow w-full">
                      <span className="text-sm font-bold"><i className="fa-solid fa-bowl-rice text-2xl pr-2"></i>FRIED RICE</span>
                      <span className="text-lg font-bold text-center bg-green-500 text-white p-2 w-14 rounded">
                        13
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white shadow w-full">
                      <span className="text-sm font-bold"><i className="fa-solid fa-hotdog text-2xl pr-2"></i>HOT DOG</span>
                      <span className="text-lg font-bold text-center bg-green-500 text-white p-2 w-14 rounded">
                        07
                      </span>
                    </div>
                  </div>
                  {/* social marketing  */}
                  <div className='p-5 border shadow-sm w-full'>
                    <h1 className='font-bold border-l-4 border-green-700 rounded text-3xl'> NEVER MISS NEWS</h1>
                    <div className='flex items-center justify-evenly gap-5 py-10'>
                      <i className="fa-brands fa-facebook bg-white rounded-full p-2 cursor-pointer hover:bg-green-700 hover:text-white text-xl"></i>
                      <i className="fa-brands fa-twitter bg-white rounded-full p-2 cursor-pointer hover:bg-green-700 hover:text-white text-xl"></i>
                      <i className="fa-brands fa-linkedin bg-white rounded-full p-2 cursor-pointer hover:bg-green-700 hover:text-white text-xl"></i>
                      <i className="fa-brands fa-youtube bg-white rounded-full p-2 cursor-pointer hover:bg-green-700 hover:text-white text-xl"></i>
                      <i className="fa-brands fa-instagram bg-white rounded-full p-2 cursor-pointer hover:bg-green-700 hover:text-white text-xl"></i>
                    </div>
                  </div>
                  <div className='p-5 border shadow-sm w-full'>
                    <h1 className='font-bold border-l-4 border-green-700 rounded text-3xl'> POPULARE TAGS</h1>
                    <div className='grid grid-cols-3 gap-2 text-center'>
                      <h1 className='border font-semibold p-2 bg-white rounded hover:bg-green-700 hover:text-white'>BURGER</h1>
                      <h1 className='border font-sembold p-2 bg-white rounded hover:bg-green-700 hover:text-white'>HOT DOG</h1>
                      <h1 className='border font-semibold p-2 bg-white rounded hover:bg-green-700 hover:text-white'>FRENCH FRY</h1>
                      <h1 className='border font-semibold p-2 bg-white rounded hover:bg-green-700 hover:text-white'>CHIKEN</h1>
                      <h1 className='border font-semibold p-2 bg-white rounded hover:bg-green-700 hover:text-white'>PASTA</h1>
                      <h1 className='border font-semibold p-2 bg-white rounded hover:bg-green-700 hover:text-white'>SANDWICH</h1>
                      <h1 className='border font-semibold p-2 bg-white rounded hover:bg-green-700 hover:text-white'>LANDING</h1>
                      <h1 className='border font-semibold p-2 bg-white rounded hover:bg-green-700 hover:text-white'>FAST FOOD</h1>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-[80vw] bg-[#f4f1ea] flex items-start justify-between px-20 '>
        <div>
          <h1 className='font-bold my-2'>RELATED TAGS</h1>
          <div className='flex items-center justify-center gap-10 text-center'>
            <p className='p-2 w-full font-semibold bg-white rounded'>DESIGN</p>
            <p className='p-2 w-full font-semibold bg-white rounded'>APPS</p>
            <p className='p-2 w-full font-semibold bg-white rounded'>DATA</p>
          </div>
        </div>
        <div>
          <h1 className='font-bold my-2'>SOCIAL TAGS</h1>
          <div className='flex items-center justify-center gap-5'>
            <i className="fa-brands fa-facebook hover:text-green-700 text-xl"></i>
            <i className="fa-brands fa-instagram hover:text-green-700 text-xl"></i>
            <i className="fa-brands fa-linkedin hover:text-green-700 text-xl"></i>
            <i className="fa-brands fa-twitter hover:text-green-700 text-xl"></i>
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

      <section className='w-full bg-[#f4f1ea] px-40'>
        <div className=" p-6 md:p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">03 COMMENTS</h2>
          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-white p-4 shadow-md rounded-lg"
              >
                <img
                  src={comment.image}
                  alt={comment.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800">{comment.name}</h3>
                  <p className="text-sm text-green-600 mb-2">{comment.date}</p>
                  <p className="text-gray-600">{comment.text}</p>
                </div>
                <button className="mt-2 md:mt-0 px-4 py-2 bg-gray-100 text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-200 flex items-center gap-2">
                  <span>&#x21b6;</span> Reply
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto p-4 rounded-lg shadow-md my-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Post a Comment</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={commentData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={commentData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Post
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                value={commentData.file}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"

              />
            </div>

            <div className="mb-4">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-600">
                Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                value={commentData.comment}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700"
            >
              Submit Comment
              <ToastContainer />
            </button>
          </form>
        </div>
      </section>

    </>
  )
}

export default Blog