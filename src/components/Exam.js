import React from "react";

import "./Exam.css";

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".warning-container").style.display = "unset";
  }, 20000);
});

const Exam = () => {
  return (
    <div className="exam">
      <div className="question-section">
        <div className="question-container">
          <div className="timer">
            <i class="fa-regular fa-clock"></i>
            01:33:33
          </div>
          <h2>Question 1</h2>
          <div className="question">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              dolor officiis eveniet molestias voluptatem eligendi accusantium
              recusandae voluptates quidem aspernatur ut eos repudiandae, maxime
              temporibus ipsum explicabo sequi! Distinctio, veritatis.
            </p>
            <img src={require("./image/rectangle.png")} alt="Rectangle" />
          </div>
          <div className="option">
            <div>
              <input type="radio" name="option" id="option" />
              <label htmlFor="option">Lorem ipsum dolor</label>
            </div>
            <div>
              <input type="radio" name="option" id="option" />
              <label htmlFor="option">Lorem ipsum dolor</label>
            </div>
            <div>
              <input type="radio" name="option" id="option" />
              <label htmlFor="option">Lorem ipsum dolor</label>
            </div>
            <div>
              <input type="radio" name="option" id="option" />
              <label htmlFor="option">Lorem ipsum dolor</label>
            </div>
          </div>
        </div>
        <div className="tracker">
          <div className="exam-btn">
            <button className="btn">Exit</button>
            <button className="btn">Submit</button>
          </div>
          <div className="questions-list">
            <div
              className="question-list"
              style={{ backgroundColor: "white", color: "black" }}
            >
              1
            </div>
            <div className="question-list">2</div>
            <div
              className="question-list"
              style={{ backgroundColor: "#A7F93F", color: "black" }}
            >
              3
            </div>
            <div
              className="question-list"
              style={{ backgroundColor: "#FF5555", color: "black" }}
            >
              4
            </div>
            <div
              className="question-list"
              style={{ backgroundColor: "#FF5555", color: "black" }}
            >
              5
            </div>
            <div className="question-list">6</div>
            <div className="question-list">7</div>
            <div className="question-list">8</div>
            <div className="question-list">9</div>
            <div className="question-list">10</div>
            <div className="question-list">11</div>
            <div className="question-list">12</div>
            <div className="question-list">13</div>
            <div className="question-list">14</div>
            <div className="question-list">15</div>
            <div className="question-list">16</div>
            <div className="question-list">17</div>
            <div className="question-list">18</div>
            <div className="question-list">19</div>
            <div className="question-list">20</div>
          </div>
          <div className="questions-list-changer">
            <p>{"<"}</p>
            <p>1</p>
            <p style={{ opacity: 0.5 }}>2</p>
            <p style={{ opacity: 0.5 }}>3</p>
            <p>{">"}</p>
          </div>
          <div className="exam-btn">
            <button style={{ opacity: 0.5 }}>{"<"} Previous</button>
            <button>Next {">"}</button>
          </div>
        </div>
        <div className="warning-container">
          <div className="warning">
            <h3>Please adjust your camera</h3>
            <p className="time">12:30pm</p>
          </div>
          <div className="warning">
            <i
              class="fa-solid fa-circle-exclamation"
              style={{ color: "#FF5555" }}
            ></i>
            <div>
              <h3 style={{ color: "#FF5555" }}>Warning 1</h3>
              <p>Warning 1</p>
            </div>
            <i class="fa-solid fa-xmark" style={{ color: "#ffffff80" }}></i>
          </div>
          <div className="warning">
            <i
              class="fa-solid fa-circle-exclamation"
              style={{ color: "#FFDB5A" }}
            ></i>
            <div>
              <h3 style={{ color: "#FFDB5A" }}>Warning 2</h3>
              <p>Warning 2</p>
            </div>
            <i class="fa-solid fa-xmark" style={{ color: "#ffffff80" }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
