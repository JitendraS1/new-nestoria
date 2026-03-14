import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);

  /* Detect Mobile */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* Navbar Scroll Effect */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Click Outside Menu Close */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setIsAboutDropdownOpen(false);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen((prev) => !prev);
  };

  return (
    <nav className={`bg-white py-3 transition-all duration-300 ${isScrolled ? 'shadow-lg sticky top-0 z-[1000] bg-white/80 backdrop-blur-md' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div ref={navRef} className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            className="h-16 md:h-20 w-auto"
            src="/logonew.png"
            alt="Nestoria Group"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-gray-800 hover:text-blue-600"
          onClick={toggleMenu}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2"/>
            )}
          </svg>
        </button>

        {/* Menu */}
        <div
          className={`md:flex flex-grow items-center ${
            isOpen
              ? "block absolute top-full left-0 right-0 bg-white shadow-lg z-50 pb-4"
              : "hidden"
          } md:static md:bg-transparent md:shadow-none`}
        >
          <div className="flex flex-col md:flex-row md:ml-auto mt-4 md:mt-0 md:space-x-8 p-4 md:p-0">

            <Link
              to="/"
              className="nav-link"
              onClick={() => isMobile && setIsOpen(false)}
            >
              Home
            </Link>

            {/* ABOUT DROPDOWN */}
            <div
              className="relative"
              onMouseLeave={() => !isMobile && setIsAboutDropdownOpen(false)}
            >
              <button
                onClick={() => isMobile && toggleAboutDropdown()}
                onMouseEnter={() => !isMobile && setIsAboutDropdownOpen(true)}
                className="nav-link flex items-center"
              >
                About
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isAboutDropdownOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.23 7.21l4.77 4.77 4.77-4.77"/>
                </svg>
              </button>

              <ul
                className={`${
                  isAboutDropdownOpen ? "block" : "hidden"
                } absolute top-full left-0 mt-1 bg-white shadow-xl rounded-md border w-56`}
              >
                {[
                  ["About Us", "/about"],
                  ["Team Members", "/team"],
                  ["Achievements", "/achievements"],
                  ["Media Gallery", "/media"],
                  ["Services", "/services"],
                  ["Testimonials", "/testimonial"],
                ].map(([label, link]) => (
                  <li key={label}>
                    <Link
                      to={link}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-600 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/aboutDholera" className="nav-link">Dholera SIR</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/land-deals" className="nav-link">Land Deals</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/faq" className="nav-link">FAQ</Link>

            {/* Mobile Contact */}
            <Link
              to="/contact"
              className="md:hidden bg-blue-800 text-white font-bold py-2 px-4 mx-3 my-2 rounded-lg text-center hover:bg-blue-700"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop Contact */}
          <Link
            to="/contact"
            className="bg-blue-800 text-white font-bold py-2 px-4 mx-3 rounded-lg hidden md:block hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;