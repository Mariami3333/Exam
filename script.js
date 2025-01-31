document.addEventListener("DOMContentLoaded", function () {
  // Hide banner functionality
  document.querySelector('.top-banner img').addEventListener('click', function () {
      document.querySelector('.top-banner').style.display = 'none';
  });

  // Newsletter form functionality
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

  // Search filter functionality
  document.getElementById("search-input").addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      const products = document.querySelectorAll(".product-card");

      products.forEach((product) => {
          const productName = product.querySelector(".product-name").textContent.toLowerCase();
          if (productName.includes(searchTerm)) {
              product.style.display = "block";
          } else {
              product.style.display = "none";
          }
      });
  });
});






