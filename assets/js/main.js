document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      if (mainNav.classList.contains('active')) {
        mainNav.style.height = '0';
        setTimeout(() => {
          mainNav.classList.remove('active');
        }, 300);
      } else {
        mainNav.classList.add('active');
        const navHeight = mainNav.scrollHeight;
        mainNav.style.height = navHeight + 'px';
      }
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (mainNav.classList.contains('active') && 
        !mainNav.contains(event.target) && 
        event.target !== menuToggle) {
      mainNav.style.height = '0';
      setTimeout(() => {
        mainNav.classList.remove('active');
      }, 300);
    }
  });
});