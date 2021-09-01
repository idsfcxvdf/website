import Canvas from "./Canvas";
import Field from "./Field";
import Particle from "./Particle";

const canvas = new Canvas();
const field = new Field();
const particle = new Particle();

particle.getCount();
particle.generate(canvas.context);

function step() {
  particle.move();
  particle.collision(canvas.canvas);

  field.render(canvas.canvas, canvas.context);
  particle.render(canvas.context);
  particle.unit(canvas.context);

  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
