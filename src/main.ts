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
setupCounter(divider, button);

app.append(divider);

function setupCounter(divider: HTMLDivElement, button: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    divider.innerHTML = `${counter} waahs`;
  };
  button.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
