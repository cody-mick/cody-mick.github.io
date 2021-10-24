const links = [
    {
        label: "Week 1",
        url: "week1/index.html"
    },
    {
        label: "Week 2",
        url: "week2/index.html"
    },
    {
        label: "Week 3",
        url: "week3/index.html"
    },
    {
        label: "Week 4",
        url: "week4/index.html"
    },
    {
        label: "Week 5",
        url: "week5/index.html"
    },
    {
        label: "To Do List",
        url: "to-do-list/index.html"
    }
]

let contents = document.querySelector('.contents');

for (let i = 0; i < links.length; i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', links[i].url);
    a.innerHTML = links[i].label;
    li.appendChild(a);
    contents.appendChild(li);
}