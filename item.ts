interface Item {
  name: string;
  growth_rate: number;
  cost: number;
}

class Upgrade implements Item {
  button: HTMLButtonElement = document.createElement("button");
  name: string = "upgrade";
  msg_html: string = "";
  cost: number = 10;
  growth_rate: number = 0.1;
  constant = 0;
  #growth_factor = 1.15;
  time_constant = 0;

  constructor(id: string, msg_HTML: string, c: number, growth_rate: number) {
    this.button.id = id;
    this.button.disabled = false;
    this.msg_html = msg_HTML;
    this.growth_rate = growth_rate;
    this.constant = c;
    this.cost = this.calculate_cost(
      this.constant,
      this.#growth_factor,
      this.time_constant,
    );
    return this;
  }

  calculate_cost(x: number, y: number, z: number): number {
    return x * y ** z;
  }

  update(counter: number, growth_rate: number): number[] {
    console.log(`${this.msg_html}`);
    counter -= this.constant;
    growth_rate += this.growth_rate;
    this.time_constant++;
    this.cost = this.calculate_cost(
      this.constant,
      this.#growth_factor,
      this.time_constant,
    );

    return [counter, growth_rate];
  }

  display() {
    this.button.innerHTML = `${this.msg_html} ${this.cost.toFixed(1)} (${
      this.time_constant
    })`;
  }

  disableButton(counter: number) {
    this.button.disabled = counter >= this.constant ? false : true;
  }
}

export const avilableItems: Upgrade[] = [
  new Upgrade("upgrade_a", "🪨 Pebble Toss", 10, 0.1),
  new Upgrade("upgrade_b", "🚿 Shower", 100, 2.0),
  new Upgrade("upgrade_c", "🌊 Tsunami Power", 1000, 50),
];
