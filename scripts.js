let nav = document.querySelector("nav");
let btn = document.querySelector(".buttn");

// button to top
window.onscroll = function () {
  if (window.scrollY >= 50) {
    nav.classList.add("scrolled");
    btn.style.display = "block";
  } else {
    nav.classList.remove("scrolled");
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// navBar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector("ul");
const links = document.querySelectorAll("ul li");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  hamburger.classList.toggle("toggle");
});

// fix the scroll to section

const moveLinks = document.querySelectorAll(".move-link");

moveLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navbar = nav.getBoundingClientRect().height;
    let position = element.offsetTop - navbar;
    window.scrollTo({
      top: position,
      left: 0,
    });
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("toggle");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });
  });
});

// counter
const counters = document.querySelectorAll(".counter");
const counterMove = document.getElementById("counter");

window.addEventListener("scroll", () => {
  if (counterMove.offsetTop) {
    counters.forEach((counter) => {
      counter.innerText = "0";
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;
        const increment = target / 500;
        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter(1);
    });
  } else {
  }
});

// count down
let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

// pre loader
const spinner = document.getElementById("spinner");
if (spinner) {
  setTimeout(() => {
    spinner.style.display = "none";
  }, 3000);
}

// animation
const animationLeft = document.querySelectorAll(".animate-left");

window.addEventListener("scroll", animateLeft);
animateLeft();
function animateLeft() {
  const trigger = (window.innerHeight / 5) * 4;
  animationLeft.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < trigger) {
      box.classList.add("show-left");
    } else {
      box.classList.remove("show-left");
    }
  });
}

const animationRight = document.querySelectorAll(".animate-right");

window.addEventListener("scroll", animateRight);
animateRight();
function animateRight() {
  const trigger = (window.innerHeight / 5) * 4;
  animationRight.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < trigger) {
      box.classList.add("show-right");
    } else {
      box.classList.remove("show-right");
    }
  });
}

// cursor
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
