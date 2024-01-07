const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
var columnas = [];
for (let i = 0; i < 256; columnas[i++] = 1);
function animation() {
    ctx.font = "'Roboto', sans-serif";
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";

    for (let k = 0; k < 256; k++) {
        var caracter = String.fromCharCode(33000 + Math.random() * 93);
        ctx.fillText(caracter, k * 10, columnas[k] * 10);
        if (columnas[k] > 70 && Math.random() > 0.95) {
            columnas[k] = 0;
        }
        columnas[k]++;

    }
}
setInterval(animation, 30);