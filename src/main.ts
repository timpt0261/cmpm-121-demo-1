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
setupCounter(divider);

app.append(divider);

function setupCounter(divider: HTMLDivElement) {
  let counter = 0;
  const setCounter = () => {
    divider.innerHTML = `${counter} waahs`;
    counter++;
  };
  setInterval(setCounter, 1000);
}
