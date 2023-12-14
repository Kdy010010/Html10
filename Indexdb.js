class IndexedDBElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.render();
    }

    connectedCallback() {
      this.setupIndexedDB();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue && (name === 'dbname' || name === 'storename')) {
        this.setupIndexedDB();
      }
    }

    static get observedAttributes() {
      return ['dbname', 'storename'];
    }

    setupIndexedDB() {
      const dbname = this.getAttribute('dbname') || 'DefaultDatabase';
      const storename = this.getAttribute('storename') || 'DefaultStore';

      const request = window.indexedDB.open(dbname, 1);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(storename)) {
          db.createObjectStore(storename, { keyPath: 'id' });
        }
      };

      request.onsuccess = (event) => {
        const db = event.target.result;
        this.shadowRoot.querySelector('p').textContent = `Data stored in ${dbname}.${storename}`;

        // Here you can perform operations on the IndexedDB
      };

      request.onerror = (event) => {
        console.error(`Error opening IndexedDB: ${event.target.error}`);
      };
    }

    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
          }
        </style>
        <slot></slot>
      `;
    }
  }

  customElements.define('indexdb-element', IndexedDBElement);
