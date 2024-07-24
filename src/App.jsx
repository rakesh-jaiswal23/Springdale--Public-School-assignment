import  { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";


const HomePage = lazy(() => import("./pages/HomePage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Academics = lazy(() => import("./pages/Academics"));
const Admission = lazy(() => import("./pages/Admission"));
const Faculty = lazy(() => import("./pages/Faculty"));
const Gallery = lazy(() => import("./pages/Gallery"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Students = lazy(() => import("./pages/students"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="academic" element={<Academics />} />
          <Route path="admission" element={<Admission />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="student" element={<Students />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
