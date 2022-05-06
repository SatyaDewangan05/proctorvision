import React from "react";

import "./Login.css";

const tutorialPageFunc = () => {
  const login = document.querySelector(".login");
  login.style.display = "none";
  const tutorial = document.querySelector(".tutorial");
  tutorial.style.display = "unset";
};

const Login = () => {
  return (
    <div className="login">
      <div className="container flex">
        <div className="content short-content">
          <div className="image">
            <img src={require("./image/logo.png")} alt="Logo" />
          </div>
          <div className="login-auth">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="reset">
            <p>Reset Password From Default/</p>
            <p>Forget Password</p>
          </div>
          <div className="button">
            <button
              className="btn continue-btn"
              onClick={(e) => {
                e.preventDefault();
                tutorialPageFunc();
              }}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
