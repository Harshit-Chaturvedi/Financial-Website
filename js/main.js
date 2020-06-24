// Smooth Scrolling
$('#nav-bar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });

  // Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#nav-bar').style.opacity = 0.7;
    } else {
      document.querySelector('#nav-bar').style.opacity = 1;
    }
  });