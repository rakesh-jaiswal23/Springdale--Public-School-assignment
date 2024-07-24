const imageUrl = "https://via.placeholder.com/150"; 

const facultyMembers = [
  {
    name: "John Doe",
    position: "Principal",
    qualifications: "M.Ed",
    experience: "20 years of experience in educational administration",
  },
  {
    name: "Jane Smith",
    position: "Vice Principal",
    qualifications: "M.Sc. in Physics",
    experience: "15 years of teaching experience",
  },
  {
    name: "Emily Johnson",
    position: "English Teacher",
    qualifications: "M.A. in English",
    experience: "10 years of teaching experience",
  },
  {
    name: "Michael Brown",
    position: "Mathematics Teacher",
    qualifications: "M.Sc. in Mathematics",
    experience: "8 years of teaching experience",
  },
  {
    name: "Sophia Davis",
    position: "Science Teacher",
    qualifications: "M.Sc. in Chemistry",
    experience: "12 years of teaching experience",
  },
  {
    name: "David Wilson",
    position: "Computer Science Teacher",
    qualifications: "B.Tech in Computer Science",
    experience: "5 years of teaching experience",
  },
];
function Faculty() {
  return (
    <div className="bg-lightgray py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-navy mb-12">
          Faculty
        </h1>

        {/* Faculty Profiles */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg flex items-center"
            >
              <img
                src={imageUrl} 
                alt={`${member.name} Profile`}
                className="w-24 h-24 object-cover rounded-full shadow-md mr-6"
              />
              <div>
                <h2 className="text-2xl font-semibold text-teal mb-2">
                  {member.name}
                </h2>
                <p className="text-lg font-medium text-navy mb-1">
                  {member.position}
                </p>
                <p className="text-md text-gray-700 mb-1">
                  Qualifications: {member.qualifications}
                </p>
                <p className="text-md text-gray-700">{member.experience}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Faculty;
