let temperature = document.querySelector("#high").innerHTML;
let windSpeed = document.querySelector("#windspeed").innerHTML;

console.log(temperature);
console.log(windSpeed);

if (temperature <= 50 && windSpeed > 3) {
  let chill = windChill(parseInt(temperature), parseInt(windSpeed));
  document.querySelector("#windchill").innerHTML = chill + "°F";
} else {
  document.querySelector("#windchill").innerHTML = "N/A";
}

function windChill(temperature, windSpeed) {
  let windChill =
    Math.round(35.74 +
    (0.6215 * temperature) -
    (35.75 * Math.pow(windSpeed, 0.16)) +
    (0.4275 * temperature * Math.pow(windSpeed, 0.16)));
  return windChill;
}