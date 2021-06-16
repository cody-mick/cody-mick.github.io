const requestURL =
"https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    console.table(jsonObject);
    console.log(towns[0].name);
  });