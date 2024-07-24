const extracurricularImageUrl = "https://via.placeholder.com/800x600"; 
const clubsImageUrl = "https://via.placeholder.com/800x600"; 
const achievementsImageUrl = "https://via.placeholder.com/800x600"; 
const councilImageUrl = "https://via.placeholder.com/800x600"; 


function Students() {
  return (
    <div className="relative bg-lightgray py-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-pattern1 bg-cover bg-center opacity-30"></div>
      <div className="absolute top-1/2 left-0 w-full h-full bg-pattern2 bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">

        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-center text-navy mb-12">Life at Springdale</h1>

        {/* Extracurricular Activities Section */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-6 lg:mb-0 lg:mr-6">
              <img
                src={extracurricularImageUrl} 
                alt="Extracurricular Activities"
                className="w-full h-72 object-cover rounded-lg shadow-lg border-4 border-teal"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-teal mb-6">Extracurricular Activities</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Springdale, students engage in a diverse range of extracurricular activities that enhance their learning experience and foster personal growth.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700">
                <li>Music</li>
                <li>Dance</li>
                <li>Drama</li>
                <li>Art</li>
                <li>Sports</li>
                <li>Robotics</li>
                <li>Debate Club</li>
                <li>Science Club</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Clubs and Societies Section */}
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-6 lg:mb-0 lg:mr-6">
              <img
                src={clubsImageUrl}
                alt="Clubs and Societies"
                className="w-full h-72 object-cover rounded-lg shadow-lg border-4 border-teal"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-teal mb-6">Clubs and Societies</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our clubs and societies offer students opportunities to explore their interests, develop new skills, and contribute to the community.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700">
                <li>Literary Society</li>
                <li>Environmental Club</li>
                <li>Astronomy Club</li>
                <li>Coding Club</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <div className="relative">
            <img
              src={achievementsImageUrl}
              alt="Achievements"
              className="w-full h-72 object-cover rounded-lg shadow-lg border-4 border-teal"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 rounded-lg"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
              <h2 className="text-4xl font-bold text-white mb-4 bg-black bg-opacity-50 p-4 rounded-lg">
                Achievements
              </h2>
              <ul className="list-disc list-inside text-lg text-white bg-black bg-opacity-50 p-4 rounded-lg">
                <li>John Smith - National Level Math Olympiad Winner</li>
                <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
                <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Student Council Section */}
        <section>
          <div className="relative">
            <img
              src={councilImageUrl} 
              alt="Student Council"
              className="w-full h-72 object-cover rounded-lg shadow-lg border-4 border-teal"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 rounded-lg"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
              <h2 className="text-4xl font-bold text-white mb-4 bg-black bg-opacity-50 p-4 rounded-lg">
                Student Council
              </h2>
              <ul className="list-disc list-inside text-lg text-white bg-black bg-opacity-50 p-4 rounded-lg">
                <li><strong>President:</strong> Amy Parker, Grade 12</li>
                <li><strong>Vice President:</strong> Rajiv Mehta, Grade 11</li>
                <li><strong>Secretary:</strong> Lisa Wong, Grade 10</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Students;
