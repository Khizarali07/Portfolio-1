import "./about.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

export default function about() {
  const navigate = useNavigate();
  window.addEventListener("beforeunload", function (event) {
    navigate("/Portfolio");
  });
  function executeDelayedFunction() {
    setTimeout(trans2, 500);
  }
  executeDelayedFunction();
  return (
    <div>
      <div id="tr">
        <p id="aone">Get To Know More</p>
        <p id="atwo">About Me</p>
      </div>

      <div id="about">
        <div className="aboutbox">
          <FontAwesomeIcon icon="fa-solid fa-medal" className="img1" />
          <p className="abone">Experience</p>
          <p className="abtwo">6+ Months</p>
          <p className="abtwo">MERN Stack Developer</p>
        </div>

        <div className="aboutbox">
          <FontAwesomeIcon icon="fa-solid fa-school" className="img1" />
          <p className="abone">Education</p>
          <p className="abtwo">Bachelor's in Computer Science</p>
          <p className="abtwo">Semester : 7th</p>
        </div>
      </div>

      <p id="obj">
        Motivated web developer with a strong foundation in HTML, CSS,
        Javascript and MERN Stack seeking an opportunity to contribute to a team
        environment and build user-friendly web applications.
      </p>
    </div>
  );
}

function trans2() {
  let x = document.getElementById("tr");
  let y = document.getElementsByClassName("aboutbox");

  x.style.transition = "1s transform linear";
  x.style.transform =
    window.innerWidth >= 768 ? "translateY(4.2vw)" : "translateY(48vw)";

  y[0].style.transition = "1s transform linear";
  y[0].style.transform =
    window.innerWidth >= 768 ? "translate(22vw)" : "translate(16vw)";

  y[1].style.transition = "1s transform linear";
  y[1].style.transform =
    window.innerWidth >= 768 ? "translate(-22vw)" : "translate(-16vw)";
}
