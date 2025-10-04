import React from 'react';

const Interests = ({ interests }) => {
  return (
    <section className="resume-section" id="interests">
      <div className="resume-section-content">
        <h2 className="mb-5">Interests</h2>
        <div style={{ lineHeight: '2' }}>
          {interests.map((paragraph, index) => (
            <p key={index} className={index === interests.length - 1 ? 'mb-0' : 'mb-4'}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
