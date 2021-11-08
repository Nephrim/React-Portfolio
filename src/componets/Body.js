import React from "react";

export default function Body() {
  return (
    <>
      <img className="profile-pic" img src={require("../images/javk.png").default} alt="Portfolio image" />
      <div className="about-me">
        <div className="title">
          <h2 id="section-1">About Me</h2>
        </div>
        <div className="content">
          Hello! I am Keith Whitman and this is my Portfolio! I am 23
          Years old and am residing in Phoenix, AZ. I have 3 German Shepards and thats all.
        </div>
      </div>
      <section className="lower-page">
        <aside className="aside">
          {" "}
          <div className="work">
            <div className="title">
              <h2 id="section-2">My Work</h2>
            </div>
            <div className="card w-100" id="card" style={{ width: "18rem" }}>
              <img
                src={require("../images/KJHS.png").default}
                className="card-img-top"
                alt="Food Diet Project 1"
              />
              <div className="card-body">
                <h5 className="card-title">AJHS Food Diet</h5>
                <p className="card-text">
                  Here is my Project 1 for the coding bootcamp!
                </p>
                <a
                  href="https://github.com/Nephrim/Project-1"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Github
                </a>
              </div>
            </div>
            <br />
            <div className="card w-100" style={{ width: "18rem" }}>
              <img
                src={require("../images/Note-Taking.png").default}
                className="card-img-top"
                alt="musicalsoundbored"
              />
              <div className="card-body">
                <h5 className="card-title">Note-Taking-App</h5>
                <p className="card-text">This is my URL Note-Taking-App!</p>
                <a
                  href="https://github.com/Nephrim/Note-Taking-Tutorial"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="contact-me">
            <div className="title">
              <h2 id="section-3">Contact Me</h2>
            </div>
            <div className="list-group">
              <a
                href="mailto:keith.whittman@gmail.com"
                className="list-group-item list-group-item-action"
              >
                Email
              </a>
              <a
                href="https://github.com/Nephrim"
                target="_blank"
                className="list-group-item list-group-item-action"
              >
                Github
              </a>
              <button
                type="button"
                className="list-group-item list-group-item-action"
                disabled
              >
                Phone: 480-433-7442
              </button>
            </div>
          </div>
          <div className="resume">
            <div className="title">
              <h2 id="section-4">My Resume</h2>
            </div>
            <div className="content" id="resumepdf">
              <a
                href="Resume.pdf"
                target="_blank"
                className="btn btn-secondary"
                role="button"
                data-bs-toggle="button"
                aria-pressed="true"
              >
                Resume link
              </a>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
