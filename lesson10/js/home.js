const requestURL =
"https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length; i++) {
        if (i == 0 || i == 2 || i == 6) {
            let town = document.createElement('section');
            let townDiv = document.createElement('div');
            townDiv.setAttribute("class", "town-summary");
            let h2 = document.createElement("h2");
            let motto = document.createElement('div');
            let yearFounded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let townImage = document.createElement('img');
            
            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Population: ' + towns[i].currentPopulation;
            rainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;

            if (i == 0) {
              townImage.setAttribute('src', 'images/soda_springs.jpg')
              townImage.setAttribute('alt', 'Image of ' + towns[i].name)
              town.setAttribute('id', 'soda-card')
            } 
            if (i == 2) {
              townImage.setAttribute('src', 'images/fish_haven.jpg')
              townImage.setAttribute('alt', 'Image of ' + towns[i].name)
              town.setAttribute('id', 'fish-card')
            }
            if (i == 6) {
              townImage.setAttribute('src', 'images/preston_tractor.jpg')
              townImage.setAttribute('alt', 'Image of ' + towns[i].name)
              town.setAttribute('id', 'preston-card')
            }
            townDiv.appendChild(h2);
            townDiv.appendChild(motto);
            townDiv.appendChild(yearFounded);
            townDiv.appendChild(population);
            townDiv.appendChild(rainfall);
            town.appendChild(townDiv);
            town.appendChild(townImage);        
        
        document.querySelector('div.home-cards').appendChild(town);
        }
    }
  });