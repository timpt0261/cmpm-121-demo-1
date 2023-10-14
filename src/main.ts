import "./style.css";
import { avilableItems } from "./item";

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

const display_growth_rate = document.createElement("div");
display_growth_rate.id = "growth_rate";

app.append(display_growth_rate);

let counter = 0;
let start: number | undefined = undefined;
let growthRate = 0;

button.addEventListener("click", () => {
  console.log("Throw Rocks");
  counter++;
});

avilableItems.forEach((element) => {
  app.append(element.button);
  element.button.addEventListener("click", () => {
    const temp = element.update(counter, growthRate);
    counter = temp[0];
    growthRate = temp[1];
  });
});

function tick(timestamp: number) {
  console.log(`counter : ${counter}`);
  avilableItems.forEach((element) => {
    element.disableButton(counter);
  });

  if (!start) start = timestamp / 1000;
  const elapsed = timestamp / 1000 - start!;

  console.log(` elapsed : ${elapsed}`);
  counter += growthRate * elapsed;
  divider.innerHTML = `${Math.round(counter)} Ripple Counter`;
  display_growth_rate.innerHTML = ` Droplet Impact ${growthRate.toFixed(1)}`;

  avilableItems.forEach((element) => {
    element.display();
  });

  start = timestamp / 1000;

  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);
