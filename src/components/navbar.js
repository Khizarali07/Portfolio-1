import "./navbar.css";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);

export default function navbar() {
  return (
    <>
      <div id="main1">
        <p id="name">Khizar Ali</p>

        <ul id="options">
          <li className="opt">
            <Link to="/Portfolio-1">Home</Link>
          </li>
          <li className="opt">
            <Link to="/Portfolio-1/about">About</Link>
          </li>
          <li className="opt">
            <Link to="/Portfolio-1/experience">Experience</Link>
          </li>
          <li className="opt">
            <Link to="/Portfolio-1/projects">Projects</Link>
          </li>
          <li className="opt">
            <Link to="/Portfolio-1/contact">Contact</Link>
          </li>
          <li id="mode">
            <p id="button" onClick={switching}></p>
          </li>
        </ul>

        <ul id="options1">
          <FontAwesomeIcon icon="fa-solid fa-bars" id="men" onClick={menu} />
          <li className="opt1">
            <Link to="/">Home</Link>
          </li>
          <li className="opt1">
            <Link to="/about">About</Link>
          </li>
          <li className="opt1">
            <Link to="/experience">Experience</Link>
          </li>
          <li className="opt1">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="opt1">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <hr />
    </>
  );
}

let mode = "dark";

function switching() {
  let x = document.getElementById("button");
  let x1 = document.getElementById("mode");
  let y = document.body;
  let tag = document.getElementsByTagName("a");

  let a = 0;
  console.log(window.innerWidth);
  if (mode === "dark") {
    x.style.transition = "transform 0.2s linear";
    x.style.transform =
      window.innerWidth >= 768 ? "translate(1.7vw)" : "translate(5vw)";
    x.style.backgroundColor = "white";
    x1.style.borderColor = "skyblue";
    mode = "light";
    y.style.backgroundColor = "black";
    y.style.color = "white";
    while (a < tag.length) {
      tag[a].style.color = "white";
      a++;
    }
  } else {
    x.style.transition = "transform 0.2s linear";
    x.style.transform = "translate(0px)";
    x.style.backgroundColor = "black";
    x1.style.borderColor = "brown";
    mode = "dark";
    y.style.backgroundColor = "white";
    y.style.color = "black";
    while (a < tag.length) {
      tag[a].style.color = "black";
      a++;
    }
  }
}
let i = 0;
function menu() {
  i++;
  let x = document.getElementsByClassName("opt1");
  let a = 0;
  if (i % 2 !== 0) {
    while (a < x.length) {
      x[a].style.display = "contents";
      a++;
    }
  } else {
    while (a < x.length) {
      x[a].style.display = "none";
      a++;
    }
  }
}
