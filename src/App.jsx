import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Leadership from './components/Leadership';
import Interests from './components/Interests';
import { resumeData } from './data/resumeData';
import './styles/styles.css';

const App = () => {
  useEffect(() => {
    // 等待 Bootstrap 載入完成
    const initializeBootstrap = () => {
      // 初始化 Bootstrap ScrollSpy
      const initScrollSpy = () => {
        if (window.bootstrap && document.body.querySelector('#sideNav')) {
          try {
            new window.bootstrap.ScrollSpy(document.body, {
              target: '#sideNav',
              rootMargin: '0px 0px -40%',
            });
          } catch (error) {
            console.log('ScrollSpy initialization failed:', error);
          }
        }
      };

      // 處理響應式導航欄收合
      const initNavbarCollapse = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');
        
        responsiveNavItems.forEach(responsiveNavItem => {
          responsiveNavItem.addEventListener('click', () => {
            if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
            }
          });
        });
      };

      // 平滑滾動功能
      const initSmoothScroll = () => {
        const scrollTriggers = document.querySelectorAll('.js-scroll-trigger');
        scrollTriggers.forEach(trigger => {
          trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = trigger.getAttribute('href');
            if (targetId === '#page-top') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              const targetElement = document.querySelector(targetId);
              if (targetElement) {
                const offsetTop = targetElement.offsetTop - 54; // 考慮固定導航欄高度
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
              }
            }
          });
        });
      };

      initScrollSpy();
      initNavbarCollapse();
      initSmoothScroll();
    };

    // 檢查 Bootstrap 是否已載入
    const checkBootstrap = () => {
      if (window.bootstrap) {
        initializeBootstrap();
      } else {
        setTimeout(checkBootstrap, 100);
      }
    };

    checkBootstrap();
  }, []);

  useEffect(() => {
    // 設置 body id
    document.body.id = 'page-top';
    
    return () => {
      document.body.id = '';
    };
  }, []);

  return (
    <div>
      <Navigation 
        personal={resumeData.personal} 
        navigation={resumeData.navigation} 
      />
      
      <div className="container-fluid p-0">
        <About personal={resumeData.personal} news={resumeData.news} />
        <hr className="m-0" />
        
        <Experience experience={resumeData.experience} />
        <hr className="m-0" />
        
        <Education education={resumeData.education} />
        <hr className="m-0" />
        
        <Publications publications={resumeData.publications} />
        <hr className="m-0" />
        
        <Awards awards={resumeData.awards} />
        <hr className="m-0" />
        
        <Leadership leadership={resumeData.leadership} />
        <hr className="m-0" />

      </div>
    </div>
  );
};

export default App;
