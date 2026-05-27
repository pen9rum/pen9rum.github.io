import React, { useMemo, useState } from 'react';
import PublicationCard from './PublicationCard';

const Publications = ({ publications }) => {
  const categoryOrder = [
    "LLM Reasoning & Agents",
    "Security & Interpretability",
    "Multimodal",
    "AI Algorithms in Real-World Applications"
  ];

  const [activeCategory, setActiveCategory] = useState(categoryOrder[0]);

  const availableCategories = useMemo(() => (
    categoryOrder.filter((category) =>
      publications.some((publication) => publication.category === category)
    )
  ), [publications]);

  const visiblePublications = publications.filter(
    (publication) => publication.category === activeCategory
  );

  const tabListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '2rem'
  };

  const buttonStyle = {
    borderRadius: '0.4rem',
    fontWeight: 600,
    whiteSpace: 'normal',
    textAlign: 'left'
  };

  return (
    <section className="resume-section" id="publications">
      <div className="resume-section-content">
        <h2 className="mb-5">Publications</h2>

        <div className="publication-category-tabs" style={tabListStyle}>
          {availableCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`btn btn-sm ${
                activeCategory === category ? 'btn-primary' : 'btn-outline-primary'
              }`}
              style={buttonStyle}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="publications-list">
          {visiblePublications.map((pub, index) => (
            <PublicationCard key={`${activeCategory}-${index}`} publication={pub} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
