document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-10");

              const circle = entry.target.querySelector(".timeline-circle");
              circle.classList.add("scale-100");
              circle.classList.remove("scale-50");
          }
      });
  }, { threshold: 0.2 });

  timelineItems.forEach(item => observer.observe(item));
});
