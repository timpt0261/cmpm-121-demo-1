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

const upgrade = document.createElement("button");
upgrade.id = "upgrade";
upgrade.innerHTML = "strengthen throw";
upgrade.disabled = true;

app.append(upgrade);

let counter = 0;
let start: number | undefined = undefined;
let progress: number | undefined = undefined;
const updateDelay = Infinity; // modify to change frame rate

button.addEventListener("click", () => {
  console.log("Throw");
  counter++;
});

upgrade.addEventListener("click", () => {
  console.log("Strength");
  counter -= 10;
});

function tick(timestamp: number) {
  console.log(`Counter : ${counter}`);
  upgrade.disabled = counter >= 10 ? false : true;

  const diff = progress! - start!;
  if (!start || diff != updateDelay) {
    start = timestamp / 1000;
    divider.innerHTML = `${counter} Waves`;
  }
  progress = timestamp / 1000;

  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);
