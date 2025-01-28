import React from "react";
import apple from "../../assets/apple.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

  const socialLinks = {
    facebook: "https://www.facebook.com/your-profile",
    instagram: "https://www.instagram.com/your-profile",
    twitter: "https://twitter.com/your-profile",
    youtube: "https://www.youtube.com/your-channel",
    linkedin: "https://www.linkedin.com/in/your-profile",
  };
  return (
    <>
      <footer className="bg-gray-100 text-gray-800 py-8">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* About Zomato */}
            <div>
              <h5 className="text-lg font-semibold mb-4">About Foods</h5>
              <ul className="space-y-2">
                {["Who We Are", "Blog", "Work With Us", "Investor Relations", "Report Fraud", "Press Kit", "Contact Us"].map((item, index) => (
                  <li key={index} className="hover:underline cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            {/* Zomaverse */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Foods-xverse</h5>
              <ul className="space-y-2">
                {["Foods", "Blinkit", "District", "Feeding India", "Hyperpure", "Foods Live", "Foodland", "Weather Union"].map((item, index) => (
                  <li key={index} className="hover:underline cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            {/* For Restaurants */}
            <div>
              <h5 className="text-lg font-semibold mb-4">For Restaurants</h5>
              <ul className="space-y-2">
                {["Partner With Us", "Apps For You"].map((item, index) => (
                  <li key={index} className="hover:underline cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            {/* Learn More */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Learn More</h5>
              <ul className="space-y-2">
                {["Privacy", "Security", "Terms"].map((item, index) => (
                  <li key={index} className="hover:underline cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Social Links</h5>
              <div className="flex space-x-4 mb-4">
                <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                  <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" color="#4267B2" />
                  </a>
                  <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" color="#E1306C" />
                  </a>
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2" />
                  </a>
                  <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} size="2x" color="#FF0000" />
                  </a>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0A66C2" />
                  </a>
                </div>
              </div>
              {/* App Store Links */}
              <div className="flex flex-col space-y-2">
                <button className="w-full py-2 bg-gray-300 rounded-md text-center hover:bg-gray-400 flex flex-wrap font-bold justify-center items-center">
                  <img src={apple} alt="" className="w-16" />
                  Download on the <br /> App Store
                </button>
                <button className="w-full py-2 bg-gray-300 rounded-md text-center hover:bg-gray-400 flex flex-wrap font-bold justify-center items-center">
                  <img src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Icon-Logo.wine.svg" alt="" className="w-16" />
                  Get it <br /> on Google Play
                </button>
              </div>
            </div>
          </div>
          <hr className="my-6" />
          <p className="text-center text-sm text-gray-600">
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.  © Foods™ Ltd. All rights reserved.
          </p>
        </div>
      </footer>
      <footer className="bg-green-600 py-5 px-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-white">
          {/* Copyright Section */}
          <div className="text-center md:text-left text-sm">
            &copy; Copyright <span className="text-yellow-400">2024</span> Foods. All Rights Reserved.
          </div>

          {/* Payment Icons Section */}
          <div className="flex justify-center mt-4 md:mt-0 space-x-4">
            <img
              src="https://foodking-react.vercel.app/assets/img/card.png"
              alt="Visa"
              className="w-full h-6 object-contain"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
