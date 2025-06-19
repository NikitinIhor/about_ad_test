export const modal = () => {
  const dots = document.querySelectorAll(".image-dots > div");
  const modal = document.querySelector(".image-modal");

  const dot1 = document.querySelector(".dot-1");
  if (dot1 && modal) {
    positionModal(dot1);
    showModal();
  }

  dots.forEach((dot) => {
    dot.addEventListener("mouseenter", () => {
      hideModal();
      setTimeout(() => {
        positionModal(dot);
        showModal();
      }, 150);
    });
  });

  function positionModal(dot) {
    const top = dot.offsetTop + dot.offsetHeight + 38;

    const modalWidth = modal.offsetWidth;
    const dotWidth = dot.offsetWidth;

    const left = dot.offsetLeft + dotWidth / 2 - modalWidth / 2;

    modal.style.top = `${top}px`;
    modal.style.left = `${left}px`;
  }

  function showModal() {
    modal.style.display = "block";
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
    modal.style.transition = "opacity 0.3s ease";
  }

  function hideModal() {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
  }
};
