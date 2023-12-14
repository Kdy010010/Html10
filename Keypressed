class KeypressElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.render();
    }

    connectedCallback() {
      this.setupKeypress();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue && name === 'key') {
        this.setupKeypress();
      }
    }

    static get observedAttributes() {
      return ['key'];
    }

    setupKeypress() {
      const key = this.getAttribute('key');
      const template = this.querySelector('template');

      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;
          }
        </style>
        <slot></slot>
        <script>
          document.addEventListener('keydown', function(event) {
            if (event.key === '${key}') {
              // Clone the content of the template and append it to the shadow DOM
              const clone = document.importNode(${template}, true);
              document.querySelector('keypressed-element').shadowRoot.appendChild(clone.content);
            }
          });
        </script>
      `;
    }

    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;
          }
        </style>
        <slot></slot>
      `;
    }
  }

  customElements.define('keypressed-element', KeypressElement);
