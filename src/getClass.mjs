export function getClass() {
  return class extends HTMLElement {
    #shadowTree = null;

    constructor() {
      super();
      this.#shadowTree = this.attachShadow({
        mode: 'closed',
      });
      this.#shadowTree.appendChild(
        document.querySelector('#test-template').content.cloneNode(true)
      );
    }
  };
}