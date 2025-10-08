import React from 'react';

const Awards = ({ awards }) => {
  const formatAwardText = (award) => {
    // 處理序數詞的格式化
    return award
      .replace(/(\d+)(st|nd|rd|th)/g, '$1<sup>$2</sup>');
  };

  const sectionHeaderStyle = {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: 'rgb(53, 58, 63)',
    marginBottom: '1.5rem',
    marginTop: '2rem',
    borderBottom: '2px solid rgb(53, 58, 63)',
    paddingBottom: '0.5rem'
  };

  // 分類獎項
  const academicAwards  = [
    awards[0], // Deliman AI Scholarship
    awards[1], // College Student Research Grant
    awards[7]  // Reviewer – Efficient Reasoning Workshop
  ];

  const competitionAwards = [
    awards[2], // 1st Place – Google DevJam Hackathon
    awards[3], // Finalist – Government Presidential Hackathon
    awards[4], // 2nd Place – AWS Generative AI Applications Hackathon
    awards[5], // 3rd Place – Meichu Hackathon
    awards[6]  // Top 3 – ACT Influential Plan
  ];

  return (
    <section className="resume-section" id="awards">
      <div className="resume-section-content">
        <h2 className="mb-5">Awards & Certifications</h2>
        
        {/* Academic Awards Section */}
        <h3 style={sectionHeaderStyle}>Academic Awards and Services</h3>
        <ul className="fa-ul mb-0" style={{ lineHeight: '2.2' }}>
          {academicAwards.map((award, index) => (
            <li key={`academic-${index}`} className="mb-3">
              <span className="fa-li">
                <i className="fas fa-graduation-cap text-primary"></i>
              </span>
              <span dangerouslySetInnerHTML={{ __html: formatAwardText(award) }} />
            </li>
          ))}
        </ul>
        
        {/* Competition Awards Section */}
        <h3 style={sectionHeaderStyle}>Competition Awards</h3>
        <ul className="fa-ul mb-0" style={{ lineHeight: '2.2' }}>
          {competitionAwards.map((award, index) => (
            <li key={`competition-${index}`} className="mb-3">
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
