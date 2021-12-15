// DOM Objects
const pokeName = document.querySelector(".poke-name");
const pokeId = document.querySelector(".poke-id");
const sprite = document.querySelector(".poke-img");
const typeOne = document.querySelector(".type-one");
const typeTwo = document.querySelector(".type-two");
const pokeWeight = document.querySelector(".poke-weight");
const pokeHeight = document.querySelector(".poke-height");
const pokeDesc = document.querySelector(".pokedex-entry");
const dex = document.querySelector(".dex");
const dexEntries = document.querySelectorAll(".poke-entry");
const teamDisplay = document.querySelector(".team");
const teamImages = document.querySelectorAll(".team-image");

const typings = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
];

const team = [];

// Removing the type classes from the typing box on loading in a new pokemon.
const removeTypes = () => {
  for (const type of typings) {
    typeOne.classList.remove(type);
    typeTwo.classList.remove(type);
  }
};

// Helper function for capitalizing strings
const capitalize = (str) => str[0].toUpperCase() + str.substr(1);
const fetchFlavor = (id) => {
  //   Getting the flavor text for the description box
  fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      // The data does not have consistent indexes for the english flavor text.
      // This logic solves that issue.
      if (id == 40) {
        pokeDesc.textContent = data["flavor_text_entries"][2]["flavor_text"];
      } else if (id > 649 && id < 722) {
        pokeDesc.textContent = data["flavor_text_entries"][6]["flavor_text"];
      } else if (id >= 722) {
        pokeDesc.textContent = data["flavor_text_entries"][7]["flavor_text"];
      } else {
        pokeDesc.textContent = data["flavor_text_entries"][1]["flavor_text"];
      }
    });
};

// Fetching basic information about the pokemon with the specified ID
const fetchPokeInfo = (id) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => {
      let types = data["types"];
      let firstType = types[0];
      let secondType = types[1];
      removeTypes();
      typeOne.textContent = capitalize(firstType["type"]["name"]);
      typeOne.classList.add(firstType["type"]["name"]);
      // All pokemon have at least one type, but not all have two types.
      // The following logic helps with displaying the correct types.
      if (secondType) {
        typeTwo.classList.remove("hidden");
        typeTwo.classList.add(secondType["type"]["name"]);
        typeTwo.textContent = capitalize(secondType["type"]["name"]);
      } else {
        typeTwo.classList.add("hidden");
        typeTwo.textContent = "";
      }

      // Create the main entry section.
      pokeName.textContent = capitalize(data["name"]);
      pokeId.textContent = "#" + data["id"].toString().padStart(3, "0");
      pokeWeight.textContent =
        "Weight: " + Math.round(data["weight"] / 4.536) + " lbs";
      pokeHeight.textContent =
        "Height: " + Math.round(data["height"] / 3.048) + " ft";
      if (id !== 718) {
        sprite.src = data["sprites"]["other"]["home"]["front_default"];
      } else {
        sprite.src =
          data["sprites"]["other"]["official-artwork"]["front_default"];
      }

      fetchFlavor(id);
    });
};

// This function reads the number and splits out the index of the new pokemon to be
// fetched for the main display.
const pokeClicked = (e) => {
  let listItem = e.target;
  if (!listItem.textContent) return;

  let num = listItem.textContent.split("#");
  let id = parseInt(num[1].split(" - ")[0]);
  fetchPokeInfo(id);
};

// This function iterates over the full list of Pokemon from the API call,
// and create the scrolling selection menu on the right side.
const structureDexList = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=898")
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 899; i++) {
        let pokeItem = document.createElement("div");
        let pokeListing = document.createElement("div");
        let addButton = document.createElement("button");
        addButton.classList.add("add-button");
        pokeItem.classList.add("poke-item");
        pokeListing.classList.add("poke-entry");
        pokeListing.textContent =
          "#" +
          (i + 1).toString().padStart(3, "0") +
          " - " +
          capitalize(data["results"][i]["name"]);
        addButton.textContent = "Add";
        addButton.addEventListener("click", assignTeamSlot);
        pokeListing.addEventListener("click", pokeClicked);
        pokeItem.appendChild(pokeListing);
        pokeItem.appendChild(addButton);
        dex.appendChild(pokeItem);
      }
    });
};

// Function for the "Add" button to add the ID of the pokemon selected to the team array.
const assignTeamSlot = (e) => {
  let pokeButton = e.target["previousSibling"];
  let num = pokeButton.textContent.split("#");
  let id = parseInt(num[1].split(" - ")[0]);
  if (team.length <= 5) {
    team.push(id);
  } else {
    alert("A team can only be made up of 6 Pokemon!");
  }
  renderTeam();
};

// Renders the team images in the boxes on the top of the screen.
const renderTeam = () => {
  for (const id in team) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${team[id]}`)
      .then((res) => res.json())
      .then((data) => {
        let teamMember = document.querySelector(`.member${id}`);
        let teamSprite = teamMember.childNodes[0];
        teamSprite.setAttribute("src", data["sprites"]["front_default"]);
      });
  }
};

// Clears the team array, and sets the team images sources to "".
function clearTeam() {
  for (let i = 0; i < 6; i++) {
    teamImages[i].setAttribute("src", "");
    team.pop();
  }
}

// Initialize the dex with Bulbasaur (#1), and create the dex list on the right.
fetchPokeInfo(001);
structureDexList();