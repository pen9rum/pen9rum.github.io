import React from 'react';
import PublicationCard from './PublicationCard';

const Publications = ({ publications }) => {
  return (
    <section className="resume-section" id="publications">
      <div className="resume-section-content">
        <h2 className="mb-5">Publications</h2>
        <div className="publications-list">
          {publications.map((pub, index) => (
            <PublicationCard key={index} publication={pub} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
