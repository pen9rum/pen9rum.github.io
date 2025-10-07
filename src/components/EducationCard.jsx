import React from 'react';

const EducationCard = ({ education }) => {
  const cardStyle = {
    padding: '1.5rem',
    border: '1px solid #e9ecef',
    borderRadius: '0.5rem',
    transition: 'all 0.3s ease',
    backgroundColor: '#fff'
  };

  const schoolStyle = {
    fontWeight: 600,
    color: '#212529',
    lineHeight: 1.4
  };

  const degreeStyle = {
    fontSize: '0.95rem',
    color: '#6c757d'
  };

  const fieldStyle = {
    fontSize: '0.9rem',
    color: '#495057',
    fontStyle: 'italic'
  };

  const periodStyle = {
    fontSize: '0.9rem',
    color: '#0d6efd',
    fontWeight: 500
  };

  const gpaStyle = {
    fontSize: '0.9rem',
    color: '#28a745',
    fontWeight: 500
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    border: '1px solid #dee2e6'
  };

  return (
    <div 
      className="education-card mb-4" 
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
      <div className="row align-items-center">
        {/* 左側圖片（如果有的話） */}
        {education.image && (
          <div className="col-md-3 col-sm-4">
            <div className="education-image">
              <img 
                src={education.image} 
                alt={education.school}
                className="img-fluid rounded shadow-sm"
                style={imageStyle}
              />
            </div>
          </div>
        )}
        
        {/* 右側內容 */}
        <div className={education.image ? "col-md-9 col-sm-8" : "col-12"}>
          <div className="education-content">
            {/* 學校名稱 */}
            <h5 className="education-school mb-2" style={schoolStyle}>
              {education.school}
            </h5>
            
            {/* 學位 */}
            <p className="education-degree mb-1" style={degreeStyle}>
              {education.degree}
            </p>
            
            {/* 專業領域（如果有的話） */}
            {education.field && (
              <p className="education-field mb-2" style={fieldStyle}>
                {education.field}
              </p>
            )}
            
            {/* 時間期間 */}
            <p className="education-period mb-2" style={periodStyle}>
              {education.period}
            </p>
            
            {/* GPA（如果有的話） */}
            {education.gpa && (
              <p className="education-gpa mb-2" style={gpaStyle}>
                GPA: {education.gpa}
              </p>
            )}
            
            {/* 其他資訊（如果有的話） */}
            {education.description && (
              <p className="education-description mb-2" style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#495057' }}>
                {education.description}
              </p>
            )}
            
            {/* 連結按鈕（如果有的話） */}
            {education.links && (
              <div className="education-links mt-2">
                {education.links.website && (
                  <a 
                    href={education.links.website} 
                    className="btn btn-sm btn-outline-primary me-2 mb-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-globe me-1"></i>
                    Website
                  </a>
                )}
                {education.links.transcript && (
                  <a 
                    href={education.links.transcript} 
                    className="btn btn-sm btn-outline-secondary me-2 mb-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-file-alt me-1"></i>
                    Transcript
                  </a>
                )}
                {education.links.certificate && (
                  <a 
                    href={education.links.certificate} 
                    className="btn btn-sm btn-outline-success me-2 mb-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-certificate me-1"></i>
                    Certificate
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
