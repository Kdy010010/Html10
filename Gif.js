  class GifElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.render();
    }

    connectedCallback() {
      this.loadGif();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue && name === 'src') {
        this.loadGif();
      }
    }

    static get observedAttributes() {
      return ['src'];
    }

    loadGif() {
      const src = this.getAttribute('src');

      if (src) {
        this.shadowRoot.innerHTML = `
          <style>
            :host {
              display: inline-block;
            }
            img {
              width: 100%;
              height: auto;
            }
          </style>
          <img src="${src}" alt="GIF">
        `;
      }
    }

    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;
          }
        </style>
      `;
    }
  }

  customElements.define('gif-element', GifElement);
