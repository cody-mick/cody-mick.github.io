const list = document.querySelector("ul.list");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    let item = input.value;
    input.value = "";
  
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const deletebutton = document.createElement("button");
  
    listItem.appendChild(listText);
    listText.textContent = item;
    listItem.appendChild(deletebutton);
    deletebutton.textContent = "❌";
    list.appendChild(listItem);
  
    deletebutton.onclick = function (e) {
        list.removeChild(listItem);
    }
  
    input.focus();
})