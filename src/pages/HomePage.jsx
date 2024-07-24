import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        {/* Introduction Section */}
        <section className="bg-blue-50 py-12 text-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
              <img
                src="Springdale Public School.png"
                alt="Springdale Public School Logo"
                className="h-24 w-24 mb-4"
              />
              <h1 className="text-5xl font-extrabold text-gray-800">
                Springdale Public School
              </h1>
              <p className="mt-4 text-gray-600 text-lg">
                Where we nurture young minds for Link brighter future.
              </p>
            </div>
          </div>
        </section>

        {/* Carousel/Banner Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Carousel showThumbs={false} autoPlay infiniteLoop>
              <div className="relative">
                <img
                  src="sportsDayImage.png" // dummy path
                  alt="Sports Day"
                  className="w-full h-72 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white text-3xl font-bold">
                    Annual Sports Day - Celebrating Excellence in Sports
                  </h2>
                </div>
              </div>
              <div className="relative">
                <img
                  src="scienceExhibitionImage.png"
                  alt="Science Exhibition"
                  className="w-full h-72 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white text-3xl font-bold">
                    Science Exhibition - Showcasing Student Innovations
                  </h2>
                </div>
              </div>
              <div className="relative">
                <img
                  src="culturalFestImage.png"
                  alt="Cultural Fest"
                  className="w-full h-72 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white text-3xl font-bold">
                    Cultural Fest - Embracing Diversity and Creativity
                  </h2>
                </div>
              </div>
            </Carousel>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Quick Links
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <Link
                to="/about"
                className="bg-white shadow-lg rounded-lg p-6 text-center text-gray-800 hover:bg-gray-200 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">About Us</h3>
                <p>Learn more about our history, vision, and mission.</p>
              </Link>
              <Link
                to="/academic"
                className="bg-white shadow-lg rounded-lg p-6 text-center text-gray-800 hover:bg-gray-200 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">Academics</h3>
                <p>Explore our curriculum and teaching methodologies.</p>
              </Link>
              <Link
                to="/admission"
                className="bg-white shadow-lg rounded-lg p-6 text-center text-gray-800 hover:bg-gray-200 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">Admissions</h3>
                <p>Find out how to apply and important dates.</p>
              </Link>
              <Link
                to="/contact"
                className="bg-white shadow-lg rounded-lg p-6 text-center text-gray-800 hover:bg-gray-200 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <p>Get in touch with us for more information.</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
