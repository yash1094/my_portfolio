import { useState } from "react";
import "./Education.Component.scss";
import EducationContent from "./EducationContent";
import SkillsContent from "./SkillsContent";

const Education = () => {
  const [isEducation, setIsEducation] = useState(true);

  return (
    <div id="education" className="education section has-bottom-border">
      <div className="row mb-6">
        <div className="columns">
          <div className="column">
            <button
              className={
                isEducation ? "button subtitle selected" : "button subtitle"
              }
              onClick={() => setIsEducation(true)}
            >
              Education
            </button>
          </div>
          <div className="column has-vertical-divider">
            <button
              className={
                !isEducation ? "button subtitle selected" : "button subtitle"
              }
              onClick={() => setIsEducation(false)}
            >
              Skills
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="content">
          {isEducation ? <EducationContent /> : <SkillsContent />}
        </div>
      </div>
    </div>
  );
};

export default Education;
