import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "ripple";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("button");

button.title = "button";
button.innerHTML = "⛵";

app.append(button);

const divider = document.createElement("div");
divider.id = "counter";

app.append(divider);

const display_growth_rate = document.createElement("div");
display_growth_rate.id = "growth_rate";

app.append(display_growth_rate);

const upgrade_a = document.createElement("button");
upgrade_a.id = "upgrade_a";
upgrade_a.innerHTML = "Improve Hull ";

app.append(upgrade_a);

const upgrade_b = document.createElement("button");
upgrade_b.id = "upgrade_b";
upgrade_b.innerHTML = "Improve Sail";
upgrade_b.disabled = true;

app.append(upgrade_b);

const upgrade_c = document.createElement("button");
upgrade_c.id = "upgrade_c";
upgrade_c.innerHTML = "Improve MotorBoat";
upgrade_c.disabled = true;

app.append(upgrade_c);

let counter = 0;
let start: number | undefined = undefined;
let growthRate = 0;

button.addEventListener("click", () => {
  console.log("Throw Rocks");
  counter++;
});

upgrade_a.addEventListener("click", () => {
  console.log("Improve Body");
  counter -= 10;
  growthRate += 0.1;
});

upgrade_b.addEventListener("click", () => {
  console.log("Improve Sail");
  counter -= 100;
  growthRate += 2.0;
});

upgrade_c.addEventListener("click", () => {
  console.log("Improve Engine");
  counter -= 1000;
  growthRate += 50;
});

function tick(timestamp: number) {
  console.log(`counter : ${counter}`);
  upgrade_a.disabled = counter >= 10 ? false : true;
  upgrade_b.disabled = counter >= 100 ? false : true;
  upgrade_c.disabled = counter >= 1000 ? false : true;

  if (!start) start = timestamp / 1000;
  counter += growthRate * (timestamp / 1000 - start!);
  divider.innerHTML = `${counter.toFixed(3)} knots per hour`;
  display_growth_rate.innerHTML = ` current growth rate ${growthRate.toFixed(
    1,
  )} at knots per hour `;
  start = timestamp / 1000;

  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);
