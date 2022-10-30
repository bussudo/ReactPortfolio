import React from "react";

export default function Resume() {
  return (
    <div className="resume">
      <h3> Resume</h3>
      <h5>
        <span>
          Download my
          <a href="https://docdro.id/wAxp9XY" alt="resume download">
            &nbsp; Resume
          </a>
        </span>
      </h5>
      <h5>Front End Skills</h5>
      <ul className="skills">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
      </ul>
      <h5>Back End Skills</h5>
      <ul className="skills">
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL/Sequelize</li>
        <li>MongoDB/Mongoose</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
