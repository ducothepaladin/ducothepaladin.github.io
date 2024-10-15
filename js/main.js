const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 128 * 9;
canvas.height = 128 * 16;
const canvasW = canvas.width;
const canvasH = canvas.height;

const animate = () => {
  window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvasW, canvasH);
  ctx.fillRect(0, 0, canvasW, canvasH);
  spriteBackground.draw();
  mainPageCollisionBlockArr.forEach((block) => {
    block.draw();
  });
  rooms.draw();
  player.update();
};

animate();
