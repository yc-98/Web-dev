var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll('.mode');
init();
function init()
{
    setUpModeButton();
    setUpSquareButton();
    reset();
}
function setUpModeButton()
{
    //mode buttons
    for(var i=0;i<modeButtons.length;i++)
    {
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent==="Easy")
                numSquares=3;
            else
                numSquares=6;
            reset();
        });
    }
}
function setUpSquareButton()
{
    //for squares
    for(var i = 0; i < squares.length; i++){

        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.background;
            if(clickedColor === pickedColor) {
                changeColor(pickedColor);
                messageDisplay.textContent="Correct";
                h1.style.background=pickedColor;
                resetButton.textContent="Play Again?"
            } else {
                this.style.background="#232323";
                messageDisplay.textContent="Try Again";
            }
        });
    }
}
function reset()
{
    //need to generate all new colors
    colors=generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor =pickColor();
    colorDisplay.textContent=pickedColor;
    // change colors of square
    for(var i = 0; i < squares.length; i++){
        if(colors[i])
        {
            squares[i].style.background=colors[i];
            squares[i].style.display="block";
        }
        else{
            squares[i].style.display="none";
        }
    }
    resetButton.textContent="New Colors";
    h1.style.background = "steelblue";
    messageDisplay.textContent="";
}

resetButton.addEventListener("click",function(){
    reset();
}
)



function generateRandomColors(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }
    return arr;
 
}
function randomColor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";

}
function pickColor()
{
    var index=Math.floor(Math.random() * colors.length);
    return colors[index];
}
function changeColor(color)
{
    for(var i=0;i<colors.length;i++)
    {
        squares[i].style.background=color;
    }
}

