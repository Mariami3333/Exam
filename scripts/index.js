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
});
