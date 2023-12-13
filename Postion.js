class PositionedObjectElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            position: absolute;
          }
        </style>
        <slot></slot>
      `;
    }

    connectedCallback() {
      this.updatePosition();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue && (name === 'x' || name === 'y')) {
        this.updatePosition();
      }
    }

    static get observedAttributes() {
      return ['x', 'y'];
    }

    updatePosition() {
      const x = this.getAttribute('x');
      const y = this.getAttribute('y');

      if (x !== null && y !== null) {
        this.style.left = `${x}px`;
        this.style.top = `${y}px`;
      }
    }
  }

  customElements.define('positioned-object', PositionedObjectElement);
