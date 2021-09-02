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

// For showing the value on the severity slider in the storm report form.
function adjustRating(rating) {
  document.getElementById("severity-value").innerHTML = rating;
}