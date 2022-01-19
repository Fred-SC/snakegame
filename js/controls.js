import { moveSound } from "./game.js";

let inputDirection = { x: 0, y: 0 };
let d = "";

window.addEventListener("keydown", (move) => {
  switch (move.key) {
    case "ArrowUp":
    case "W":
    case "w":
      if (d == "DOWN") break;
      inputDirection = { x: 0, y: -1 };
      if (d !== "UP") moveSound.play();
      d = "UP";
      break;
    case "ArrowDown":
    case "S":
    case "s":
      if (d == "UP") break;
      inputDirection = { x: 0, y: 1 };
      if (d !== "DOWN") moveSound.play();
      d = "DOWN";
      break;
    case "ArrowLeft":
    case "A":
    case "a":
      if (d == "RIGHT") break;
      inputDirection = { x: -1, y: 0 };
      if (d !== "LEFT") moveSound.play();
      d = "LEFT";
      break;
    case "ArrowRight":
    case "D":
    case "d":
      if (d == "LEFT") break;
      inputDirection = { x: 1, y: 0 };
      if (d !== "RIGHT") moveSound.play();
      d = "RIGHT";
      break;
  }
});

export function getInputDirection() {
  return inputDirection;
}
