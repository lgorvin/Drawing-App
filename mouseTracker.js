function mousemove(event){
    "pageX: ",event.pageX, 
    "pageY: ", event.pageY, 
    "clientX: ", event.clientX, 
    "clientY:", event.clientY
}

myCanvas.addEventListener('mousemove', mousemove);

function penSizeChange(pensize) {
    click.penSize = pensize;
  }

function clear(){
  ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
}