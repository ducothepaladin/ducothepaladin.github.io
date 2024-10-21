const text = document.getElementById("player-text");



const textBox = {
    textRef: text,
    innerText: "Hello World",
    texty: 130,
    textx: 20,
    followText: function(x, y) {
        this.textRef.style.top = `${y - this.texty}px`;
        this.textRef.style.left = `${x + this.textx}px`;
        this.textRef.innerText = this.innerText;
        this.textRef.style.display = "none";
    }
}


const doorLabel = {
    draw: function(showText, x, y) {
        ctx.fillStyle = "#5f382f";
        ctx.fillRect(x - 59, y - 23, 120, 35);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 1;
        ctx.strokeRect(x - 59, y - 23, 120, 35);
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(showText, x, y);
    }
}





