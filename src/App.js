import Navbar from "./components/navbar.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Experience from "./components/experience.js";
import Projects from "./components/projects.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Portfolio-1" element={<Home />} />
          <Route path="/Portfolio-1/about" element={<About />} />
          <Route path="/Portfolio-1/experience" element={<Experience />} />
          <Route path="/Portfolio-1/projects" element={<Projects />} />
          <Route path="/Portfolio-1/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
