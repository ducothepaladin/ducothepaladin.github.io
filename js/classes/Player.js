//canvasH is from main.js, under code represent the player and it's position

const player = {
  position: { x: setWidthPercent(80), y: setHeightPercent(10) },
  velocity: { x: 0, y: 0 },
  gravity: 1,
  playerW: 50,
  playerH: 90,
  frame: 1,
  display: "Idle",
  eFrame: 0,
  bFrame: 10,
  frameL: 4,
  leftCheck: false,
  update: function () {
    this.position.x += this.velocity.x;
    this.checkLeftAndRightCollisions();
    this.applyGravity();
    this.checkVerticalCollisions();
    this.horizontalMovement();
    this.verticalMovement();
    this.doorOpenHandle();
    textBox.followText(this.position.x, this.position.y);
    this.doorInfoText();
    spritePlayer.draw(this.display, this.frame);
    window.scrollTo(this.position.x - 500, this.position.y - 500, "smooth");
  },
  checkLeftAndRightCollisions: function () {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const block = this.collisionBlocks[i];

      if (
        this.position.x <= block.position.x + block.width &&
        this.position.x + this.playerW >= block.position.x &&
        this.position.y <= block.position.y + block.height &&
        this.position.y + this.playerH >= block.position.y
      ) {
        if (this.velocity.x < -1) {
          this.position.x = block.position.x + block.width + 0.01;
          break;
        }
        if (this.velocity.x > 1) {
          this.position.x = block.position.x - this.playerW - 0.01;
          break;
        }
      }
    }
  },
  checkVerticalCollisions: function () {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const block = this.collisionBlocks[i];

      if (
        this.position.x <= block.position.x + block.width &&
        this.position.x + this.playerW >= block.position.x &&
        this.position.y <= block.position.y + block.height &&
        this.position.y + this.playerH >= block.position.y
      ) {
        if (this.velocity.y < 0) {
          this.velocity.y = 0;
          this.position.y = block.position.y + block.height + 0.01;
          break;
        }
        if (this.velocity.y > 0) {
          this.velocity.y = 0;
          this.position.y = block.position.y - this.playerH - 0.01;
          break;
        }
      }
    }
  },
  applyGravity: function () {
    this.velocity.y += this.gravity;
    this.position.y += this.velocity.y;
  },
  updateFrame: function (frameL) {
    this.eFrame++;

    if (this.eFrame % this.bFrame === 0) {
      this.frame++;
      if (this.frame > frameL) {
        this.frame = 1;
        this.eFrame = 0;
      }
    }
  },
  jump: function () {
    this.display = "Jump";
    this.bFrame = 4;
    this.updateFrame(spritePlayer.pJump.length);
  },
  idle: function (check) {
    this.display = check;
    this.bFrame = 10;
    this.updateFrame(spritePlayer.pIdle.length);
  },
  fall: function (check) {
    this.display = check;
    this.bFrame = 8;
    this.updateFrame(spritePlayer.pFall.length);
  },
  run: function (check) {
    this.display = check;
    this.bFrame = 6;
    this.updateFrame(spritePlayer.pRun.length);
  },
  horizontalMovement: function () {
    if (this.velocity.x < 0) {
      this.leftCheck = true;
      this.run("Run_Left");
    } else if (this.velocity.x > 0) {
      this.leftCheck = false;
      this.run("Run");
    } else {
      this.leftCheck ? this.idle("IdleLeft") : this.idle("Idle");
    }
  },
  verticalMovement: function () {
    if (this.velocity.y < 0) {
      this.jump();
    } else if (this.velocity.y > 0) {
      this.leftCheck ? this.fall("FallLeft") : this.fall("Fall");
    }
  },
  doorOpenHandle: function () {
    // console.log("p po - " + Math.floor(this.position.x) + " & " + Math.floor(this.position.y) + "\n" + "door po - " + (spriteDoorCetificate.position.x - 150) + " & " + (spriteDoorCetificate.position.y + 49) )

    this.doorOpenPositionCheckPoint(
      spriteDoorAboutMe.position.x + 300,
      spriteDoorAboutMe.position.y + 53,
      spriteDoorAboutMe,
      true
    );
    this.doorOpenPositionCheckPoint(
      spriteDoorSkills.position.x - 150,
      spriteDoorSkills.position.y + 52,
      spriteDoorSkills,
      false
    );
    this.doorOpenPositionCheckPoint(
      spriteDoorProjects.position.x + 200,
      spriteDoorProjects.position.y + 51,
      spriteDoorProjects,
      true
    );
    this.doorOpenPositionCheckPoint(
      spriteDoorContactMe.position.x + 240,
      spriteDoorContactMe.position.y + 49,
      spriteDoorContactMe,
      true
    );
    this.doorOpenPositionCheckPoint(
      spriteDoorCetificate.position.x - 150,
      spriteDoorCetificate.position.y + 49,
      spriteDoorCetificate,
      false
    );
  },
  doorOpenPositionCheckPoint: function (x, y, door, check) {
    if (check) {
      if (
        this.position.x < x &&
        Math.floor(this.position.y) <= y &&
        Math.floor(this.position.y + 200) > y
      ) {
        door.open = true;
      } else {
        door.open = false;
      }
    } else {
      if (
        this.position.x > x &&
        Math.floor(this.position.y) <= y &&
        Math.floor(this.position.y + 200) > y
      ) {
        door.open = true;
      } else {
        door.open = false;
      }
    }
  },
  doorInfoText: function () {
    if (
      spriteDoorAboutMe.open ||
      spriteDoorCetificate.open ||
      spriteDoorProjects.open ||
      spriteDoorSkills.open ||
      spriteDoorContactMe.open
    ) {
      textBox.textRef.style.display = "block";
    } else {
        textBox.textRef.style.display = "none";
        textBox.textRef.style.opacity = 0;
    }

    if (spriteDoorAboutMe.open) {
      textBox.innerText =
        "You can learn about this handsome guy in this room. Come on give it a try!!";
        textBox.textx = 20;
        textBox.texty = 130;
        textBox.textRef.style.opacity = 1;
    }
    if (spriteDoorSkills.open) {
      textBox.innerText =
        "He really a skillful learner. I can bet he would be useful for your company. If you don't believe me. Check that room over there!!";
      textBox.textx = -400;
      textBox.texty = 150;
      textBox.textRef.style.opacity = 1;
    }
    if (spriteDoorProjects.open) {
      textBox.innerText =
        "He did plenty of projects during his learning journey.(hehe... half of them are unfinished..what a lazy bastard)..Well anyway You can check them here. Before you go in. Make sure to handle you jaw cause that may make your jaw drop";
      textBox.textx = 60;
      textBox.texty = 190;
      textBox.textRef.style.opacity = 1;
    }
    if (spriteDoorContactMe.open) {
      textBox.innerText =
        "Oh you really come this far. So Do you want to Hire him? Right??? Ah come on give him a chance. My man derserve it. Plsssss!!!!";
      textBox.textx = 30;
      textBox.texty = 140;
      textBox.textRef.style.opacity = 1;
    }
    if (spriteDoorCetificate.open) {
      textBox.innerText = "Well here is his certificate libiary.";
      textBox.textx = -400;
      textBox.texty = 140;
      textBox.textRef.style.opacity = 1;
    }
  },
};

player.sides = { bottom: player.position.y + player.playerH };
player.collisionBlocks = mainPageCollisionBlockArr;

const playerMovement = (key) => {
  switch (key) {
    case "w":
      if (player.velocity.y == 0) {
        player.velocity.y = -18;
      }
      break;
    case "ArrowUp":
      if (player.velocity.y == 0) {
        player.velocity.y = -18;
      }
      break;
    case "a":
      player.velocity.x = -7;
      break;
    case "ArrowLeft":
      player.velocity.x = -7;
      break;
    case "d":
      player.velocity.x = 7;
      break;
    case "ArrowRight":
      player.velocity.x = 7;
      break;
  }
};
