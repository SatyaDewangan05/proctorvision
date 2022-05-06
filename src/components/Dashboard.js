import React from "react";

import "./Dashboard.css";

const examHomePage = () => {
  document.querySelector(".examhome").style.display = "unset";
  document.querySelector(".dashboard").style.display = "none";
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container flex">
        <div className="dashboard-content">
          <div className="dashboard-head">
            <h1>My Classes</h1>
          </div>
          <div className="course">
            <div className="course-flex">
              <div>
                <h3>Neural Networks and Fuzzy Control</h3>
                <p>CSE3013</p>
              </div>
              <div className="drop-down">
                <i class="fa-solid fa-caret-down"></i>
              </div>
            </div>
          </div>
          <div className="course syllabus">
            <div className="course-flex">
              <div>
                <h3>IOT System Architecture</h3>
                <p>ECE1029</p>
              </div>
              <div className="drop-down">
                <i class="fa-solid fa-caret-up  "></i>
              </div>
            </div>
            <div className="test">
              <div className="test-head">CAT 1</div>
              <div className="test-schedule">
                22nd Dec 2020 &#183; 9:00am - 12:00pm
                <i
                  className="fa-solid fa-bell-slash"
                  style={{ paddingLeft: "14px", color: "#FFFFFF80" }}
                ></i>
              </div>
              <button className="btn test-btn">Completed</button>
            </div>
            <div className="test">
              <div className="test-head">CAT 2</div>
              <div className="test-schedule">
                12th Jan 2021 &#183; 9:00am - 12:00pm
                <i class="fa-solid fa-bell" style={{ paddingLeft: "14px" }}></i>
              </div>
              <button className="btn test-btn" style={{ color: "white" }}>
                Join Exam
              </button>
            </div>
            <div className="test">
              <div className="test-head">LAB FAT</div>
              <div className="test-schedule">
                22nd Mar 2021 &#183; 9:00am - 12:00pm
                <i class="fa-solid fa-bell" style={{ paddingLeft: "14px" }}></i>
              </div>
              <button className="btn test-btn">Yet to start</button>
            </div>
          </div>
          <footer className="footer flex">
            <div className="demo">
              <p>Take Demo Exam</p>
            </div>
            <div
              className="profile"
              onClick={() => {
                examHomePage();
              }}
            >
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

export default Dashboard;
