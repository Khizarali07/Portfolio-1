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
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/Portfolio/about" element={<About />} />
          <Route path="/Portfolio/experience" element={<Experience />} />
          <Route path="/Portfolio/projects" element={<Projects />} />
          <Route path="/Portfolio/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
