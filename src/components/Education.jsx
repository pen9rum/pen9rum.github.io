import React from 'react';

const Education = ({ education }) => {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className={`d-flex flex-column flex-md-row justify-content-between ${index < education.length - 1 ? 'mb-5' : ''}`}>
            <div className="flex-grow-1">
              <h3 className="mb-0">{edu.school}</h3>
              <div className="subheading mb-3">{edu.degree}</div>
              {edu.field && <div>{edu.field}</div>}
              {edu.gpa && <p>GPA: {edu.gpa}</p>}
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
