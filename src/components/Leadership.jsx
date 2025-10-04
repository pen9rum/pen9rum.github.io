import React from 'react';

const Leadership = ({ leadership }) => {
  return (
    <section className="resume-section" id="leadership">
      <div className="resume-section-content">
        <h2 className="mb-5">Leadership & Teaching</h2>
        <ul className="fa-ul mb-0" style={{ lineHeight: '2.2' }}>
          {leadership.map((item, index) => (
            <li key={index} className="mb-3">
              <span className="fa-li">
                <i className="fas fa-users text-primary"></i>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Leadership;
