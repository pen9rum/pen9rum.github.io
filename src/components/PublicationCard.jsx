import React from 'react';

const PublicationCard = ({ publication }) => {
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

  const authorStyle = {
    fontSize: '0.95rem',
    color: '#6c757d'
  };

  const venueStyle = {
    fontSize: '0.9rem',
    fontStyle: 'italic'
  };

  const badgeStyle = {
    fontSize: '0.75rem'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    border: '1px solid #dee2e6'
  };

  return (
    <div
      className="publication-card mb-4"
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
        <div className="col-md-3 col-sm-4">
          <img
            src={publication.image}
            alt={publication.title}
            className="img-fluid rounded shadow-sm"
            style={imageStyle}
          />
        </div>

        <div className="col-md-9 col-sm-8">
          <h5 className="mb-2" style={titleStyle}>{publication.title}</h5>

          <p className="mb-1" style={authorStyle}>{publication.authors}</p>

          <p className="mb-2" style={venueStyle}>
            In <span className="text-primary">{publication.venue}</span>
          </p>

          {publication.status && (
            <span
              className={`badge ${
                publication.status === 'Accepted' ? 'bg-success' : 'bg-warning'
              } mb-2`}
              style={badgeStyle}
            >
              {publication.status}
            </span>
          )}

          {publication.links && (
            <div className="publication-links mt-2">
              {publication.links.pdf && (
                <a
                  href={publication.links.pdf}
                  className="btn btn-sm btn-outline-primary me-2 mb-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-file-pdf me-1"></i> PDF
                </a>
              )}

              {publication.links.code && (
                <a
                  href={publication.links.code}
                  className="btn btn-sm btn-outline-secondary me-2 mb-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github me-1"></i> Code
                </a>
              )}

              {publication.links.abstract && (
                <a
                  href={publication.links.abstract}
                  className="btn btn-sm btn-outline-info me-2 mb-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-align-left me-1"></i> Abstract
                </a>
              )}

              {publication.links.video && (
                <a
                  href={publication.links.video}
                  className="btn btn-sm btn-outline-danger me-2 mb-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-video me-1"></i> Video
                </a>
              )}

              {/* Promptfoo */}
              {publication.links.promptfoo && (
                <a
                  href={publication.links.promptfoo}
                  className="btn btn-sm btn-outline-dark me-2 mb-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View in Promptfoo LM Security Database"
                >
                  <i className="fas fa-shield-alt me-1"></i> Promptfoo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
