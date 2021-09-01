class Particle {
  constructor() {
    this.particleColor = "rgba(255, 255, 255, 0.4)";
    this.particleCount = 20;
    this.particleArr = [];
    this.lineRadius = 150;
    this.lineWidth = 0.3;
  }

  getCount() {
    if (window.innerWidth > 425 && window.innerWidth <= 768) {
      this.particleCount = 60;
    }
    if (window.innerWidth > 768) {
      this.particleCount = 100;
    }
  }

  generate() {
    function getRadius() {
      return Number((Math.random() * (5 - 2) + 2).toFixed());
    }

    function getSpeed() {
      const speed = (Math.random() * (9 - 4) + 2).toFixed();
      return Number(`0.${speed}`);
    }

    function getVel() {
      const vel = Number((Math.random() * (1.5 - -1.5) + -1.5).toFixed(3));
      if (vel <= 0.5 && vel >= -0.5) {
        return getVel();
      }
      return vel;
    }

    function getCoord(window) {
      return Number((Math.random() * (window - 10) + 10).toFixed());
    }

    let i = 0;
    while (i < this.particleCount) {
      i += 1;
      this.particleArr.push({
        radius: getRadius(),
        speed: getSpeed(),
        vel: {
          x: getVel(),
          y: getVel(),
        },
        coord: {
          x: getCoord(window.innerWidth - 10),
          y: getCoord(window.innerHeight - 10),
        },
      });
    }
  }

  render(context) {
    this.particleArr.forEach((particle) => {
      context.fillStyle = this.particleColor;
      context.beginPath();
      context.arc(
        particle.coord.x,
        particle.coord.y,
        particle.radius,
        0,
        2 * Math.PI
      );
      context.fill();
      context.closePath();
    });
  }

  move() {
    this.particleArr.forEach((particle) => {
      particle.coord.x += particle.speed * particle.vel.x;
      particle.coord.y += particle.speed * particle.vel.y;
    });
  }

  collision(canvas) {
    this.particleArr.forEach((particle) => {
      if (
        particle.coord.x >= canvas.width - particle.radius ||
        particle.coord.x <= particle.radius
      ) {
        particle.vel.x = -particle.vel.x;
      }

      if (
        particle.coord.y >= canvas.height - particle.radius ||
        particle.coord.y <= particle.radius
      ) {
        particle.vel.y = -particle.vel.y;
      }
    });
  }

  unit(context) {
    this.particleArr.forEach((particle) => {
      this.particleArr.forEach((otherParticle) => {
        const math = Math.sqrt(
          (particle.coord.x - otherParticle.coord.x) ** 2 +
            (particle.coord.y - otherParticle.coord.y) ** 2
        ).toFixed();
        if (math <= this.lineRadius) {
          context.beginPath();
          context.strokeStyle = `rgba(255, 255, 255, ${
            1 - math / this.lineRadius
          })`;
          context.lineWidth = this.lineWidth;
          context.moveTo(particle.coord.x, particle.coord.y);
          context.lineTo(otherParticle.coord.x, otherParticle.coord.y);
          context.stroke();
          context.closePath();
        }
      });
    });
  }
}

export default Particle;
