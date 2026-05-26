const root = document.documentElement;
const navLinks = document.getElementById("navLinks");
const menuToggle = document.getElementById("menuToggle");
const themeToggle = document.getElementById("themeToggle");

const storedTheme = localStorage.getItem("nicolab-theme");
if (storedTheme) root.dataset.theme = storedTheme;

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("nicolab-theme", nextTheme);
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  document.body.classList.toggle("nav-open", navLinks.classList.contains("open"));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    document.body.classList.remove("nav-open");
  });
});

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => item.classList.toggle("active", item === button));
    document.querySelectorAll(".service").forEach((service) => {
      service.classList.toggle("is-hidden", filter !== "all" && service.dataset.type !== filter);
    });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
