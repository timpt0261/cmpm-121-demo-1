import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "ripple";

document.title = gameName;

// const background = document.createElement("img");
// background.src = "/img/striped_wave.jpg";

// app.append(background);

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

const upgrade_a = document.createElement("button");
upgrade_a.id = "upgrade_a";
upgrade_a.disabled = true;

app.append(upgrade_a);

const upgrade_b = document.createElement("button");
upgrade_b.id = "upgrade_b";
upgrade_b.disabled = true;

app.append(upgrade_b);

const upgrade_c = document.createElement("button");
upgrade_c.id = "upgrade_c";
upgrade_c.disabled = true;

app.append(upgrade_c);

let counter = 0;
let start: number | undefined = undefined;
let growthRate = 0;

const constant_a = 10;
const growth_factor_a = 1.15;
let time_constant_a = 0;
let cost_a = constant_a * growth_factor_a ** time_constant_a;

const constant_b = 100;
const growth_factor_b = 1.15;
let time_constant_b = 0;
let cost_b = constant_b * growth_factor_b ** time_constant_b;

const constant_c = 1000;
const growth_factor_c = 1.15;
let time_constant_c = 0;
let cost_c = constant_c * growth_factor_c ** time_constant_c;

button.addEventListener("click", () => {
  console.log("Throw Rocks");
  counter++;
});

upgrade_a.addEventListener("click", () => {
  console.log("Improve Body");
  counter -= 10;
  growthRate += 0.1;
  time_constant_a++;
  cost_a = constant_a * growth_factor_a ** time_constant_a;
});

upgrade_b.addEventListener("click", () => {
  console.log("Improve Sail");
  counter -= 100;
  growthRate += 2.0;
  time_constant_b++;
  cost_b = constant_b * growth_factor_b ** time_constant_b;
});

upgrade_c.addEventListener("click", () => {
  console.log("Improve Engine");
  counter -= 1000;
  growthRate += 50;
  time_constant_c++;
  cost_c = constant_c * growth_factor_c ** time_constant_c;
});
1;

function tick(timestamp: number) {
  console.log(`counter : ${counter}`);

  upgrade_a.disabled = counter >= constant_a ? false : true;
  upgrade_b.disabled = counter >= cost_b ? false : true;
  upgrade_c.disabled = counter >= cost_c ? false : true;

  if (!start) start = timestamp / 1000;
  const elapsed = timestamp / 1000 - start!;

  console.log(` elapsed : ${elapsed}`);
  counter += growthRate * elapsed;
  divider.innerHTML = `${Math.round(counter)} Ripple Counter`;
  display_growth_rate.innerHTML = ` Droplet Impact ${growthRate.toFixed(1)}`;

  upgrade_a.innerHTML = ` 🪨 Pebble Toss  ${cost_a.toFixed(
    1,
  )} (${time_constant_a})`;
  upgrade_b.innerHTML = ` 🚿 Shower ${cost_b.toFixed(1)} (${time_constant_b})`;
  upgrade_c.innerHTML = ` 🌊 Tsunami Power ${cost_c.toFixed(
    1,
  )} (${time_constant_c})`;

  start = timestamp / 1000;

  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);
