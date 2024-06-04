import "./contact.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);

export default function contact() {
  const navigate = useNavigate();
  window.addEventListener("beforeunload", function (event) {
    navigate("/Portfolio");
  });
  function executeDelayedFunction() {
    setTimeout(trans4, 500);
  }
  executeDelayedFunction();
  return (
    <div id="con">
      <div id="tr">
        <p id="aone">Get in Touch</p>
        <p id="atwo">Contact Me</p>
      </div>

      <div id="contact">
        <div className="cont">
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
          <p className="para">khizarali.cs@gmail.com</p>
        </div>
        <div className="cont">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          <a
            href="https://www.linkedin.com/in/hafiz-m-khizar-ali/"
            className="para on"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}

function trans4() {
  let x = document.getElementById("tr");
  let y = document.getElementById("contact");
  if (window.innerWidth >= "768") {
    x.style.transition = "1s transform linear";
    x.style.transform = "translateY(10vh)";
    y.style.transition = "1s transform linear";
    y.style.transform = "translateY(-20vw)";
  } else {
    x.style.transition = "1s transform linear";
    x.style.transform = "translateY(26vh)";
    y.style.transition = "1s transform linear";
    y.style.transform = "translateY(-40vw)";
  }
}
