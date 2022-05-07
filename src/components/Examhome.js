import React from "react";

import "./Examhome.css";

const dashboardBackFunc = () => {
  document.querySelector(".examhome").style.display = "none";
  document.querySelector(".dashboard").style.display = "unset";
};

const examPage = () => {
  document.querySelector(".examhome").style.display = "none";
  document.querySelector(".exam").style.display = "unset";
};

const Examhome = () => {
  return (
    <div className="examhome">
      <div className="container flex">
        <div className="dashboard-content">
          <div className="dashboard-head">
            <h1
              onClick={() => {
                dashboardBackFunc();
              }}
            >
              {"<"} Graduate Record Examination
            </h1>
            <div>
              <p className="head-date">17th Dec 2020</p>
              <p className="head-time">9:00am - 12:00pm</p>
            </div>
          </div>
          <div className="exam-test">
            <div className="course-img">
              <img src={require("./image/user-img.png")} alt="user" />
            </div>
            <div className="course-content">
              <div className="content-list">
                <img src={require("./image/right.png")} alt="Right" />
                <p>Webcam Check</p>
              </div>
              <div className="content-list">
                <img src={require("./image/right.png")} alt="Right" />
                <p>Mic testing</p>
              </div>
              <div className="content-list">
                <img src={require("./image/cross.png")} alt="Right" />
                <p>a iris sync</p>
              </div>
              <div className="content-list">
                <img src={require("./image/cross.png")} alt="Right" />
                <p>BT / Alien hardware detection</p>
              </div>
              <div className="content-list">
                <img src={require("./image/right.png")} alt="Right" />
                <p>QR / Virtual Machine detection</p>
              </div>
              <div className="content-list">
                <img src={require("./image/loading.png")} alt="Right" />
                <p>Browser lock</p>
              </div>
              <div className="content-list">
                <img src={require("./image/loading.png")} alt="Right" />
                <p>Screen capture</p>
              </div>
              <div className="content-list">
                <img src={require("./image/loading.png")} alt="Right" />
                <p>Identity authentication</p>
              </div>
              <button
                className="btn start-btn"
                onClick={() => {
                  examPage();
                }}
              >
                Start Exam
              </button>
            </div>
          </div>
          <footer className="footer flex" style={{ justifyContent: "right" }}>
            <div className="profile">
              <div>
                <p className="username">Samual Doe</p>
                <p className="userid">18BIS1241</p>
              </div>
              <div className="user">
                <img src={require("./image/user.png")} alt="user" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Examhome;
