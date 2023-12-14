  class ProfileElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.render();
    }

    connectedCallback() {
      this.loadProfile();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue && name === 'img') {
        this.loadProfile();
      }
    }

    static get observedAttributes() {
      return ['img'];
    }

    loadProfile() {
      const img = this.getAttribute('img');

      if (img) {
        this.shadowRoot.innerHTML = `
          <style>
            :host {
              display: inline-block;
            }
            img {
              width: 100px;
              height: 100px;
              border-radius: 50%;
              object-fit: cover;
            }
          </style>
          <img src="${img}" alt="Profile Image">
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

  customElements.define('profile-element', ProfileElement);
