gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
const section1Tl = gsap.timeline();

section1Tl
  .from(".content span:first-child", { x: "-100vw", duration: 1 })
  .from(".content span:last-child", { x: "100vw", duration: 1 }, "<")
  .from(".content p", {
    transformOrigin: "top left",
    rotate: 90,
    duration: 1,
    opacity: 0,
  })
  .from(".content img", { y: "100vh" });

const section2Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top 20%",
    toggleActions: "play none reverse reverse",
  },
});

section2Tl
  .from(".section2 span:first-child", { y: "-100vh" })
  .from(".section2 span:last-child", { y: "-100vh" })
  .from(".section2 p", { rotateY: 180, opacity: 0, duration: 1 });

const horizontalSections = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal-sections",
    scrub: true,
    pin: true,
    start: "top top",
  },
});

horizontalSections.to(".horizontal-sections", { xPercent: "-50" });

const section3Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "top 20%",
    toggleActions: "play none reverse reverse",
  },
});

section3Tl
  .from(".section3 h2", { scale: 3, x: "-100vh" })
  .from(".section3 span", { y: "100vh", stagger: 0.5 });

const section4Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section4",
    containerAnimation: horizontalSections,
    start: "left center",
    toggleActions: "play none reverse reverse",
  },
});

section4Tl.from(".section4 .portfolio-item", { x: "100vw", stagger: 0.3 });

const selector = document.querySelector(".section5 h2");
const letters = selector.textContent.split("");

selector.innerHTML = "";
letters.forEach((el) => {
  const span = document.createElement("span");
  span.innerHTML = el;
  span.style.minWidth = "1.5rem";
  selector.appendChild(span);
});

const section5Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    pin: true,
    scrub: true,
  },
});

section5Tl
  .from(".section5 span", { y: "-100vh", stagger: 0.3 })
  .from(".section5 p", { y: "100%", opacity: 0 })
  .from(".contact-btn", { scale: 1, opacity: 0 })
  .from(".section5", { backgroundPositionX: "100vw" })
  .to(".section5", { backgroundColor: "black", duration: 3 });
