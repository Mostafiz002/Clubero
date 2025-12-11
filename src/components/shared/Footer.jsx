import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import footerImg from "../../assets/footer-grainy-background.png";
import LogoImg from "../../assets/icons8-cloud-cross-48.png";

const Footer = () => {
  const scrollTOTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="md:mx-4 mx-0">
      <footer className="relative bg-primary text-gray-300 py-16 px-6 md:px-10 max-w-[1480px] md:mb-4 rounded-t-2xl md:rounded-2xl mx-auto overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={footerImg}
          alt=""
        />

        <div className="relative z-10 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
          {/* Brand */}
          <div>
            <Link
              onClick={scrollTOTop}
              to="/"
              className="text-[25px] flex font-[Neusans-bold] font-extrabold text-[#ff4a79] "
            >
              <img className="w-9.5" src={LogoImg} alt="" /> clubero
            </Link>
            <p className="mt-3 text-gray-400 max-w-xs">
              Whatever your interest, from reading to networking and skill
              sharing, there are thousands of people who share it on Clubero.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  onClick={scrollTOTop}
                  className="hover:text-accent transition hover:link"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollTOTop}
                  className="hover:text-accent transition hover:link"
                  to="/clubs"
                >
                  Clubs
                </Link>
              </li>
              <li>
                <Link
                  onClick={scrollTOTop}
                  className="hover:text-accent transition hover:link"
                  to="/events"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  onClick={scrollTOTop}
                  className="hover:text-accent transition hover:link"
                  to="/"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>

            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-accent" /> Dhaka, Bangladesh
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-accent" /> +880 1752-080666
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-accent" /> mo.mahin4@gmail.com
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-accent hover:text-black transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-accent hover:text-black transition duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-accent hover:text-black transition duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* last Section */}
        <div className="relative z-10 text-center text-sm text-gray-400 mt-10 pt-5 border-t border-gray-700">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-accent">Clubero</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
