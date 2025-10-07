import React from 'react';

const ExperienceCard = ({ experience }) => {
  const cardStyle = {
    padding: '1.5rem',
    border: '1px solid #e9ecef',
    borderRadius: '0.5rem',
    transition: 'all 0.3s ease',
    backgroundColor: '#fff'
  };

  const titleStyle = {
    fontWeight: 600,
    color: '#212529',
    lineHeight: 1.4
  };

  const companyStyle = {
    fontSize: '0.95rem',
    color: '#6c757d'
  };

  const periodStyle = {
    fontSize: '0.9rem',
    fontStyle: 'italic',
    color: '#0d6efd'
  };

  const descriptionStyle = {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: '#495057'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    border: '1px solid #dee2e6'
  };

  return (
    <div 
      className="experience-card mb-4" 
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div className="row">
        {/* 左側圖片（如果有的話） */}
        {experience.image && (
          <div className="col-md-3 col-sm-4">
            <div className="experience-image">
              <img 
                src={experience.image} 
                alt={experience.company}
                className="img-fluid rounded shadow-sm"
                style={imageStyle}
              />
            </div>
          </div>
        )}
        
        {/* 右側內容 */}
        <div className={experience.image ? "col-md-9 col-sm-8" : "col-12"}>
          <div className="experience-content">
            {/* 職位標題 */}
            <h5 className="experience-title mb-2" style={titleStyle}>
              {experience.title}
            </h5>
            
            {/* 公司名稱 */}
            <p className="experience-company mb-1" style={companyStyle}>
              {experience.company}
            </p>
            
            {/* 工作期間 */}
            <p className="experience-period mb-2" style={periodStyle}>
              {experience.period}
            </p>
            
            {/* 工作描述 */}
            <p className="experience-description mb-2" style={descriptionStyle}>
              {experience.description}
            </p>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
