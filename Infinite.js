class InfiniteRepeatElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.render();
    }

    connectedCallback() {
      this.start = parseInt(this.getAttribute('start')) || 1;
      this.renderItems();
    }

    renderItems() {
      this.shadowRoot.innerHTML = '';

      let counter = this.start;

      const template = this.innerHTML;

      while (true) {
        const element = document.createElement('div');
        element.innerHTML = template.replace(/\{(\w+)\}/g, (_, key) => counter);
        this.shadowRoot.appendChild(element);

        counter++;
      }
    }

    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
          }
        </style>
      `;
    }
  }

  customElements.define('infiniterepeat-element', InfiniteRepeatElement);
