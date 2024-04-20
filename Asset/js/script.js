const typed = new Typed(".moveLetter", {
  strings: ["Designer", "Developer","Freelancer","Photographer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

const counter = document.querySelector(".counter");
const data = document.querySelectorAll(".datacounter");
const obserObj = {
  root: null,
  threshold: 0,
  rootMargin: "-200px",
};
const obserFun = function (entrys, observe) {
  const [entry] = entrys;
  //console.log(entry);
  if (!entry.isIntersecting) return;
  data.forEach((el) => {
    const time = setInterval(() => {
      if (Number(el.innerText) < el.dataset.counter) {
        el.innerText = Number(el.innerText) + 1;
      } else {
        clearInterval(time);
      }
    }, 20);
  });
};
const sectionObserved = new IntersectionObserver(obserFun, obserObj);

sectionObserved.observe(counter);
