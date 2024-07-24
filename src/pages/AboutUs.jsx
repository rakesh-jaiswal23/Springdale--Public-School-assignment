function AboutUs() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <h1 className="flex justify-center items-center font-bold text-5xl">
        {" "}
        About Us
      </h1>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <h3 className="text-lg mb-4">
          Welcome to Springdale Public School! Our institution has been
          committed to excellence in education since 1985. We strive to provide
          a nurturing environment that promotes academic success, ethical
          values, and holistic development.
        </h3>

        {/* History Section */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden mb-8 flex flex-col md:flex-row">
          <img
            src="https://via.placeholder.com/800x400?text=School History Image"
            alt="School History"
            className="w-full md:w-1/2 h-48 object-cover"
          />
          <div className="p-6 md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">History</h2>
            <p>
              Founded in 1985, Springdale Public School has been dedicated to
              providing quality education and holistic development to students.
              Over the years, we have grown from a small institution to a
              renowned school known for its academic excellence and
              extracurricular achievements.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden mb-8 flex flex-col md:flex-row-reverse">
          <img
            src="https://via.placeholder.com/800x400?text=OurVision Image"
            alt="Our Vision"
            className="w-full md:w-1/2 h-48 object-cover"
          />
          <div className="p-6 md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Vision</h2>
            <p>
              To create a learning environment that fosters academic excellence,
              critical thinking, and ethical values. We envision a future where
              our students are well-equipped to face the challenges of the world
              with confidence and integrity.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden mb-8 flex flex-col md:flex-row">
          <img
            src="https://via.placeholder.com/800x400?text=Our+Mission"
            alt="Our Mission"
            className="w-full md:w-1/2 h-48 object-cover"
          />
          <div className="p-6 md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Mission</h2>
            <p>
              To empower students with the knowledge, skills, and values needed
              to thrive in a dynamic world. We are committed to providing a
              balanced education that nurtures the intellectual, emotional, and
              social development of every student.
            </p>
          </div>
        </section>

        {/* Principal's Message Section */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden mb-8 flex flex-col md:flex-row-reverse">
          <img
            src="https://via.placeholder.com/800x400?text=Principal%27s+Message"
            alt="Principal's Message"
            className="w-full md:w-1/2 h-48 object-cover"
          />
          <div className="p-6 md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">
              Principal&apos;s Message
            </h2>
            <p>
              At Springdale, we believe in nurturing the potential of every
              student and guiding them towards a successful future. Our
              dedicated faculty and staff work tirelessly to create a supportive
              and challenging environment that encourages growth and learning.
            </p>
          </div>
        </section>

        {/* Infrastructure and Facilities Section */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden mb-8 flex flex-col md:flex-row">
          <img
            src="https://via.placeholder.com/800x400?text=Infrastructure+%26+Facilities"
            alt="Infrastructure and Facilities"
            className="w-full md:w-1/2 h-48 object-cover"
          />
          <div className="p-6 md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">
              Infrastructure and Facilities
            </h2>
            <ul className="list-disc pl-5">
              <li>State-of-the-art science and computer labs</li>
              <li>Spacious and well-equipped classrooms</li>
              <li>
                Library with a vast collection of books and digital resources
              </li>
              <li>
                Sports facilities including a playground, gymnasium, and
                swimming pool
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className=" text-black p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Springdale Public School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs;
