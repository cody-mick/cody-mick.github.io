const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Do you know what an email address is?");
  } else {
    email.setCustomValidity("");
  }
});

// using fetch to get an image of a mudkip.

url = 'https://pokeapi.co/api/v2/pokemon/mudkip'

function displayMudkip(url) {
    let container = document.querySelector(".poke-image");
    let img = document.createElement("img");
    
    fetch(url)
        .then(response => response.json())
        .then(data => img.setAttribute('src', `${data.sprites.other.home.front_default}`))

    img.setAttribute('src', '#')
    container.appendChild(img);
}

displayMudkip(url);