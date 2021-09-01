class Field {
  constructor() {
    this.color = "#0e0e0e";
  }

  render(canvas, context) {
    context.fillStyle = this.color;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
}

export default Field;
