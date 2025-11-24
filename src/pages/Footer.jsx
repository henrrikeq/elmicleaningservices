import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  
  const currentYear = new Date().getFullYear(); // <-- functional year

  return (
    <footer className="bg-blue-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Elmi Cleaning Services</h2>
          <p className="text-md leading-relaxed">
            ElMi Cleaning Services Ltd. is a registered professional cleaning company in Ghana dedicated 
            to delivering reliable, detailed, and high-quality cleaning solutions for homes, 
            offices, hotels, and real estate developments.
            We use trained staff, proper equipment, and safe cleaning methods to ensure spotless 
            results every time.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">

            <a
              href="https://www.facebook.com/share/1KUQEAXrvB/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 text-black rounded-full bg-[#e8f1ff] flex items-center justify-center cursor-pointer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/elmicleaningservices?igsh=ZjF3NTd6MGV5Z2g0&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 text-black rounded-full bg-[#e8f1ff] flex items-center justify-center cursor-pointer"
            >
              <FaInstagram />
            </a>

            <a
              href="http://www.tiktok.com/@elmicleaningservices"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 text-black rounded-full bg-[#e8f1ff] flex items-center justify-center cursor-pointer"
            >
              <FaTiktok />
            </a>

            <a
              href="https://www.linkedin.com/in/elmi-cleaning-services-ltd-165bb6394?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 text-black rounded-full bg-[#e8f1ff] flex items-center justify-center cursor-pointer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com/@elmicleaningservices?si=W07lOxsq5A8EsXf9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 text-black rounded-full bg-[#e8f1ff] flex items-center justify-center cursor-pointer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://x.com/elmicleaning?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 text-black rounded-full bg-[#e8f1ff] flex items-center justify-center cursor-pointer"
            >
             <FaXTwitter />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-md">
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="cursor-pointer hover:underline">About Us</li>
            <li className="cursor-pointer hover:underline">Contact Us</li>
            <li className="cursor-pointer hover:underline">Services</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

          <div className="flex flex-row gap-1 mt-2">
            <p className="text-[22px] mt-[0.5px]"><MdOutlineLocationOn /></p>
            <p className="text-md">P. O. BOX 112, Accra</p>
          </div>

          <div className="flex flex-row gap-2 mt-2">
            <p className="text-[19px] mt-1"><BsTelephone /></p>
            <p className="text-md">+233 245 754 840 / +233 543 747 408</p>
          </div>

          <div className="flex flex-row gap-2 mt-2">
            <p className="text-[20px] mt-1"><MdOutlineMailOutline /></p>
            <p className="text-md">info.elmicleaningservices@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-500 mt-10 pt-6 text-center text-md">
        <p className="text-blue-100 text-sm mb-2 md:mb-0">
          &copy; {currentYear} ElMi Cleaning Services Ltd. | Excellence in Every Cleaning
        </p>
      </div>
    </footer>
  );
};

export default Footer;
