import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "ripple";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("button");

button.title = "button";
button.innerHTML = "💧";
app.append(button);

const divider = document.createElement("div");
divider.id = "counter";

app.append(divider);

let counter = 0;
let start: number | undefined = undefined;
let progress: number | undefined = undefined;
const updateDelay = 1 / 60; // 60 units per second

function tick(timestamp: number) {
  const diff = progress! - start!;
  if (!start || diff >= updateDelay) {
    start = timestamp / 1000;
    divider.innerHTML = `${counter} Waves`;
    counter++;
  }
  progress = timestamp / 1000;

  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);
