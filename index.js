const boxesEl = document.querySelector(".boxes");
// const changeSqauresEl = document.querySelector(".change-squares");
const blackEl = document.querySelector(".black")
const rainbowEl = document.querySelector(".rainbow");
const eraserEl = document.querySelector(".eraser");
const clearEl = document.querySelector(".clear");
const colorEl = document.querySelector("#color-picker");
const sliderEl = document.querySelector("#grid-size");
const sizeLabelEl = document.querySelector("#size-label")

let dimension = 16;
let color = "000000";
let customColor;
let drawing = false;
let mode = "default";

makeGrid(dimension);

blackEl.addEventListener("click", () => (mode = "default"))

colorEl.addEventListener("input", (event) => {
  console.log(event);
  customColor = event.target.value;
  mode = "customColor";
});

rainbowEl.addEventListener("click", () => (mode = "rainbow"));

eraserEl.addEventListener("click", () => (mode = "eraser"));

clearEl.addEventListener("click", () => {
  clear();
  makeGrid(dimension);
});

sliderEl.addEventListener("change", (event) => {
  console.log(event);
  dimension = event.target.valueAsNumber;
  clear();
  makeGrid(dimension);
  sizeLabelEl.innerText = dimension + "x" + dimension
});

function makeGrid(dimension) {
  boxesEl.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
  boxesEl.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;

  for (let row = 0; row < dimension; row++) {
    for (let column = 0; column < dimension; column++) {
      const boxEl = document.createElement("div");
      boxEl.classList.add("box");
      boxEl.addEventListener("mousedown", startDraw);
      boxEl.addEventListener("mousemove", changeColor);
      boxEl.addEventListener("mouseup", stopDraw);
      boxesEl.appendChild(boxEl);
    }
  }
}

function changeColor(e) {
  const boxEl = e.target;
  if (drawing === true) {
    switch (mode) {
      case "default":
        boxEl.style.backgroundColor = "#000000";
        break;
      case "rainbow":
        boxEl.style.backgroundColor = "#" + rainbow();
        break;
      case "eraser":
        boxEl.style.backgroundColor = "#ffffff";
        break;
      case "customColor":
        boxEl.style.backgroundColor = customColor;
        break;

      default:
        break;
    }
  }
}

function startDraw(e) {
  drawing = true;
  changeColor(e);
}

function stopDraw() {
  drawing = false;
}

function colorPicker() {}

function rainbow() {
  return Math.floor(Math.random() * 255 * 255 * 255).toString(16);
}

function clear() {
  boxesEl.innerHTML = "";
}
