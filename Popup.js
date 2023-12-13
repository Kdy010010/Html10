class PopupElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;
            cursor: pointer;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
          }
        </style>
        <slot></slot>
      `;

      this.handleClick = this.handleClick.bind(this);
    }

    connectedCallback() {
      this.addEventListener('click', this.handleClick);
    }

    handleClick() {
      const src = this.getAttribute('src');
      if (src) {
        window.open(src, '_blank');
      }
    }
  }

  customElements.define('popup-element', PopupElement);
