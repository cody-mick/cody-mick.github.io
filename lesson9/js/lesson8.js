let date = new Date();

let year = date.getFullYear(); /* Snippet from W3 Schools */
document.querySelector("#year").textContent = year;

let day = date.getDay();
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let month = date.getMonth();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let number = date.getDate();

let todaysDate =
  weekdays[day] + ", " + number + " " + months[month] + " " + year;

document.querySelector("#currentdate").textContent = todaysDate;

/* Code from the CodePen in the W04 Activities. Subject to change. */
const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

let banner = document.querySelector("#banner");
document.addEventListener("DOMContentLoaded", () => {
  if (date.getDay() == 5) banner.style.display = "block"
});

// let bannerDate = new Date();
// if (bannerDate.getDay == 6) {
//   document.querySelector("#banner").style.display = "block";
// }
// else {
//   document.querySelector("#banner").style.display = "none";
// }

let imagesToLoad = document.querySelectorAll("img[data-src]");
console.log(imagesToLoad);

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 50px 0px",
};

const loadImages = (Image) => {
  Image.setAttribute("src", Image.getAttribute("data-src"));
  Image.onload = () => {
    Image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        imgObserver.unobserve(item.target);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

// For finding the amount of days inbetween the last visit to the site.
// Also display the amount in the footer of the gallery page.
let a = new Date();
let b = new Date();
localStorage.a = a;
localStorage.b = b;
a = Date.parse(localStorage.a);
b = Date.parse(localStorage.b);
let daysSinceLastVisit = b - a;
console.log(daysSinceLastVisit);

document.querySelector('#days').textContent = daysSinceLastVisit

function adjustRating(rating) {
  document.getElementById("severity-value").innerHTML = rating;
}