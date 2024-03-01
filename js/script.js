// Set current year
const currentYearEl = document.querySelector(".current-year");
const currentYear = new Date().getFullYear();
currentYearEl.textContent = currentYear;

// Mobile navigation
const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn--mobile-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Others
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.remove("nav-open");
  });
});

// Fixed/Sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.body.classList.add("fixed");
    }

    if (entry.isIntersecting) document.body.classList.remove("fixed");
  },
  {
    root: null, // in the viewport
    threshold: 0, // ? ratio of the sectionHeroEl inside of the viewport (0-1)
    rootMargin: "-80px", // add .fixed 80px before intersection
  }
);
obs.observe(sectionHeroEl);
