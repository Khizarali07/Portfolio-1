import "./experience.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

export default function experience() {
  function executeDelayedFunction() {
    setTimeout(trans3, 500);
  }
  executeDelayedFunction();
  return (
    <div>
      <div id="tr">
        <p id="aone">Explore My</p>
        <p id="atwo">Experience</p>
      </div>

      <div id="about">
        <div className="expbox">
          <p className="abone">Front-End Development</p>
          <div className="exp">
            <FontAwesomeIcon icon="fa-solid fa-circle-check" className="d" />
            <div className="inside">
              <p className="d1">HTML</p>
              <p className="d2">Experienced</p>
            </div>
          </div>
          <div className="exp">
            <FontAwesomeIcon icon="fa-solid fa-circle-check" className="d" />
            <div className="inside">
              <p className="d1">CSS</p>
              <p className="d2">Experienced</p>
            </div>
          </div>
          <div className="exp">
            <FontAwesomeIcon icon="fa-solid fa-circle-check" className="d" />
            <div className="inside">
              <p className="d1">JavaScript</p>
              <p className="d2">Experienced</p>
            </div>
          </div>
          <div className="exp">
            <FontAwesomeIcon icon="fa-solid fa-circle-check" className="d" />
            <div className="inside">
              <p className="d1">React JS</p>
              <p className="d2">Intermediate</p>
            </div>
          </div>
        </div>

        <div className="expbox">
          <p className="abone">Back-End Development</p>
          <div className="exp">
            <FontAwesomeIcon icon="fa-solid fa-circle-check" className="d" />
            <div className="inside">
              <p className="d1">Node JS</p>
              <p className="d2">Intermediate</p>
            </div>
          </div>
          <div className="exp">
            <FontAwesomeIcon icon="fa-solid fa-circle-check" className="d" />
            <div className="inside">
              <p className="d1">Express JS</p>
              <p className="d2">Intermediate</p>
            </div>
          </div>
        </div>

        <div className="expbox">
          <p className="abone">Data Bases</p>
          <div className="exp">
            <FontAwesomeIcon icon="fa-solid fa-circle-check" className="d" />
            <div className="inside">
              <p className="d1">MongoDB</p>
              <p className="d2">Intermediate</p>
            </div>
          </div>
          <div className="exp">
            <FontAwesomeIcon icon="fa-solid fa-circle-check" className="d" />
            <div className="inside">
              <p className="d1">MySQL</p>
              <p className="d2">Experienced</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function trans3() {
  let x = document.getElementById("tr");
  let y = document.getElementsByClassName("expbox");

  if (window.innerWidth >= "768") {
    y[0].style.transition = "1s transform linear";
    y[0].style.transform = "translate(10vw)";
    y[2].style.transition = "1s transform linear";
    y[2].style.transform = "translate(-10vw)";
    x.style.transition = "1s transform linear";
    x.style.transform = "translateY(6vh)";
  } else {
    y[0].style.transition = "1s transform linear";
    y[0].style.transform = "translate(5vw)";
    y[2].style.transition = "1s transform linear";
    y[2].style.transform = "translate(-5vw)";
    x.style.transition = "1s transform linear";
    x.style.transform = "translateY(23vh)";
  }
}