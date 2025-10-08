import React from 'react';

const About = ({ personal, news }) => {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          {personal.firstName}{' '}
          <span className="text-primary">{personal.lastName}</span>
        </h1>

        <div className="subheading mb-5">
          {personal.address} · {personal.phone && `${personal.phone} · `}
          <a href={`mailto:${personal.email}`}>{personal.email}</a>
        </div>

        {/* ✅ 讓 description 內的 <a> 生效 */}
        <p
          className="lead mb-5"
          dangerouslySetInnerHTML={{
            __html: personal.description.replace(/\n/g, '<br/>'),
          }}
        />

        {/* News Section */}
        {news && news.length > 0 && (
          <div className="mb-5">
            <h2 className="mb-3">News</h2>
            <ul className="fa-ul mb-0">
              {news.map((item, index) => (
                <li key={index} className="mb-2">
                  <span className="fa-li">
                    <i className="fas fa-newspaper text-primary"></i>
                  </span>
                  {/* ✅ 用 dangerouslySetInnerHTML 渲染 HTML，避免 raw text */}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `<strong>[${item.date}]</strong> ${item.content}`,
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Social Links */}
        <div className="social-icons">
          {personal.socialLinks.map((link, index) => (
            <a
              key={index}
              className="social-icon"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
