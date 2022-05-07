import React from "react";

import "./Settings.css";

const dashboardBackFunc = () => {
  document.querySelector(".settings").style.display = "none";
  document.querySelector(".dashboard").style.display = "unset";
};

const Settings = () => {
  return (
    <div className="settings">
      <div className="container flex">
        <div className="dashboard-content">
          <div className="settings-head">
            <div
              className="settings-user"
              onClick={() => {
                dashboardBackFunc();
              }}
            >
              <p>{"<"}</p>
              <img src={require("./image/user.png")} alt="user" />
              <p>Samual Doe</p>
              <h5>18BIS1241</h5>
            </div>
            <div className="edit">
              <p>
                <i
                  class="fa-solid fa-pencil"
                  style={{ paddingRight: "10px" }}
                ></i>
                Edit Profile Picture
              </p>
            </div>
          </div>
          <div className="general-settings">
            <p className="general-head">General Setting</p>
            <div className="setting">
              <div className="setting-list">
                <p>Settings 1</p>
                <i class="fa-solid fa-caret-down"></i>
              </div>
              <hr />
              <div className="setting-list">
                <p>Settings 2</p>
                <i class="fa-solid fa-toggle-off"></i>
              </div>
              <hr />
              <div className="setting-list">
                <p>Settings 3</p>
                <i class="fa-solid fa-toggle-on"></i>
              </div>
            </div>
            <p className="general-head">General Settings</p>
            <div className="setting">
              <div className="setting-list">
                <p>Settings 1</p>
                <p style={{ textDecoration: "underline" }}>View More</p>
              </div>
              <hr />
              <div className="setting-list">
                <p>Settings 2</p>
                <i class="fa-solid fa-toggle-off"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
