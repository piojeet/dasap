document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetSectionNum = this.getAttribute('data-section'); // Target section ka number
      const targetSection = document.querySelector(`section[data-section="${targetSectionNum}"]`);
  
      // Smooth scroll
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
  
      // Active link ko update karna
      document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
  

  const navLink = document.querySelector('header nav ul');
  const closeBtn = document.querySelector('.close-btn-m');
  const menuBtn = document.querySelector('.m-menu-btn');

  menuBtn.addEventListener('click', () => {
    navLink.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    navLink.classList.remove('show');
  });