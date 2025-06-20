export const modal = () => {
  const dots = document.querySelectorAll(".image-dots > div");
  const modal = document.querySelector(".image-modal");
  const modalTitle = modal?.querySelector("h3");
  const modalText = modal?.querySelector("p");

  const dot1 = document.querySelector(".dot-1");
  if (dot1 && modal) {
    updateModalContent(dot1);
    positionModal(dot1);
    showModal();
  }

  dots.forEach((dot) => {
    const events = ["mouseenter", "focus", "click"];
    events.forEach((event) => {
      dot.addEventListener(event, () => {
        hideModal();
        setTimeout(() => {
          updateModalContent(dot);
          positionModal(dot);
          showModal();
        }, 150);
      });
    });
  });

  function updateModalContent(dot) {
    const title = dot.getAttribute("data-title") || "";
    const text = dot.getAttribute("data-text") || "";

    if (modalTitle) modalTitle.textContent = title;
    if (modalText) modalText.textContent = text;
  }

  function positionModal(dot) {
    const top = dot.offsetTop + dot.offsetHeight + 38;

    const modalWidth = modal.offsetWidth;
    const dotWidth = dot.offsetWidth;

    let left = dot.offsetLeft + dotWidth / 2 - modalWidth / 2;

    const viewportWidth = window.innerWidth;

    if (left < 0) {
      left = 8;
    }

    if (left + modalWidth > viewportWidth) {
      left = viewportWidth - modalWidth - 8;
    }

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
