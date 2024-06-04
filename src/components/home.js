import myimg from "./img.png";
import "./home.css";
import { Link } from "react-router-dom";

export default function home() {
  return (
    <>
      <div id="main2" onLoad={trans1}>
        <img src={myimg} alt="myimg" id="img" />
        <div id="inner">
          <p id="one">Hello, I'm</p>
          <p id="two">Khizar Ali</p>
          <p id="three">Web Developer</p>
          <button className="buttons" id="download" onClick={download}>
            Download CV
          </button>
          <Link to="/Portfolio-1/contact" id="but">
            Contact Info
          </Link>
        </div>
      </div>
    </>
  );
}

function trans1() {
  let x = document.getElementById("img");
  let y = document.getElementById("inner");
  x.style.transition = "1s transform linear";
  x.style.transform =
    window.innerWidth >= 768 ? "translate(32vw)" : "translate(35vw)";

  y.style.transition = "1s transform linear";
  y.style.transform =
    window.innerWidth >= 768 ? "translate(-13vw)" : "translate(-10vw)";
}

function download() {
  const downloadLink = document.createElement("a");
  downloadLink.href =
    "https://drive.usercontent.google.com/u/0/uc?id=1hgiXuhS9Jx9-OF_aMqQVI2f0L4DGd1gx&export=download";
  downloadLink.download = "your_cv.pdf";

  downloadLink.click();
}
