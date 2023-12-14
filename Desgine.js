class DesignElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.render();
    }

    connectedCallback() {
      this.applyStyles();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        this.applyStyles();
      }
    }

    static get observedAttributes() {
      return ['color', 'font-family', 'font-size'];
    }

    applyStyles() {
      const color = this.getAttribute('color') || 'black';
      const fontFamily = this.getAttribute('font-family') || 'inherit';
      const fontSize = this.getAttribute('font-size') || 'inherit';

      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline;
            color: ${color};
            font-family: ${fontFamily};
            font-size: ${fontSize};
          }
        </style>
        <slot></slot>
      `;
    }

    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline;
          }
        </style>
        <slot></slot>
      `;
    }
  }

  customElements.define('design-element', DesignElement);
