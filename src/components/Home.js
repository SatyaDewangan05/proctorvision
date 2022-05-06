import React from "react";

import "./Home.css";

const loginPageFunc = () => {
  const home = document.querySelector(".home");
  home.style.display = "none";
  const login = document.querySelector(".login");
  login.style.display = "unset";
};

const Home = () => {
  return (
    <div className="home flex">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={require("./image/Frame.png")} alt="Logo" />
          </div>
          <div className="text">
            <p>Welcome abroad</p>
            <p>to the future in the morning</p>
            <p>you've just become a part of it</p>
          </div>
          <div className="button">
            <button
              className="btn continue-btn"
              onClick={(e) => {
                e.preventDefault();
                loginPageFunc();
              }}
            >
              Continue &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
