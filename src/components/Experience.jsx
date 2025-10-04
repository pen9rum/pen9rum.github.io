import React from 'react';

const Experience = ({ experience }) => {
  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className={`d-flex flex-column flex-md-row justify-content-between ${index < experience.length - 1 ? 'mb-5' : ''}`}>
            <div className="flex-grow-1">
              <h3 className="mb-0">{job.title}</h3>
              <div className="subheading mb-3">{job.company}</div>
              <p>{job.description}</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">{job.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
