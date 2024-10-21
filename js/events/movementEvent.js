window.addEventListener("keydown", (event) => {
  playerMovement(event.key);

  document.addEventListener("keyup", (event) => {
    if (event.key === "a" || event.key === "ArrowLeft") {
      player.velocity.x = 0;
      player.idle("IdleLeft");
    } else if (event.key === "d" || event.key === "ArrowRight") {
      player.velocity.x = 0;
      player.idle("Idle");
    }
  });
});

