import React from 'react';

const Navigation = ({ personal, navigation }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">{personal.firstName} {personal.lastName}</span>
        <span className="d-none d-lg-block">
          <img 
            className="img-fluid img-profile rounded-circle mx-auto mb-2" 
            src={personal.profileImage} 
            alt="Profile"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/200x200/bd5d38/ffffff?text=Profile';
            }}
          />
        </span>
      </a>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarResponsive" 
        aria-controls="navbarResponsive" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          {navigation.map((item, index) => (
            <li key={index} className="nav-item">
              <a className="nav-link js-scroll-trigger" href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
