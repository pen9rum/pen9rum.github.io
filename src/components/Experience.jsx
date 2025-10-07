import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = ({ experience }) => {
  const sectionHeaderStyle = {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: 'rgb(53, 58, 63)',
    marginBottom: '1.5rem',
    marginTop: '2rem',
    borderBottom: '2px solid rgb(53, 58, 63)',
    paddingBottom: '0.5rem'
  };

  return (
    <section className="resume-section" id="experience">
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        
        {/* Research Section */}
        <h3 style={sectionHeaderStyle}>Research</h3>
        <div className="experience-list">
          <ExperienceCard experience={experience[0]} />
          <ExperienceCard experience={experience[1]} />
          <ExperienceCard experience={experience[2]} />
          <ExperienceCard experience={experience[5]} />
        </div>
        
        {/* Internship Section */}
        <h3 style={sectionHeaderStyle}>Job Experience</h3>
        <div className="experience-list">
          <ExperienceCard experience={experience[3]} />
          <ExperienceCard experience={experience[4]} />
          <ExperienceCard experience={experience[6]} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
