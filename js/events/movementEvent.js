window.addEventListener("keydown", (event) => {
  playerMovement(event.key);

  document.addEventListener("keyup", (event) => {
    if (event.key === "a") {
      player.velocity.x = 0;
      player.idle("IdleLeft");
    } else if (event.key === "d") {
      player.velocity.x = 0;
      player.idle("Idle");
    }
  });
});

