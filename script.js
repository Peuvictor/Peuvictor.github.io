document.addEventListener("DOMContentLoaded", function() {
  // Smooth Scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Pequeno offset para o menu não tapar o título
          behavior: 'smooth'
        });
      }
    });
  });

  // Highlight do menu ao rolar a página
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header .nav-link');

  function updateActiveLink() {
    let current = '';
    const offsetThreshold = 100; // Define o ponto onde a seção muda

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - offsetThreshold) && pageYOffset < (sectionTop + sectionHeight - offsetThreshold)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('btn-light', 'text-dark');
      link.classList.add('btn-outline-light');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('btn-light', 'text-dark');
        link.classList.remove('btn-outline-light');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink(); // Executa uma vez ao carregar para definir a seção inicial
});
