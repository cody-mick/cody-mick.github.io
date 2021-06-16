const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const prophets = jsonObject["prophets"];
    console.table(jsonObject);
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement("section");
      card.setAttribute("class", "card");
      let h2 = document.createElement("h2");

      h2.textContent = prophets[i].name + " " + prophets[i].lastname;

      card.appendChild(h2);

      let birthDate = document.createElement("p");
      birthDate.textContent = "Date of Birth: " + prophets[i].birthdate;

      let birthPlace = document.createElement("p");
      birthPlace.textContent = "Place of Birth: " + prophets[i].birthplace;

      let portrait = document.createElement("img");
      portrait.setAttribute("src", prophets[i].imageurl);
      portrait.setAttribute(
        "alt",
        `${prophets[i].name} ${prophets[i].lastname} - ${i + 1}`
      );

      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      card.appendChild(portrait);

      document.querySelector("div.cards").appendChild(card);
    }
  });
