import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../../App.css"

function Contact() {

    const [people, setPeople] = useState('');
    const [email, setemail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleuserChange = (event) => {
        setPeople(event.target.value);
    };

    const handleemailChange = (event) => {
        setemail(event.target.value);
    };
    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here, e.g., send data to server
        console.log({ people, phoneNumber, date });
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
                        CONTACT US
                    </h1>
                </div>
            </section>

            {/* contact secction */}
            <section className="w-full px-20 bg-[#f4f1ea]">
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="rounded bg-white flex flex-col items-center justify-center gap-5 shadow-lg hover:bg-green-700 hover:text-white cursor-pointer p-20">
                            <img
                                src="https://foodking-react.vercel.app/assets/img/icon/location.svg"
                                alt=""
                                className="hover:grayscale-brightness"
                            />
                            <h1 className="font-bold text-3xl">ADDRESS LINE</h1>
                            <p className="text-xl">Bowery St, New York, 37 USA NY 10013, USA</p>
                        </div>
                        <div className="rounded bg-green-700 flex flex-col items-center justify-center gap-5 shadow-lg hover:bg-white hover:text-black cursor-pointer p-20">
                            <img
                                src="https://foodking-react.vercel.app/assets/img/icon/phone.svg"
                                alt=""
                                className="hover:bg-white grayscale-brightness"
                            />
                            <h1 className="font-bold text-3xl">PHONE NUMBER</h1>
                            <p className="text-xl">+1255 - 568 - 6523 4374-221 +1255 - 568 - 6523</p>
                        </div>
                        <div className="rounded bg-white flex flex-col items-center justify-center gap-5 shadow-lg hover:bg-green-700 hover:text-white cursor-pointer p-20">
                            <img
                                src="https://foodking-react.vercel.app/assets/img/icon/email.svg"
                                alt=""
                                className="hover:grayscale-brightness"
                            />
                            <h1 className="font-bold text-3xl">MAIL ADDRESS</h1>
                            <p className="text-xl">testing@gmail.com/ Maintain@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* lociton and contact  form secction or container */}

            <section className='w-full p-5'>
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col items-start">
                                <h2 className="text-3xl font-bold mb-4">GET IN TOUCH</h2>
                                <p className="text-gray-600 mb-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis faucibus odio feugiat arcu dolor.
                                </p>
                                {/* Map section (replace with your actual map implementation) */}
                                <div className="relative w-full h-96">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.2805000000003!2d144.95416179999997!3d-37.8131179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646d296a923d9%3A0x3133598c2847564d!2sEnvato%2C%20Level%2013%2F2%20Elizabeth%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sin!4v1677402284941!5m2!1sen!2sin"
                                        width="600"
                                        height="450"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="flex flex-col items-start">
                                <h2 className="text-3xl font-bold mb-4">FILL UP THE FORM</h2>
                                <p className="text-gray-600 mb-8">
                                    Your email address will not be published. Required fields are marked *.
                                </p>
                                <form
                                    onSubmit={handleSubmit}
                                    className="w-full  bg-green-900 rounded-xl p-6 md:p-10"
                                >
                                    <div className="mb-6">
                                        <label
                                            htmlFor="people"
                                            className="block text-white text-sm font-bold mb-2"
                                        >
                                            Number of People:
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={people}
                                            onChange={handleuserChange}
                                            className="w-full px-3 py-2 border rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none"
                                            placeholder="Enter your Name"
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

                                    <button
                                        type="submit"
                                        className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded w-full transition-all"
                                    >
                                        BOOKING NOW
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner section or container */}

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




        </>
    )
}

export default Contact