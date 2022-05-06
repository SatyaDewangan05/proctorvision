import React from "react";

import "./Tutorial.css";

let i = 0;

const tutorial = () => {
  if (i === 3) {
    document.querySelector(".tutorial").style.display = "none";
    return (document.querySelector(".dashboard").style.display = "unset");
  }
  if (i === 2) {
    document.querySelector(".tutorial-btn").innerHTML =
      "Go to dashboard &#10095;";
  }
  const show = document.querySelectorAll(`.tutorials`);
  show[i].classList.remove("show");
  show[i + 1].classList.add("show");
  i++;
};

const Tutorial = () => {
  return (
    <div className="tutorial">
      <div className="container flex">
        <div className="content short-content">
          <div className="tutorials show">
            <div className="img">
              <img src={require("./image/vector1.png")} alt="Logo" />
              <img
                className="absolute"
                src={require("./image/team1.png")}
                alt="Vector"
              />
            </div>
            <div className="desc">
              <p>We ensure that honesty pays</p>
            </div>
          </div>
          <div className="tutorials">
            <div className="img">
              <img src={require("./image/vector2.png")} alt="Logo" />
              <img
                className="absolute"
                src={require("./image/team2.png")}
                alt="Vector"
              />
            </div>
            <div className="desc">
              <p>Customise your assessment and proctoring needs</p>
            </div>
          </div>
          <div className="tutorials">
            <div className="img">
              <img src={require("./image/vector3.png")} alt="Logo" />
              <img
                className="absolute"
                src={require("./image/team3.png")}
                alt="Vector"
              />
            </div>
            <div className="desc">
              <p>Say no to false reports</p>
            </div>
          </div>
          <div className="tutorials">
            <div className="img">
              <img src={require("./image/vector4.png")} alt="Logo" />
              <img
                className="absolute"
                src={require("./image/team4.png")}
                alt="Vector"
              />
            </div>
            <div className="desc">
              <p>Protecting rights, respecting privacy</p>
            </div>
          </div>
          <div className="btns">
            <button
              className="btn tutorial-btn"
              onClick={(e) => {
                e.preventDefault();
                tutorial();
              }}
            >
              Continue &#10095;
            </button>
            <ul className="dots">
              <li className="active"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="skip">Skip</div>
      </div>
    </div>
  );
};

export default Tutorial;
