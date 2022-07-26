isClicked = false;


class Click {
  constructor() {
    this.isClick = false;
    this.#colorListener();
    this.#addClickListener();
    this.color = 'black';
    this.penSize = 10;
  }

  
  #colorListener() {
    document.getElementById('red').onmousedown = () => {
      this.color = 'red';
      console.log("RED")
    }
    document.getElementById('blue').onmousedown = () => {
      this.color = 'blue';
    }
    document.getElementById('yellow').onmousedown = () => {
      this.color = 'yellow';
    }
    document.getElementById('green').onmousedown = () => {
      this.color = 'green';
    }
    document.getElementById('black').onmousedown = () => {
      this.color = 'black';
    }
    document.getElementById('eraser').onmousedown = () => {
      this.color = 'white';
    }
    document.getElementById('clear').onmousedown = () => {
      clear();
    }
    
  }

  draw(x, y) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(event.clientX, event.clientY, this.penSize, 0, 2 * Math.PI);
      ctx.lineWidth = this.penSize * 2;
      ctx.closePath();
      ctx.fill();
  }

  
  #addClickListener() {
    document.onmousedown = (e) => {
      this.isClick = true;
      this.draw();
      console.log("CLICKED");
      
    }

    document.onmouseup = () => {
      this.isClick = false;
      console.log("UNCLICKED");
    }

    document.onmousemove = (e) => {
      if(this.isClick) {
        this.draw(e.offsetX, e.offsetY)
      }
      
    }
  }
}