import React from "react";

import "./EducationContent.Component.scss";

const EducationContent = () => {
  return (
    <div className="educationContent">
      <div className="box">
        <div className="rows mb-5">
          <div className="row">
            <p className="title is-5 mr-3">School :</p>
            <p className="subtitle">Ontario Tech University, ON</p>
          </div>
          <div className="row">
            <p className="title is-5 mr-3">Program :</p>
            <p className="subtitle">Bachelor of Science, Computer Science</p>
          </div>
          <div className="row">
            <p className="title is-5 mr-3">Graduating :</p>
            <p className="subtitle">2020</p>
          </div>
        </div>

        <div className="rows">
          <div className="row">
            <ul className="">
              Relevent courses:
              <li className="mt-2">- CSCI 2050U – Computer Architecture</li>
              <li>- CSCI 2040U – Software Design and Analysis</li>
              <li>- CSCI 3070U – Analysis and Design of Algorithms</li>
              <li>- CSCI 3030U – Database Systems and Concepts</li>
              <li>- CSCI 3060U – Software Quality Assurance</li>
              <li>- CSCI 3230U - Web Application Development</li>
              <li>- CSCI 4100U - Mobile Devices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationContent;
