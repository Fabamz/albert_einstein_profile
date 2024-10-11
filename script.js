document.addEventListener("DOMContentLoaded", function () {
 
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); 
      const targetId = this.getAttribute('href'); 
      const targetSection = document.querySelector(targetId); 

      
      window.scrollTo({
        top: targetSection.offsetTop - 50, 
        behavior: "smooth" 
      });
    });
  });

  const backToTopButton = document.createElement('button');
  backToTopButton.innerText = "↑ Top";
  backToTopButton.id = 'back-to-top';
  backToTopButton.style.position = 'fixed';
  backToTopButton.style.bottom = '30px';
  backToTopButton.style.right = '30px';
  backToTopButton.style.padding = '10px 15px';
  backToTopButton.style.backgroundColor = '#1f3a93'; 
  backToTopButton.style.color = 'white';
  backToTopButton.style.border = 'none';
  backToTopButton.style.borderRadius = '5px';
  backToTopButton.style.cursor = 'pointer';
  backToTopButton.style.display = 'none'; 
  document.body.appendChild(backToTopButton);

  
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) { 
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  
  backToTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  });

 
  const sections = document.querySelectorAll('section'); 
  const options = {
    threshold: 0.6 
  };


  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navItem = document.querySelector(`nav a[href="#${id}"]`);

      if (entry.isIntersecting) {
        navItem.classList.add('active'); 
      } else {
        navItem.classList.remove('active'); 
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section); 
  });
});
