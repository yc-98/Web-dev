var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 250, 250)",
    "rgb(255, 0, 250)",
    "rgb(0, 0, 250)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor
for(var i=0;i<squares.length;i++)
{
    squares[i].style.background = colors[i];
    
}