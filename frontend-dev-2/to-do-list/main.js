let myList = document.getElementsByTagName("li");
let i;
for (i = 0; i < myList.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.class = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}

let close = document.querySelector(".close");
let i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'li') {
        ev.target.classList.toggle("checked");
    }
}, false);

function newTask() {
    let li = document.createElement('li');
    let inputValue = document.getElementById("task").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("to-do-list").appendChild(li);
    }
    document.getElementById("task").value = "";

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}