const btnAddNewCounter = document.getElementById("btn-add-new-counter");
const wrapperCounter = document.getElementById("wrapper-counter");

class Counter {
  #DOMheaderValue;
  #DOMinputValue;
  #DOMbtnIncrement;
  #DOMbtnDecrement;

  #value;
  #changeValue;

  constructor() {
    this.#value = 0; // wartość początkowa licznika
    this.#changeValue = 1; // wartość o jaką licnzik bedzie zmieniany

    this.#init();
  }

  #init() {
    this.#render();
    this.#addEventListeners();
  }

  #render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("counter");

    const headerValue = document.createElement("h1");
    headerValue.textContent = this.#value;

    const input = document.createElement("input");
    input.type = "number";
    input.value = this.#changeValue;

    const btnIncrement = document.createElement("button");
    btnIncrement.textContent = `+${this.#changeValue}`;

    const btnDecrement = document.createElement("button");
    btnDecrement.textContent = `-${this.#changeValue}`;

    this.#DOMheaderValue = headerValue;
    this.#DOMinputValue = input;
    this.#DOMbtnIncrement = btnIncrement;
    this.#DOMbtnDecrement = btnDecrement;

    wrapper.appendChild(this.#DOMinputValue);
    wrapper.appendChild(this.#DOMheaderValue);
    wrapper.appendChild(this.#DOMbtnIncrement);
    wrapper.appendChild(this.#DOMbtnDecrement);

    wrapperCounter.appendChild(wrapper);
  }

  #addEventListeners() {
    ["keyup", "change"].forEach((eventType) => {
      this.#DOMinputValue.addEventListener(eventType, () => {
        this.#changeValue = Number(this.#DOMinputValue.value);
        this.#DOMbtnIncrement.textContent = `+${this.#changeValue}`;
        this.#DOMbtnDecrement.textContent = `-${this.#changeValue}`;
      });
    });

    this.#DOMbtnIncrement.addEventListener("click", () => {
      this.#setValue(this.#changeValue);
    });

    this.#DOMbtnDecrement.addEventListener("click", () => {
      this.#setValue(-this.#changeValue);
    });
  }

  #setValue(value) {
    this.#value += value;
    this.#DOMheaderValue.textContent = this.#value;
  }
}

btnAddNewCounter.addEventListener("click", () => new Counter());
