document.querySelector("#lastmodified").textContent =
  document.lastModified; /* Used the code from the demonstration by Brother Blazzard */

let year = new Date().getFullYear(); /* Snippet from W3 Schools */
document.querySelector("#year").textContent = year;

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
