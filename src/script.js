const header = document.querySelector('header');
let isMobile = window.innerWidth < 768;
let isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

window.addEventListener('resize', () => {
  isMobile = window.innerWidth < 768;
  isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  handleScroll();
});

function handleScroll() {
  if (window.scrollY > 100) {
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.width = '100%';
    header.style.zIndex = '1000';
    header.style.background = 'rgba(34, 34, 34, .8)';
    header.style.boxShadow = '0 2px 10px rgb(24, 24, 24)';
    
    if (isMobile) {
      // Стили для мобильных
      header.style.padding = '15px';
      header.style.left = '0';
      header.style.justifyContent = 'space-between';
      header.style.height = 'auto';
    } else if (isTablet) {
      // Стили для планшетов
      header.style.padding = '15px 30px';
      header.style.left = '0';
      header.style.justifyContent = 'space-between';
      header.style.height = 'auto';
    } else {
      // Стили для десктопов
      header.style.justifyContent = 'center';
      header.style.left = '0';
      header.style.paddingLeft = '100px';
      header.style.paddingRight = '100px';
      header.style.height = '58px';
    }
  } else {
    header.style.position = 'relative';
    header.style.zIndex = '1';
    header.style.background = '';
    header.style.boxShadow = '';
    
    if (isMobile) {
      header.style.width = '100%';
      header.style.padding = '15px';
      header.style.left = '0';
      header.style.top = '0';
      header.style.height = 'auto';
    } else if (isTablet) {
      header.style.width = '100%';
      header.style.padding = '15px 30px';
      header.style.left = '0';
      header.style.top = '0';
      header.style.height = 'auto';
    } else {
      header.style.width = '783px';
      header.style.paddingLeft = '0';
      header.style.paddingRight = '0';
      header.style.left = '100px';
      header.style.top = '30px';
      header.style.height = '58px';
    }
  }
}

window.addEventListener('load', () => {
  isMobile = window.innerWidth < 768;
  isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  handleScroll();
});

window.addEventListener('scroll', handleScroll);
