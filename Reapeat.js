 class RepeatElement extends HTMLElement {
    connectedCallback() {
      const src = this.getAttribute('src');
      const template = this.innerHTML;

      if (src && template) {
        fetch(src)
          .then(response => response.json())
          .then(data => {
            data.forEach(item => {
              const element = document.createElement('div');
              element.innerHTML = template.replace(/\{(\w+)\}/g, (_, key) => item[key] || '');
              this.appendChild(element.firstChild);
            });
          })
          .catch(error => {
            console.error(`Failed to load data from: ${src}`, error);
          });
      }
    }
  }

  customElements.define('repeat-element', RepeatElement);
