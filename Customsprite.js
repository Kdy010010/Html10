 class CustomObjectElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
          }
          img {
            max-width: 100%;
            height: auto;
          }
        </style>
        <img id="spriteImage">
      `;

      this.spriteImage = this.shadowRoot.getElementById('spriteImage');
    }

    connectedCallback() {
      const sprite = this.getAttribute('sprite');
      const script = this.getAttribute('script');

      // Load sprite image
      this.spriteImage.src = sprite;

      // Load and execute the control script
      if (script) {
        const scriptElement = document.createElement('script');
        scriptElement.src = script;
        document.head.appendChild(scriptElement);
      }
    }
  }

  customElements.define('custom-object', CustomObjectElement);
