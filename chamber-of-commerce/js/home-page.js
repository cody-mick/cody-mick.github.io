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
const url =
  "https://api.openweathermap.org/data/2.5/onecall?lat=43.67227300668368&lon=-111.91471974451605&units=imperial&exclude=minutely,hourly&appid=7a8d08997888f7d4fa1ce88d0e56a068";

fetch(url)
  .then((response) => response.json())
  .then((forecast) => {
    // Verify the data was successfully retrieved.
    console.log(forecast);

    // Find out if the forecast data contains an alert
    // if it does, run the following, else, set warning
    // to display none
    if (forecast.hasOwnProperty(alert)) {
      console.log(forecast.alerts[0].event);
      console.log(forecast.alerts[0].start);
      console.log(forecast.alerts[0].end);
      // Converstion from timestamp into actual date.
      let startTimeStamp = forecast.alerts[0].start;
      let endTimeStamp = forecast.alerts[0].end;

      let startTimeMilli = startTimeStamp * 1000;
      let endTimeMilli = endTimeStamp * 1000;

      let startDate = new Date(startTimeMilli);
      let endDate = new Date(endTimeMilli);

      let hReadableStart = startDate.toLocaleString();
      let hReadableEnd = endDate.toLocaleString();

      let warningType = document.querySelector(".warning-type");
      warningType.textContent = forecast.alerts[0].event;
      let start = document.querySelector(".alert-start");
      let end = document.querySelector(".alert-end");
      start.textContent = hReadableStart;
      end.textContent = hReadableEnd;

      let closeAlert = document.querySelector(".close-alert");
      let weatherAlert = document.querySelector(".alert-banner");
      closeAlert.addEventListener("click", () => {
        closeAlert.style.display = "none";
        weatherAlert.style.display = "none";
      });
    } else {
      let alertBanner = document.querySelector(".alert-banner");
      alertBanner.style.display = "none";
      let alertBannerClose = document.querySelector(".close-alert");
      alertBannerClose.style.display = "none";
    }

    // Code for weather section
    let degSymbol = "\u00B0";
    let currentWeatherDiv = document.querySelector(".current-weather");

    // Getting the current weather icon.
    const iconURL =
      "https://openweathermap.org/img/wn/" +
      forecast.current.weather[0].icon +
      "@2x.png";
    let icon = document.createElement("img");
    icon.setAttribute("class", "current-icon");
    icon.setAttribute("src", iconURL);
    icon.setAttribute("alt", "Current Weather Icon");
    currentWeatherDiv.appendChild(icon);

    // Getting the current temp from OpenWeather
    let currentTemp = document.createElement("div");
    currentTemp.textContent =
      Math.round(forecast.current.temp) + degSymbol + " F";
    currentTemp.setAttribute("class", "current-temp");
    currentWeatherDiv.appendChild(currentTemp);

    // Getting the current conditions from OpenWeather
    let weatherCon = document.createElement("div");
    weatherCon.textContent = forecast.current.weather[0].description;
    weatherCon.setAttribute("class", "current-con");
    currentWeatherDiv.appendChild(weatherCon);

    // Code for the Three Day Forecast section
    let threeDayDiv = document.querySelector(".forecast-container");
    for (let i = 1; i < 4; i++) {
      // Get the names of the next three days and add them to the individual divs
      let dayWeather = document.createElement("div");
      dayWeather.setAttribute("class", "forecast-weather-day");
      let dayMilli = forecast.daily[i].dt * 1000;
      let dayDate = new Date(dayMilli);
      let dayNameDiv = document.createElement("div");
      let dayName = dayDate.toLocaleString("en-US", { weekday: "long" });
      console.log(dayName);
      dayNameDiv.textContent = dayName;

      // Getting the forecasted high and low for the next 3 days
      let dayTemp = document.createElement("div");
      dayTemp.textContent =
        "High: " +
        Math.round(forecast.daily[i].temp.max) +
        degSymbol +
        " F Low: " +
        Math.round(forecast.daily[i].temp.min) +
        degSymbol +
        " F";

      // Getting the forecasted conditions for the next 3 days
      let conditions = document.createElement("div");
      conditions.textContent = forecast.daily[i].weather[0].description;

      // Get the icon for the forecasted weather
      let iconsrc =
        "https://openweathermap.org/img/wn/" +
        forecast.daily[i].weather[0].icon +
        "@2x.png";
      let icon = document.createElement("img");
      icon.setAttribute("src", iconsrc);
      icon.setAttribute("alt", forecast.daily[i].weather[0].description);

      // Append all information to the dayWeather div
      dayWeather.appendChild(dayNameDiv);
      dayWeather.appendChild(icon);
      dayWeather.appendChild(conditions);
      dayWeather.appendChild(dayTemp);

      // Append the dayWeather div to the three-day-weather div
      threeDayDiv.appendChild(dayWeather);
    }
  });