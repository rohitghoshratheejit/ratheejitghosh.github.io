const canvas = document.getElementById("dipoleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.8;
canvas.height = 400;

let particles = [];

for (let i = 0; i < 40; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    angle: Math.random() * Math.PI * 2
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    // dipole line
    let dx = Math.cos(p.angle) * 10;
    let dy = Math.sin(p.angle) * 10;

    ctx.beginPath();
    ctx.moveTo(p.x - dx, p.y - dy);
    ctx.lineTo(p.x + dx, p.y + dy);
    ctx.strokeStyle = "#00d4ff";
    ctx.stroke();

    // rotate slowly
    p.angle += 0.01;
  });

  requestAnimationFrame(draw);
}

draw();
