class Canvas {
  constructor() {
    this.canvas = document.querySelector(".preview__particle");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}

export default Canvas;
