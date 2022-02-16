const menu = document.querySelector("#mobile-menu");
const menuOptions = document.querySelector("#options");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuOptions.classList.toggle("active");
  document.body.classList.toggle("active");
});

//animation
gsap.registerPlugin(ScrollTrigger);
gsap.from(".animation-s1", {
  duration: 1.5,
  opacity: 0,
  y: -150,
  stagger: 0.3,
});
gsap.from(".animation-s2", {
  ScrollTrigger: ".animation-s2",
  duration: 1,
  opacity: 1,
  x: -150,
  stagger: 0.12,
});
gsap.from(".animate-s2-img", {
  ScrollTrigger: ".animate-s2-img",
  duration: 1,
  opacity: 1,
  x: -200,
  stagger: 0.12,
});
gsap.from(".animation-cards", {
  ScrollTrigger: ".animation-cards",
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.5,
});
gsap.from(".animation-card", {
  ScrollTrigger: ".animation-card",
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.5,
});
gsap.from(".animation-room", {
  ScrollTrigger: ".animation-room",
  duration: 1,
  opacity: 0,
  x: -150,
  stagger: 0.3,
  delay: 0.2,
});
gsap.from(".animation-email", {
  ScrollTrigger: ".animation-email",
  duration: 0.8,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.2,
});
