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
