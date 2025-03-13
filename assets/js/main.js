document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    // Gérer le clic sur le menu burger
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      mainNav.classList.toggle('active');
    });
    
    // Fermer le menu si on clique ailleurs
    document.addEventListener('click', function(e) {
      if (mainNav.classList.contains('active') && 
          !mainNav.contains(e.target) && 
          e.target !== menuToggle) {
        mainNav.classList.remove('active');
      }
    });
    
    // Empêcher que les clics à l'intérieur du menu ne le ferment
    mainNav.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
});