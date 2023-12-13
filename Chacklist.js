 class ChecklistElement extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            margin-bottom: 10px;
          }
          input {
            margin-right: 5px;
          }
        </style>
        <label>
          <input type="checkbox">
          <slot></slot>
        </label>
      `;

      this.checkbox = this.shadowRoot.querySelector('input');
      this.checkbox.addEventListener('change', this.handleCheckboxChange.bind(this));
    }

    connectedCallback() {
      // Retrieve value from localStorage when the element is added to the DOM
      const indexdbValue = this.getAttribute('indexdb');
      const storedValue = localStorage.getItem(indexdbValue);
      if (storedValue) {
        this.checkbox.checked = storedValue === 'yes';
      }
    }

    handleCheckboxChange() {
      const indexdbValue = this.getAttribute('indexdb');
      const isChecked = this.checkbox.checked;

      // Store the value in localStorage
      localStorage.setItem(indexdbValue, isChecked ? 'yes' : 'no');
    }
  }

  customElements.define('checklist-element', ChecklistElement);
