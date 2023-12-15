  class MoveyElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.render();
    }

    connectedCallback() {
      this.setupMovement();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if ((oldValue !== newValue) && (name === 'move' || name === 'objectid')) {
        this.setupMovement();
      }
    }

    static get observedAttributes() {
      return ['move', 'objectid'];
    }

    setupMovement() {
      const moveValue = parseInt(this.getAttribute('move')) || 0;
      const objectId = this.getAttribute('objectid');

      const element = document.getElementById(objectId);

      if (element) {
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
              const slotContent = document.querySelector('movey-element').shadowRoot.querySelector('slot').assignedNodes()[0];
              
              const element = document.getElementById('${objectId}');
              element.style.transition = 'transform 0.5s ease-in-out';
              element.style.transform = 'translateY(${moveValue}px)';
            });
          </script>
        `;
      } else {
        console.error(`Element with id '${objectId}' not found.`);
      }
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

  customElements.define('movey-element', MoveyElement);
