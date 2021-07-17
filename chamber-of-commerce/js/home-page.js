// Tutorial from Dev Ed on YouTube
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// Last modified in the footer
document.querySelector(".last-modified").textContent =
  document.lastModified; /* Used the code from the demonstration by Brother Blazzard */

let year = new Date().getFullYear(); /* Snippet from W3 Schools */
document.querySelector(".year").textContent = year;

// Weather Information
const url = "https://api.openweathermap.org/data/2.5/onecall?lat=43.67227300668368&lon=-111.91471974451605&units=imperial&exclude=minutely,hourly&appid=7a8d08997888f7d4fa1ce88d0e56a068"

fetch(url)
  .then((response) => response.json())
  .then((forecast) => {
    // Verify the data was successfully retrieved.
    console.log(forecast);
    
    console.log(forecast.alerts[0].event);
    console.log(forecast.alerts[0].start);
    console.log(forecast.alerts[0].end);

    let warningType = document.querySelector(".warning-type");
    warningType.textContent = forecast.alerts[0].event;
    let start = document.querySelector('.alert-start');
    let end = document.querySelector('.alert-end');
    start.textContent = new Date(forecast.alerts[0].start).getFullYear();
    end.textContent = new Date(forecast.alerts[0].end).getFullYear();
  });

  let closeAlert = document.querySelector('.close-alert');
  let weatherAlert = document.querySelector('.alert-banner');
  closeAlert.addEventListener('click', () => {
    closeAlert.style.display = "none";
    weatherAlert.style.display = "none";
  })