
document.querySelector('.top-banner img').addEventListener('click', function () {
    document.querySelector('.top-banner').style.display = 'none';
  });
  

  // script.js
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
  
    if (validateEmail(email)) {
      alert('Thank you for subscribing!');
    } else {
      alert('Please enter a valid email address.');
    }
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }