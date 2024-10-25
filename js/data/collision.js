const mainPageCollisions = [
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 
    7, 7, 7, 7, 7, 7, 7, 7, 4, 0, 0, 7, 7, 7, 7, 7, 7, 7, 
    7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 
    7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 4, 0, 0, 0, 0, 0, 0, 7, 
    7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 7, 
    7, 0, 0, 0, 0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 7, 
    7, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 7,
    7, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 4, 4, 0, 0, 0, 7, 
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 7, 
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 
    7, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 7, 7, 7, 7, 7, 
    7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 
    7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 
    7, 7, 7, 7, 7, 7, 7, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 7, 
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 7, 7, 7, 7, 7, 7, 
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 
    7, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 7, 7, 7, 7, 7, 7, 
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
    7, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 
    7, 7, 7, 7, 7, 7, 7, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 7, 
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 7, 
    7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 
    7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
  ];

let mainPageCollisionBlock = {
  position: {x: 0, y: 0},
  width: 64,
  height: 64,
  draw: function() {
    ctx.fillStyle = "rgba(255, 100, 69, 0)";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const parsedMainPageCollisions = mainPageCollisions.parse2D();
const mainPageCollisionBlockArr = parsedMainPageCollisions.createObjects();
