import project1 from "./projects images/project 1.png";
import project2 from "./projects images/project 2.png";
import project3 from "./projects images/project 3.png";
import project4 from "./projects images/project 4.png";
import project5 from "./projects images/project 5.png";
import "./project.css";

export default function projects() {
  function executeDelayedFunction() {
    setTimeout(trans5, 500);
  }
  executeDelayedFunction();
  return (
    <div>
      <div id="tr">
        <p id="aone">Browse My Recent</p>
        <p id="atwo">Projects</p>
      </div>

      <div id="projects">
        <div className="projs">
          <img src={project1} alt="Project #1" className="project" />
          <p className="name">Currency Converter</p>
          <div className="cent">
            <a
              className="probut"
              href="https://github.com/Khizarali07/Currency-Converter"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="probut"
              href="https://khizarali07.github.io/Currency-Converter"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="projs">
          <img src={project2} alt="Project #2" className="project" />
          <p className="name">Text Tools</p>
          <div className="cent">
            <a
              className="probut"
              href="https://github.com/Khizarali07/Text-Tools"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="probut"
              href="https://khizarali07.github.io/Text-Tools"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="projs">
          <img src={project3} alt="Project #3" className="project" />
          <p className="name">Rock Paper Scissor</p>
          <div className="cent">
            <a
              className="probut"
              href="https://github.com/Khizarali07/Rock-Paper-Scissor"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="probut"
              href="https://khizarali07.github.io/Rock-Paper-Scissor"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="projs">
          <img src={project4} alt="Project #4" className="project" />
          <p className="name">Tic Tac Toe</p>
          <div className="cent">
            <a
              className="probut"
              href="https://github.com/Khizarali07/Tic-Tac-Toe"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="probut"
              href="https://khizarali07.github.io/Tic-Tac-Toe"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="projs">
          <img src={project5} alt="Project #5" className="project" />
          <p className="name">Calculator</p>
          <div className="cent">
            <a
              className="probut"
              href="https://github.com/Khizarali07/Calculator"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="probut"
              href="https://khizarali07.github.io/Calculator"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function trans5() {
  let x = document.getElementById("tr");
  if (window.innerWidth <= "767") {
    x.style.transition = "1s transform linear";
    x.style.transform = "translateY(25vh)";
  }
}
