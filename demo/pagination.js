export class Pagination extends HTMLElement {
  shadow;

  constructor() {
    super();
  }

  connectedCallback() {
    this.shadow = this.attachShadow({mode: 'open'});

    this.shadow.innerHTML = `
      <slot></slot>
    `;
  }
}
