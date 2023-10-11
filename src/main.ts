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

const upgrade_a = document.createElement("button");
upgrade_a.id = "upgrade_a";
upgrade_a.innerHTML = "strengthen throw";
upgrade_a.disabled = true;

app.append(upgrade_a);

// const upgrade_b = document.createElement("button");
// upgrade_b.id = "upgrade_b";
// upgrade_b.innerHTML = "strengthen throw";
// upgrade_b.disabled = true;

// app.append(upgrade_b);

// const upgrade_c = document.createElement("button");
// upgrade_c.id = "upgrade_c";
// upgrade_c.innerHTML = "strengthen throw";
// upgrade_c.disabled = true;

// app.append(upgrade_c);

let counter = 0;
let start: number | undefined = undefined;
const growthRate = 1; // modify to change frame rate

button.addEventListener("click", () => {
  console.log("Throw");
  counter++;
});

upgrade_a.addEventListener("click", () => {
  console.log("Strength A");
  counter -= 10;
});

// upgrade_b.addEventListener("click", () => {
//   console.log("Strength B");
//   counter -= 100;
//   updateDelay += 2.0;
// });

// upgrade_c.addEventListener("click", () => {
//   console.log("Strength C");
//   counter -= 1000;
//   updateDelay += 50;
// });

function tick(timestamp: number) {
  console.log(`counter : ${counter}`);
  upgrade_a.disabled = counter >= 10 ? false : true;
  // upgrade_b.disabled = counter >= 100 ? false : true;
  // upgrade_c.disabled = counter >= 1000 ? false : true;
  if (!start) start = timestamp / 1000;
  counter += growthRate * (timestamp / 1000 - start!);
  divider.innerHTML = ` waves ${counter.toFixed(3)}`;
  start = timestamp / 1000;

  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);
