import React from "react";
import footerlogo from "../assets/footer.svg";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer bg-gray-100 py-10 px-4 flex justify-center items-center w-full">
      <div className="wrapper flex flex-col items-center gap-10 w-full max-w-xl p-4 md:p-8">
        <div className="w-[150px]">
          <img src={footerlogo} alt="Footer Logo" className="w-full" />
        </div>
        <div className="w-full">
          <p className="text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <ul className="section text-gray-500 flex flex-wrap md:flex-nowrap justify-center w-full items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <li><a href="">About</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">History</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Blog</a></li>
        </ul>
        <div className="social-media-logo flex gap-6">
          <FaFacebook className="h-6 w-6 transition hover:text-gray-700" />
          <FaInstagram className="h-6 w-6 transition hover:text-gray-700" />
          <FaTwitter className="h-6 w-6 transition hover:text-gray-700" />
          <FaGithub className="h-6 w-6 transition hover:text-gray-700" />
          <FaStackOverflow className="h-6 w-6 transition hover:text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
