const text = document.getElementById("player-text");



const textBox = {
    textRef: text,
    innerText: "Hello World",
    followText: function(x, y) {
        this.textRef.style.top = `${y - 190}px`;
        this.textRef.style.left = `${x + 140}px`;
        this.textRef.innerText = this.innerText;
        this.textRef.style.display = "none";
    }
}





