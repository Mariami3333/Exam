document.addEventListener("DOMContentLoaded", () => {
  const handleClose = () => {
    const closeButton = document.getElementById("closeButton");

    const topBanner = document.getElementById("topBanner");

    closeButton.addEventListener(
      "click",
      () => (topBanner.style.display = "none")
    );
  };

  handleClose();

  const productsContainer = document.querySelector(".products");

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=8");
      const products = await response.json();

      productsContainer.innerHTML = "";

      products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
          <img src="${product.image}" alt="${
          product.title
        }" class="product_img" />
          <h4 class="product_title">${product.title}</h4>
          <div class="product_ratings">
            ${getStars(product.rating.rate)}
          </div>
          <h3 class="product_price">$${product.price}</h3>
        `;

        productsContainer.appendChild(productElement);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      productsContainer.innerHTML = "<p>Failed to load products.</p>";
    }
  };

  const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    let starsHtml = "";

    for (let i = 0; i < fullStars; i++) {
      starsHtml += `<img src="./images/stars/full.png" alt="full star" class="star_full" />`;
    }

    if (halfStar) {
      starsHtml += `<img src="./images/stars/half.png" alt="half star" class="star_half" />`;
    }

    return starsHtml;
  };

  fetchProducts();

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: false,
    allowTouchMove: false, 
    noSwiping: true, 
    preventClicks: true, 
    simulateTouch: false, 
    pagination: {
      el: ".swiper-pagination",
      clickable: false, 
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    mousewheel: false,
    keyboard: false,
  });
  
  // Add event listeners for arrow navigation
  document.querySelector('.left-arrow').addEventListener('click', () => {
    swiper.slidePrev();
  });
  
  document.querySelector('.right-arrow').addEventListener('click', () => {
    swiper.slideNext();
  });
});
