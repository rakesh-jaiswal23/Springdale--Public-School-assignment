const photoData = [
  {
    src: "sports_day.jpg", //dummy  path
    alt: "Students participating in various sports events.",
  },
  {
    src: "science_exhibition.jpg", // dummy path
    alt: "Students presenting their science projects.",
  },
  {
    src: "cultural_fest.jpg", //dummy path
    alt: "Students performing in the cultural fest.",
  },
  { src: "classroom.jpg", alt: "A glimpse of our interactive classrooms." },
  {
    src: "library.jpg", //dummy path
    alt: "Students reading and studying in the school library.",
  },
];

const videoData = [
  { src: "school_tour.mp4", alt: "Virtual tour of Springdale Public School." }, //dummy path
  {
    src: "annual_function.mp4",
    alt: "Highlights from the Annual Function 2023.",
  },
];
function Gallery() {
  return (
    <div className="relative bg-lightgray py-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-pattern1 bg-cover bg-center opacity-30"></div>
      <div className="absolute top-1/2 left-0 w-full h-full bg-pattern2 bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-center text-navy mb-12">
          Gallery
        </h1>

        {/* Photos Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-teal mb-8 text-center">
            Photos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {photoData.map((photo, index) => (
              <div key={index} className="relative">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-60 object-cover rounded-lg shadow-lg border-4 border-teal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 rounded-lg"></div>
                <div className="absolute inset-0 flex justify-center items-center text-center text-white px-4">
                  <p className="text-lg font-semibold">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section>
          <h2 className="text-4xl font-bold text-teal mb-8 text-center">
            Videos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {videoData.map((video, index) => (
              <div key={index} className="relative">
                <video
                  src={video.src}
                  controls
                  className="w-full h-60 object-cover rounded-lg shadow-lg border-4 border-teal"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30 rounded-lg"></div>
                <div className="absolute inset-0 flex justify-center items-center text-center text-white px-4">
                  <p className="text-lg font-semibold">{video.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Gallery;
