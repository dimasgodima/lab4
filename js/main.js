const handleDomContentLoaded = function () {
  const body = document.body;
  const header = document.querySelector('header');
  const burgerBtn = document.querySelector('header .nav-btn');
  const overlay = document.querySelector('.header .overlay');
  function handleBurgerClick() {
    if (header.classList.contains('is-active')) {
      closeNavigation();
    } else {
      openNavigation();
    }
  }
  function closeNavigation() {
    body.classList.remove('disable-scroll');
    header.classList.remove('is-active');
  }
  function openNavigation() {
    body.classList.add('disable-scroll');
    header.classList.add('is-active');
  }
  burgerBtn.addEventListener('click', handleBurgerClick);
  overlay.addEventListener('click', closeNavigation);
}
document.addEventListener('DOMContentLoaded', handleDomContentLoaded); 



document.addEventListener('DOMContentLoaded', function() {
  const viewToggle = document.querySelector('.js-view-toggle');
  const projectsSection = document.querySelector('.projects-section');
  
  if (viewToggle && projectsSection) {
    viewToggle.addEventListener('click', function() {
      if (projectsSection.classList.contains('grid-view')) {
        projectsSection.classList.remove('grid-view');
        projectsSection.classList.add('list-view');
      } else {
        projectsSection.classList.remove('list-view');
        projectsSection.classList.add('grid-view');
      }
    });
  }
});