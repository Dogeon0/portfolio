const swup = new Swup({
  plugins: [
    new SwupSlideTheme()
  ]
});


function initResponsiveFooter() {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const applyFooterPosition = () => {
      if (window.innerHeight > 700) {
        footer.classList.add('position-fixed', 'bottom-0', 'start-0', 'w-100');
        footer.classList.remove('position-static');
      } else {
        footer.classList.remove('position-fixed', 'bottom-0', 'start-0', 'w-100');
        footer.classList.add('position-static');
      }
    };

    applyFooterPosition();
    window.addEventListener('resize', applyFooterPosition);
  }

  document.addEventListener('DOMContentLoaded', initResponsiveFooter);