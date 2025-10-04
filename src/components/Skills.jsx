import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section className="resume-section" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-4">{skills.title}</div>
        <ul className="list-inline dev-icons mb-5">
          {skills.icons.map((icon, index) => (
            <li key={index} className="list-inline-item" style={{ marginRight: '2rem', marginBottom: '1rem' }}>
              <i className={icon}></i>
            </li>
          ))}
        </ul>
        <div className="subheading mb-4">Workflow</div>
        <ul className="fa-ul mb-0" style={{ lineHeight: '2.2' }}>
          {skills.workflow.map((item, index) => (
            <li key={index} className="mb-3">
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
