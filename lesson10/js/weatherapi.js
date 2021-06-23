const apiURL =
  "api.openweathermap.org/data/2.5/weather?id=5604473&appid=7a8d08997888f7d4fa1ce88d0e56a068";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
