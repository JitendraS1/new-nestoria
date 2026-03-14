import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Company Info */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-primary-200 font-condor">
              Nestoria Group
            </h3>
            <p className="mb-4 text-gray-400">
              A leading real estate developer with a focus on premium properties
              in Dholera SIR and beyond.
            </p>
            <div className="w-20 h-1 bg-primary-200 my-6"></div>
            <div className="flex space-x-4 mt-6">
              <a
                href="http://www.youtube.com/@nestoriagroup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary-200 transition-all duration-300 transform hover:scale-125 hover:text-red-500"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/nestoria.group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-200 hover:text-pink-500 hover:scale-125 transition-all duration-300 transform inline-block"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/nestoriagroup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary-200 transition-all duration-300 transform hover:scale-125 hover:text-blue-500"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              
              <a
                href="https://www.linkedin.com/company/nestoriagroup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-primary-200 transition-all duration-300 transform hover:scale-125 hover:text-blue-400"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              {/* <a
                href="https://www.twitter.com/nestoriagroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-primary-200 font-condor">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-200 text-xs"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-200 text-xs"></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/land-deals"
                  className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-200 text-xs"></i>
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-200 text-xs"></i>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-200 text-xs"></i>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-200 text-xs"></i>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-200 text-xs"></i>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-200 text-xs"></i>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Dholera SIR Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-primary-200 font-condor">
              Dholera SIR
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/aboutDholera"
                  className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-200 text-xs"></i>
                  About Dholera SIR
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-primary-200 text-xs"></i>
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutDholera?filter=#tab-section"
                  className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-200 text-xs"></i>
                  Investment Opportunities
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-primary-200 text-xs"></i>
                  Latest News
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-primary-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-chevron-right mr-2 text-blue-200 text-xs"></i>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4 text-primary-200 font-condor">
              Contact Us
            </h3>
            <p className="flex items-start mb-4">
              <i className="fas fa-map-marker-alt mr-3 mt-1 text-primary-200"></i>
              <span className="text-gray-400">
                3rd Floor, Sarthik Annexe , Satellite Road, Iskon Cross Road,
                Ahmedabad - 380015, Gujarat, India
              </span>
            </p>
            <p className="flex items-center mb-4">
              <i className="fas fa-phone-alt mr-3 text-primary-200"></i>
              <a
                href="tel:+919213005611"
                className="text-gray-400 hover:text-primary-400 transition duration-300"
              >
                +919213005611
              </a>
            </p>
            <p className="flex items-center mb-4">
              <i className="fas fa-envelope mr-3 text-primary-200"></i>
              <a
                href="mailto:info@nestoriagroup.com"
                className="text-gray-400 hover:text-primary-400 transition duration-300"
              >
                info@nestoriagroup.com
              </a>
            </p>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3 text-primary-200 font-condor">
                Subscribe to Our Newsletter
              </h4>
              <form className="flex" onSubmit={async (e) => {
                e.preventDefault();
                const email = e.target.elements.email.value;
                try {
                  const { ContactService } = await import("../services/ContactService");
                  const result = await ContactService.sendContactForm({
                    name: "Newsletter Subscriber",
                    email,
                    phone: "",
                    subject: "Newsletter Subscription",
                    message: `Please subscribe ${email} to the newsletter.`,
                  });

                  if (result.success) {
                    alert("Thank you for subscribing!");
                    e.target.reset();
                  } else {
                    alert(result.message || "Failed to subscribe.");
                  }
                } catch (error) {
                  alert("Failed to subscribe. Please try again later.");
                }
              }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="bg-white text-black px-4 py-2 rounded-l focus:outline-none w-full"
                  required
                />
                <button type="submit" className="bg-primary-600 text-white px-4 py-2 rounded-r hover:bg-primary-500 transition duration-300">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Nestoria Group. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-primary-400 text-sm transition duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-gray-400 hover:text-primary-400 text-sm transition duration-300"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/"
              className="text-gray-400 hover:text-primary-400 text-sm transition duration-300"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
