import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-navy text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Left side: Logo and School Name */}
          <div className="flex items-center">
            <img
              src="Springdale Public School.png"
              alt="School Logo"
              className="h-10 w-10 mr-3"
            />
            <span className="text-xl font-bold">Springdale Public School</span>
          </div>
          {/* Right side: Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-lightblue">
              HomePage
            </Link>
            <Link to="about" className="hover:text-lightblue">
              About Us
            </Link>
            <Link to="academic" className="hover:text-lightblue">
              Academics
            </Link>
            <Link to="admission" className="hover:text-lightblue">
              Admissions
            </Link>
            <Link to="faculty" className="hover:text-lightblue">
              Faculty
            </Link>
            <Link to="student" className="hover:text-lightblue">
              Students
            </Link>
            <Link to="gallery" className="hover:text-lightblue">
              Gallery
            </Link>
            <Link to="contact" className="hover:text-lightblue">
              Contact Us
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy text-white">
          <Link
            to="/"
            className="block py-2 px-4 hover:bg-lightblue hover:text-navy"
          >
            HomePage
          </Link>
          <Link
            to="about"
            className="block py-2 px-4 hover:bg-lightblue hover:text-navy"
          >
            About Us
          </Link>
          <Link
            to="academic"
            className="block py-2 px-4 hover:bg-lightblue hover:text-navy"
          >
            Academics
          </Link>
          <Link
            to="admission"
            className="block py-2 px-4 hover:bg-lightblue hover:text-navy"
          >
            Admissions
          </Link>
          <Link
            to="faculty"
            className="block py-2 px-4 hover:bg-lightblue hover:text-navy"
          >
            Faculty
          </Link>
          <Link
            to="student"
            className="block py-2 px-4 hover:bg-lightblue hover:text-navy"
          >
            Students
          </Link>
          <Link
            to="gallery"
            className="block py-2 px-4 hover:bg-lightblue hover:text-navy"
          >
            Gallery
          </Link>
          <Link
            to="contact"
            className="block py-2 px-4 hover:bg-lightblue hover:text-navy"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
