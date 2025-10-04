import React from 'react';

const Awards = ({ awards }) => {
  const formatAwardText = (award) => {
    // 處理序數詞的格式化
    return award
      .replace(/(\d+)(st|nd|rd|th)/g, '$1<sup>$2</sup>');
  };

  return (
    <section className="resume-section" id="awards">
      <div className="resume-section-content">
        <h2 className="mb-5">Awards & Certifications</h2>
        <ul className="fa-ul mb-0" style={{ lineHeight: '2.2' }}>
          {awards.map((award, index) => (
            <li key={index} className="mb-3">
              <span className="fa-li">
                <i className="fas fa-trophy text-warning"></i>
              </span>
              <span dangerouslySetInnerHTML={{ __html: formatAwardText(award) }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Awards;
