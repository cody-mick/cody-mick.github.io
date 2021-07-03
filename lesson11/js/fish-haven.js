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

// Getting weather info and displaying it on the Preston page

const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7a8d08997888f7d4fa1ce88d0e56a068";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current').textContent = Math.round(jsObject.main.temp);
    document.getElementById('high').textContent = Math.round(jsObject.main.temp_max);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = Math.round(jsObject.wind.speed);
  });

  // Getting weather info for the 5 day forecast

  const fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?lat=42.03709964972492&lon=-111.39598458651903&units=imperial&appid=7a8d08997888f7d4fa1ce88d0e56a068";

  fetch(fiveDayURL)
  .then((response) => response.json())
  .then((forecast) => {
    console.log(forecast);
    // Iterate over the object list
    for (let x in forecast.list) {
      // Check if the object is the data taken at 6pm
      if (forecast.list[x].dt_txt.includes("18:00:00")) {
        // Create the parent container, "day-box"
        let dayBox = document.createElement("div");
        dayBox.setAttribute("class", "day-box");
        // Get the day of the week and append that first
        let weekDay = document.createElement('div');
        weekDay.setAttribute('class', 'week-day');
        let dayOfWeek = new Date(forecast.list[x].dt_txt);
        let dayNum = dayOfWeek.getDay();
        weekDay.textContent = weekdays[dayNum];
        dayBox.appendChild(weekDay);
        // Create a child element to get the icon for the forecasted weather
        let weatherIcon = document.createElement('img');
        const imagesrc = 'https://openweathermap.org/img/wn/' + forecast.list[x].weather[0].icon + '@2x.png';
        const desc = forecast.list[x].weather.description;
        weatherIcon.setAttribute('class', 'weather-icon');
        weatherIcon.setAttribute('src', imagesrc);
        weatherIcon.setAttribute('alt', desc);
        dayBox.appendChild(weatherIcon);
        // Create a child element to hold the temperature for the day
        let foreTemp = document.createElement("p");
        foreTemp.setAttribute("class", "fore-temp");
        foreTemp.innerHTML = Math.round(forecast.list[x].main.temp_max) + " &deg;F";
        dayBox.appendChild(foreTemp);
        // Append the "day-box" to the parent section in the HTML
        document.querySelector(".five-day-forecast").appendChild(dayBox);
      }
    }
  });

  const eventURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(eventURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length; i++) {
      if (i == 2) {
        let fishEvent = document.createElement("p");
        let secondFishEvent = document.createElement("p");
        let thirdFishEvent = document.createElement("p");
        let fourthFishEvent = document.createElement("p");

        fishEvent.textContent = towns[i].events[0];
        secondFishEvent.textContent = towns[i].events[1];
        thirdFishEvent.textContent = towns[i].events[2];
        fourthFishEvent.textContent = towns[i].events[3];

        let fishEventsBox = document.querySelector(".fish-events");

        fishEventsBox.appendChild(fishEvent);
        fishEventsBox.appendChild(secondFishEvent);
        fishEventsBox.appendChild(thirdFishEvent);
        fishEventsBox.appendChild(fourthFishEvent)
      }
    }
  });