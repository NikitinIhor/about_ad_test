export function animation() {
  const animatedElements = document.querySelectorAll(".animation");
  const animatedElementsFromLeftSide =
    document.querySelectorAll(".animation-left");
  const animatedElementsFromRightSide =
    document.querySelectorAll(".animation-right");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  animatedElements.forEach((el) => observer.observe(el));
  animatedElementsFromLeftSide.forEach((el) => observer.observe(el));
  animatedElementsFromRightSide.forEach((el) => observer.observe(el));
}
