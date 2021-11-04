let canvas = document.getElementById("myCanvas");
let context = canvas.getContext('2d');

context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";

context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

function drawPattern() {
    let anotherCanvas = document.getElementById("anotherCanvas");
    let anotherContext = anotherCanvas.getContext("2d");
    anotherContext.strokeStyle = "red";
    let img = new Image();
    img.src = "rocket.png";
    img.onload = function() {
        let pattern = anotherContext.createPattern(img, "repeat");
        anotherContext.fillStyle = pattern;
        anotherContext.fillRect(0, 0, 256, 256);
    };
}

drawPattern();