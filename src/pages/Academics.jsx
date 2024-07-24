
const placeholderImage = "https://via.placeholder.com/600x400?text=Primary Grade Image";
const scienceImage = "https://via.placeholder.com/600x400?text=Science+Stream";
const commerceImage =
  "https://via.placeholder.com/600x400?text=Commerce+Stream";

function AcademicsPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Academics
        </h1>

        {/* Curriculum Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Curriculum
          </h2>

          {/* Primary Curriculum */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Primary (Grades 1-5)
            </h3>
            <img
              src={placeholderImage}
              alt="Primary Curriculum"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <ul className="list-disc list-inside text-gray-600">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Social Studies</li>
              <li>Art</li>
              <li>Physical Education</li>
            </ul>
          </div>

          {/* Secondary Curriculum */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Secondary (Grades 6-10)
            </h3>
            <img
              src={placeholderImage}
              alt="Secondary Curriculum"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <ul className="list-disc list-inside text-gray-600">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science (Physics, Chemistry, Biology)</li>
              <li>Social Studies</li>
              <li>Computer Science</li>
              <li>Physical Education</li>
              <li>Art</li>
            </ul>
          </div>

          {/* Senior Secondary Curriculum */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Senior Secondary (Grades 11-12)
            </h3>

            <div className="mb-4">
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                Science Stream
              </h4>
              <img
                src={scienceImage}
                alt="Science Stream"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <ul className="list-disc list-inside text-gray-600">
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Biology</li>
                <li>Mathematics</li>
                <li>Computer Science</li>
                <li>English</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                Commerce Stream
              </h4>
              <img
                src={commerceImage}
                alt="Commerce Stream"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <ul className="list-disc list-inside text-gray-600">
                <li>Accountancy</li>
                <li>Business Studies</li>
                <li>Economics</li>
                <li>Mathematics</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Teaching Methodologies Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Teaching Methodologies
          </h2>
          <p className="bg-white shadow-md rounded-lg p-6 text-gray-600">
            We use a blend of traditional and modern teaching techniques to
            cater to different learning styles.
          </p>
        </section>

        {/* Educational Resources Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Educational Resources
          </h2>
          <p className="bg-white shadow-md rounded-lg p-6 text-gray-600">
            Digital classrooms, interactive learning modules, and access to
            online educational platforms.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AcademicsPage;
