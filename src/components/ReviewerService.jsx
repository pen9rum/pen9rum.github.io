import React from 'react';

const ReviewerService = ({ reviewerService }) => {
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

  const conferenceStyle = {
    fontSize: '0.95rem',
    color: '#0d6efd',
    fontWeight: 500
  };

  const metaStyle = {
    fontSize: '0.9rem',
    color: '#6c757d'
  };

  if (!reviewerService || reviewerService.length === 0) {
    return null;
  }

  return (
    <section className="resume-section" id="reviewer-service">
      <div className="resume-section-content">
        <h2 className="mb-5">Reviewer Service</h2>

        <div className="reviewer-service-list">
          {reviewerService.map((service, index) => (
            <div
              key={index}
              className="reviewer-service-card mb-4"
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
              <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
                <div>
                  <h5 className="mb-2" style={titleStyle}>
                    {service.title}
                    {service.outstanding && (
                      <span className="badge bg-danger ms-2 align-middle">
                        Outstanding Reviewer
                      </span>
                    )}
                  </h5>

                  <p className="mb-2" style={conferenceStyle}>
                    Reviewer - {service.conference}
                  </p>

                  <p className="mb-0" style={metaStyle}>
                    Academic service for peer review in AI and reasoning research.
                  </p>
                </div>

                <div className="reviewer-service-links text-md-end">
                  <a
                    href={service.website}
                    className="btn btn-sm btn-outline-primary me-2 mb-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-globe me-1"></i> Website
                  </a>
                  <a
                    href={service.conferencePage}
                    className="btn btn-sm btn-outline-secondary mb-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt me-1"></i> Conference Page
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewerService;
