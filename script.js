const myCanvas = document.getElementById("myCanvas");
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight * 0.75;

const ctx = myCanvas.getContext("2d");

const click = new Click()

var slider = document.getElementById("pen-size");
slider.oninput = function() {
  
}