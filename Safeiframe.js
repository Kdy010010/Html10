 class SafeIFrameElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.render();
    }

    connectedCallback() {
      this.loadIFrame();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue && name === 'src') {
        this.loadIFrame();
      }
    }

    static get observedAttributes() {
      return ['src'];
    }

    loadIFrame() {
      const src = this.getAttribute('src');

      if (src) {
        this.shadowRoot.innerHTML = `
          <style>
            :host {
              display: block;
              width: 100%;
              height: 100%;
            }
            iframe {
              width: 100%;
              height: 100%;
              border: none;
            }
          </style>
          <iframe sandbox="allow-same-origin allow-scripts allow-popups" src="${src}"></iframe>
        `;
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

  customElements.define('safeiframe-element', SafeIFrameElement);
