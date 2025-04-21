import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <section className="bg-gray-900 text-white py-10 border-t border-t-gray-700">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap justify-between space-y-6 md:space-y-0">
          {/* Logo Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <Logo width="120px" />
            <p className="mt-4 text-gray-400 text-sm text-center md:text-left">
              © 2025 BlogStack. All Rights Reserved.
            </p>
          </div>

          {/* About Section */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">About</h3>
            <ul>
              <li className="mb-2">
                <a
                  className="text-gray-400 hover:text-white text-base"
                  href="https://github.com/maheshhattimare"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Us
                </a>
              </li>

              <li className="mb-2">
                <Link
                  className="text-gray-400 hover:text-white text-base"
                  to="#"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-white text-base"
                  to="#"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul>
              <li className="mb-2">
                <Link
                  className="text-gray-400 hover:text-white text-base"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-gray-400 hover:text-white text-base"
                  to="#"
                >
                  Categories
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-gray-400 hover:text-white text-base"
                  to="#"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-white text-base"
                  to="#"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center mt-10 space-x-6">
          <a
            href="https://github.com/maheshhattimare"
            className="text-gray-400 hover:text-white text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://x.com/MaheshHattimare"
            className="text-gray-400 hover:text-white text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/maheshattimare/"
            className="text-gray-400 hover:text-white text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/maheshhattimare/"
            className="text-gray-400 hover:text-white text-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
