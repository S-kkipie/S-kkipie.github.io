const up = document.querySelector("#up");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const down = document.querySelector("#down");
const canvas = document.querySelector("canvas");
const buttonStartGame = document.querySelector("#startGame");
const velocidad = document.querySelector("#velocidadI");
const longitud = document.querySelector("#longitudI");
const parrafoPoints = document.querySelector("#points");
const texto = document.querySelector("#Texto");
let popup = document.getElementById('popup')
function openPopup() {
    popup.classList.add('open-popup')
}
function closePopup() {
    location.reload();
}
buttonStartGame.addEventListener("click", () => {
    canvas.style.display = "block";
    up.style.display = "block";
    down.style.display = "block";
    left.style.display = "block";
    right.style.display = "block";
    buttonStartGame.style.display = "none";
    velocidad.style.display = "none";
    longitud.style.display = "none";
    gameStart(velocidad.value, longitud.value);

});
canvas.width = 545;
canvas.height = 550;
const ctx = canvas.getContext("2d");
function gameStart(velocidad, longitudInicial) {
    function dibujarCarita(x, y) {
        // Ojos
        ctx.beginPath();
        ctx.arc(x + 50 / 3, y + 50 / 3, 50 / 10, 0, Math.PI * 2);
        ctx.arc(x + 50 * 2 / 3, y + 50 / 3, 50 / 10, 0, Math.PI * 2);
        ctx.fillStyle = 'white'; // Cambia el color según tus preferencias
        ctx.fill();

    }
    let points = 0;
    let fotograma = 0;
    const fruta = {
        x1: Math.floor(Math.random() * 8) * 55,
        y1: Math.floor(Math.random() * 8) * 55 + 5,

    }
    const snake = {
        direccion: "Up",
        velocidad: 55,
        snakeBody: [],
        longitud: longitudInicial,
    };
    for (let i = 0; i < snake.longitud; i++) {
        snake.snakeBody[i] = {
            x1: 0,
            y1: i * 55 + 0,
            x2: 50,
            y2: (i + 1) * 50 + 0,
        }
    }

    up.addEventListener("click", () => {
        if (snake.direccion != "Down" && snake.direccion != "Up") {
            snake.direccion = "Up"
            fotograma = 0;
        }
    });
    left.addEventListener("click", () => {
        if (snake.direccion != "Left" && snake.direccion != "Right") {
            snake.direccion = "Left"
            fotograma = 0;
        }
    });
    down.addEventListener("click", () => {
        if (snake.direccion != "Up" && snake.direccion != "Down") {
            snake.direccion = "Down"
            fotograma = 0;
        }

    });
    right.addEventListener("click", () => {
        if (snake.direccion != "Left" && snake.direccion != "Right") {
            snake.direccion = "Right"
            fotograma = 0;
        }
    });
    document.addEventListener("keydown", (event) => {
        codigoTecla = event.key;
        if (codigoTecla == "ArrowRight" && snake.direccion != "Left" && snake.direccion != "Right") {
            snake.direccion = "Right"
            fotograma = 0;
        } else if (codigoTecla == "ArrowLeft" && snake.direccion != "Right" && snake.direccion != "Left") {
            snake.direccion = "Left"
            fotograma = 0;
        } else if (codigoTecla == "ArrowDown" && snake.direccion != "Up" && snake.direccion != "Down") {
            snake.direccion = "Down"
            fotograma = 0;
        } else if (codigoTecla == "ArrowUp" && snake.direccion != "Down" && snake.direccion != "Up") {
            snake.direccion = "Up"
            fotograma = 0;
        }
    });

    function animation() {
        if (fotograma > snake.longitud) {
            if (snake.direccion === "Right") {
                snake.snakeBody.forEach((value, index) => {
                    snake.snakeBody[index].x1 += snake.velocidad;
                    snake.snakeBody[index].x2 += snake.velocidad;
                });
            } else if (snake.direccion === "Up") {
                snake.snakeBody.forEach((value, index) => {
                    snake.snakeBody[index].y1 -= snake.velocidad;
                    snake.snakeBody[index].y2 -= snake.velocidad;
                });
            } else if (snake.direccion === "Down") {
                snake.snakeBody.forEach((value, index) => {
                    snake.snakeBody[index].y1 += snake.velocidad;
                    snake.snakeBody[index].y2 += snake.velocidad;
                });
            } else if (snake.direccion === "Left") {
                snake.snakeBody.forEach((value, index) => {
                    snake.snakeBody[index].x1 -= snake.velocidad;
                    snake.snakeBody[index].x2 -= snake.velocidad;
                });
            }
        } else {
            if (snake.direccion === "Right") {
                for (let index = snake.longitud - 1; index >= 0; index--) {
                    if (index != 0) {
                        snake.snakeBody[index].y1 = snake.snakeBody[index - 1].y1;
                        snake.snakeBody[index].x1 = snake.snakeBody[index - 1].x1;
                    } else {
                        snake.snakeBody[0].x1 += 55;
                    }
                }
            } else if (snake.direccion === "Left") {
                snake.direccion = "Left"
                for (let index = snake.longitud - 1; index >= 0; index--) {
                    if (index != 0) {
                        snake.snakeBody[index].y1 = snake.snakeBody[index - 1].y1;
                        snake.snakeBody[index].x1 = snake.snakeBody[index - 1].x1;
                    } else {
                        snake.snakeBody[0].x1 -= 55;
                    }
                }
            } else if (snake.direccion === "Down") {
                snake.direccion = "Down"
                for (let index = snake.longitud - 1; index >= 0; index--) {
                    if (index != 0) {
                        snake.snakeBody[index].y1 = snake.snakeBody[index - 1].y1;
                        snake.snakeBody[index].x1 = snake.snakeBody[index - 1].x1;
                    } else {
                        snake.snakeBody[0].y1 += 55;
                    }
                }
            } else if (snake.direccion === "Up") {
                for (let index = snake.longitud - 1; index >= 0; index--) {
                    if (index != 0) {
                        snake.snakeBody[index].y1 = snake.snakeBody[index - 1].y1;
                        snake.snakeBody[index].x1 = snake.snakeBody[index - 1].x1;
                    } else {
                        snake.snakeBody[0].y1 -= 55;
                    }
                }

            }
        }
        if (Math.abs(snake.snakeBody[0].x1 - fruta.x1) < 50 && Math.abs(snake.snakeBody[0].y1 - fruta.y1) < 50) {
            do {
                fruta.x1 = Math.floor(Math.random() * 8) * 55;
                fruta.y1 = Math.floor(Math.random() * 8) * 55 + 5;
            } while (colisionCuerpoObjeto(fruta));
            points++;
            texto.innerHTML = "Puntuacion Final: " + points;
            parrafoPoints.textContent = "Puntos: " + points;
            snake.longitud++;
            snake.snakeBody.push({ x1: -60, y1: - 60, });
            if (velocidad > 150) {
                velocidad -= velocidad / 7;
            }
        }
        if (colisionCuerpoObjeto(snake.snakeBody[0])) {
            openPopup();
            return false;
        }

        snake.snakeBody.forEach((value, index) => {
            if (snake.snakeBody[index].y1 < 0) {
                snake.snakeBody[index].y1 = canvas.height - 50;
            }
            if (snake.snakeBody[index].y1 + 50 > canvas.height) {
                snake.snakeBody[index].y1 = 0;
            }
            if (snake.snakeBody[index].x1 < 0) {
                snake.snakeBody[index].x1 = canvas.width - 50;
            }
            if (snake.snakeBody[index].x1 + 50 > canvas.width) {
                snake.snakeBody[index].x1 = 0;
            }
        });
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        snake.snakeBody.forEach((value, index) => {
            ctx.fillRect(snake.snakeBody[index].x1, snake.snakeBody[index].y1, 50, 50);
        });
        dibujarCarita(snake.snakeBody[0].x1, snake.snakeBody[0].y1);

        ctx.fillStyle = "red";
        ctx.fillRect(fruta.x1, fruta.y1, 50, 50);
        console.log("serpiente: " + snake.snakeBody[0].x1 + "   " + snake.snakeBody[0].y1);
        console.log("Fruta: " + fruta.x1 + "      " + fruta.y1);
        console.log(fotograma++);
        setTimeout(() => {
            requestAnimationFrame(animation);
        }, velocidad);

    }
    function colisionCuerpoObjeto(algo) {
        for (let i = 1; i < snake.snakeBody.length; i++) {
            var x1 = Math.abs(snake.snakeBody[i].x1 - algo.x1) < 50;
            var y1 = Math.abs(snake.snakeBody[i].y1 - algo.y1) < 50;
            if (x1 && y1) {
                return true;
            }
        }
        return false;
    }
    animation();
}

