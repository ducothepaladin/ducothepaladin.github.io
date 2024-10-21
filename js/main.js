
const animate = () => {
  window.requestAnimationFrame(animate);
  spriteBackground.draw();
  mainPageCollisionBlockArr.forEach((block) => {
    block.draw();
  });
  rooms.draw();
  player.update();
};

window.addEventListener('load', () => {
  animate();
})
