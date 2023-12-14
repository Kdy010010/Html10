  class MovexElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.render();
    }

    connectedCallback() {
      this.setupMovement();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue && name === 'move') {
        this.setupMovement();
      }
    }

    static get observedAttributes() {
      return ['move'];
    }

    setupMovement() {
      const moveValue = parseInt(this.getAttribute('move')) || 0;

      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;
            position: relative;
          }
        </style>
        <slot></slot>
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            const slotContent = document.querySelector('movex-element').shadowRoot.querySelector('slot').assignedNodes()[0];
            const element = slotContent.querySelector('div');
            
            element.style.transition = 'transform 0.5s ease-in-out';
            element.style.transform = 'translateX(${moveValue}px)';
          });
        </script>
      `;
    }

    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;
            position: relative;
          }
        </style>
        <slot></slot>
      `;
    }
  }

  customElements.define('movex-element', MovexElement);
