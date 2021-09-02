// For displaying date in the footer
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

// Nav menu
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

// For the "Preston Pancakes in the Park" banner
let banner = document.querySelector("#banner");
document.addEventListener("DOMContentLoaded", () => {
  if (date.getDay() == 5) banner.style.display = "block"
});

// Lazy loading for the gallery
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
let storedDate = new Date(localStorage.getItem('storedDate'));
console.log(storedDate);
const oneDay = 1000 * 60 * 60 * 24;

let diffInTime = date.getTime() - storedDate.getTime();

let diffInDays = Math.round(diffInTime / oneDay);

if ('storedDate' in localStorage) {
    document.querySelector('#days').innerHTML = diffInDays + ' days ago.';
} else {
    document.querySelector('#days').innerHTML = 'This is your first visit!'
}

storeDate()

function storeDate() {
    localStorage.setItem('storedDate', date);
}