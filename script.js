// Function to set active class based on scroll position
function setActiveSection() {
  document.querySelectorAll('section[data-section]').forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionId = section.getAttribute('data-section');

    // Check if the section is within 180px from the top of the viewport
    if (sectionTop >= 0 && sectionTop <= 100) {
      // Remove active class from all nav links
      document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.classList.remove('active');
      });

      // Add active class to the nav link that matches the visible section
      const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}

// Initial active section setup for hero section
document.addEventListener('DOMContentLoaded', () => {
  setActiveSection(); // Initial call to set active section on page load
});

// Click event listener for smooth scroll and active class toggle
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetSectionNum = this.getAttribute('data-section'); // Target section ka number
    const targetSection = document.querySelector(`section[data-section="${targetSectionNum}"]`);

    // Smooth scroll to 180px above the target section
    if (targetSection) {
      const sectionTop = targetSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionTop - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Active link ko update karna for clicked link
    document.querySelectorAll('.nav-link').forEach(navLink => {
      navLink.classList.remove('active');
    });
    this.classList.add('active');
  });
});

// Scroll event listener to update active class based on section visibility
window.addEventListener('scroll', setActiveSection);

  

  const navLink = document.querySelector('header nav ul');
  const closeBtn = document.querySelector('.close-btn-m');
  const menuBtn = document.querySelector('.m-menu-btn');

  menuBtn.addEventListener('click', () => {
    navLink.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    navLink.classList.remove('show');
  });


  const scrollToTopBtn = document.querySelectorAll('.click-to-up-btn');
  window.onscroll = function() {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
      scrollToTopBtn.forEach(btn => {
        btn.classList.add('btn-active');
      });
    }else {
      scrollToTopBtn.forEach(btn => {
        btn.classList.remove('btn-active');
      });
    }
  }

scrollToTopBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  })
})