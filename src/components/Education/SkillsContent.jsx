import React from "react";

import "./SkillsContent.Component.scss";
const SkillsContent = () => {
  return (
    <div className="skills-content">
      <div className="columns">
        <div className="column">
          <ul className="larger">
            Programing Skills:
            <li>- Languages: Proficient with Python, Java, C++, Dart, PHP</li>
            <li>
              <ul>
                Web Frameworks:
                <div className="columns">
                  <div className="column">
                    <ul>
                      Front End:
                      <li>- HTML/CSS/JS/Jquery</li>
                      <li>- ReactJS</li>
                      <li>- VueJS</li>
                      <li>- Svelte</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul>
                      Back End:
                      <li>- Node/Express</li>
                      <li>- Flask/Django</li>
                      <li>- SpringBoot</li>
                      <li>- Laravel</li>
                      <li>- Firebase</li>
                    </ul>
                  </div>
                </div>
              </ul>
            </li>
            <li>- Databases: PostgreSQL, MySQL, MongoDB, FaunaDB, Firestore</li>
            <li>
              - Testing, Performance Monitoring, IDE, Frameworks: IntelliJ IDE,
              Visual Studio JUnit, Maven, ANT, XSLT, Hibernate, Selenium, Jest
            </li>
            <li>
              - Development setup: VScode on MacOS, VM for when windows
              development is needed
            </li>
          </ul>
        </div>
        <div className="column">
          <ul className="larger">
            Soft Skills
            <li>- Bilingual: Proficient in English and French</li>
            <li>
              - Strong Interpersonal Skills: Able to communicate effectively
              with clients and colleagues
            </li>
            <li>
              - Time management: Highly organized, consistent and reliable with
              deadlines
            </li>
            <li>- Diligent: Hard working, passionate and responsible</li>
            <li>
              - Focused: Make sure tasks are completed to the required standard
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
