class shadowButton extends HTMLElement {
  constructor() {
    super();
    let counter = 0;
    this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");
    const button = document.createElement("button");
    let buttonText = "Times Clicked: ";
    button.innerText = buttonText + counter;
    wrapper.appendChild(button);

    // const content = document.createElement("div");
    // content.innerText = counter;
    // wrapper.appendChild(content);
    button.addEventListener("click", () => {
      counter++;
      button.innerText = buttonText + counter;
      // content.innerText = counter;
    });

    this.shadowRoot.append(wrapper);
  }
}

customElements.define("button-count", shadowButton);
