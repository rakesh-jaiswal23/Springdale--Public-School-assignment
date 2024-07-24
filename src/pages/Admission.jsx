const AdmissionsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          Admissions
        </h1>

        {/* Admission Process */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Admission Process
          </h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-600">
              Admission forms are available for download. Submit the completed
              form along with required documents at the school office.
            </p>
          </div>
        </section>

        {/* Admission Criteria */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Admission Criteria
          </h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-600">
              Admission is based on merit and availability of seats. Entrance
              tests may be conducted for certain grades.
            </p>
          </div>
        </section>

        {/* Important Dates */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Important Dates
          </h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <ul className="list-disc pl-5 text-gray-600">
              <li>
                <strong>Admission Form Availability:</strong> March 1st
              </li>
              <li>
                <strong>Last Date for Submission:</strong> March 31st
              </li>
              <li>
                <strong>Entrance Test:</strong> April 15th
              </li>
              <li>
                <strong>Announcement of Results:</strong> April 30th
              </li>
            </ul>
          </div>
        </section>

        {/* Admission Form */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Download Admission Form
          </h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              To apply, download the admission form using the button below, fill
              it out, and submit it along with the required documents at the
              school office.
            </p>
            <a
              href="/path-to-admission-form.pdf" // here we put any pdf path 
              className="inline-block bg-teal-600 text-red-600 py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
              download
            >
              Download Admission Form
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdmissionsPage;
