'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
} else {
  console.error('Sidebar or Sidebar button not found.');
}

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  elementToggleFunc(modalContainer);
  elementToggleFunc(overlay);
}

// add click event to all modal items
if (testimonialsItem && modalContainer && modalCloseBtn && overlay && modalImg && modalTitle && modalText) {
  testimonialsItem.forEach(item => {
    item.addEventListener("click", function () {
      const avatar = this.querySelector("[data-testimonials-avatar]");
      const title = this.querySelector("[data-testimonials-title]");
      const text = this.querySelector("[data-testimonials-text]");

      if (avatar && title && text) {
        modalImg.src = avatar.src;
        modalImg.alt = avatar.alt;
        modalTitle.textContent = title.textContent;
        modalText.textContent = text.textContent;
        testimonialsModalFunc();
      } else {
        console.error('Modal content elements not found.');
      }
    });
  });

  // close modal when close button or overlay is clicked
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
} else {
  console.error('One or more testimonial modal elements not found.');
}

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// toggle select dropdown
if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
} else {
  console.error('Select element not found.');
}

// add event to all select items
if (selectItems && selectValue && select) {
  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      let selectedValue = this.textContent.toLowerCase();
      selectValue.textContent = this.textContent;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });
} else {
  console.error('Select items or related elements not found.');
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

// filter function with case-insensitive comparison
const filterFunc = function (selectedValue) {
  const filter = selectedValue.toLowerCase().trim(); // Normalize the filter value

  filterItems.forEach(item => {
    const category = item.dataset.category.toLowerCase().trim(); // Normalize the category value
    if (filter === "all" || filter === category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Initialize: Show all projects on page load
document.addEventListener('DOMContentLoaded', function() {
  filterFunc('all');
});


// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

if (filterBtn.length > 0) {
  filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
      let selectedValue = this.textContent.toLowerCase();
      selectValue.textContent = this.textContent;
      filterFunc(selectedValue);

      if (lastClickedBtn) {
        lastClickedBtn.classList.remove("active");
      }
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });
} else {
  console.error('Filter buttons not found.');
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
if (form && formInputs && formBtn) {
  formInputs.forEach(input => {
    input.addEventListener("input", function () {
      // check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });
} else {
  console.error('Form, form inputs, or form button not found.');
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
if (navigationLinks && pages) {
  navigationLinks.forEach((navLink) => {
    navLink.addEventListener("click", function () {
      const selectedPage = this.textContent.toLowerCase();

      // Activate the selected page and deactivate others
      pages.forEach((page) => {
        if (page.dataset.page === selectedPage) {
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }
      });

      // Activate the selected nav link and deactivate others
      navigationLinks.forEach((link) => {
        if (link === this) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      // Scroll to top
      window.scrollTo(0, 0);
    });
  });
} else {
  console.error('Navigation links or pages not found.');
}



/**
 * 新增功能：Grants and Honors 切換按鈕
 */

// Grants and Honors 切換按鈕
const timelineViewBtn = document.getElementById("timeline-view");
const themeViewBtn = document.getElementById("theme-view");
const timelineLayout = document.getElementById("timeline-layout");
const themeLayout = document.getElementById("theme-layout");

// 確認元素是否存在
if (timelineViewBtn && themeViewBtn && timelineLayout && themeLayout) {
  // 切換到 Timeline View
  timelineViewBtn.addEventListener("click", function () {
    timelineLayout.style.display = "block";
    themeLayout.style.display = "none";

    timelineViewBtn.classList.add("active");
    themeViewBtn.classList.remove("active");
  });

  // 切換到 Theme-Based View
  themeViewBtn.addEventListener("click", function () {
    timelineLayout.style.display = "none";
    themeLayout.style.display = "block";

    themeViewBtn.classList.add("active");
    timelineViewBtn.classList.remove("active");
  });
} else {
  console.error('Grants and Honors toggle buttons or layouts not found.');
}


document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('[data-filter-btn]');
  const selectBox = document.querySelector('[data-select]');
  const selectList = document.querySelector('.select-list');
  const selectItems = document.querySelectorAll('[data-select-item]');
  const projectItems = document.querySelectorAll('[data-filter-item]');
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const confirmBtn = document.getElementById('confirm-btn');
  const cancelBtn = document.getElementById('cancel-btn');
  let currentLink = '#';

  // 篩選功能
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 移除所有按鈕的 active 狀態
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // 添加當前按鈕的 active 狀態
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      projectItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 下拉選單功能
  selectBox.addEventListener('click', () => {
    selectList.classList.toggle('show');
  });

  selectItems.forEach(item => {
    item.addEventListener('click', () => {
      const filter = item.getAttribute('data-filter');
      const filterText = item.textContent;

      // 更新選擇的值
      document.querySelector('[data-select-value]').textContent = filterText;

      // 移除所有按鈕的 active 狀態
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // 添加當前選擇的按鈕的 active 狀態
      filterButtons.forEach(btn => {
        if (btn.getAttribute('data-filter') === filter) {
          btn.classList.add('active');
        }
      });

      // 篩選項目
      projectItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // 關閉下拉選單
      selectList.classList.remove('show');
    });
  });

  // 點擊專案項目顯示模態框
  projectItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const linkElement = item.querySelector('[data-project-link]');
      const title = item.querySelector('.project-title').textContent;
      const description = linkElement.getAttribute('data-description') || item.querySelector('.project-category').textContent;
      const link = linkElement.getAttribute('data-project-link') || linkElement.getAttribute('href');

      modalTitle.textContent = title;
      modalDescription.textContent = description;
      currentLink = link;

      modal.style.display = 'flex';
    });
  });

  // 確認前往
  confirmBtn.addEventListener('click', () => {
    if (currentLink && currentLink !== '#') {
      window.location.href = currentLink;
    }
    modal.style.display = 'none';
  });

  // 取消返回
  cancelBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // 點擊模態框外部關閉
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});