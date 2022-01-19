const starter = document.querySelector("#starter");

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    starter.style.display = "none";
    console.log("abrido");
  }
});

export function getStarter() {
  return starter;
}
