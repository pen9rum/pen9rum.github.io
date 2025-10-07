import React from 'react';
import EducationCard from './EducationCard';

const Education = ({ education }) => {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="education-list">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
