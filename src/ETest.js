// import { getClass } from "./getClass.mjs";

window.addEventListener('load', main);

function getClass() {
  class Base extends HTMLElement {
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
  return Base;
}

customElements.define('e-test', getClass());

function main() {
  const btn = document.querySelector('#btn');
  const eTest1 = document.querySelector('#e-test-1');

  
}
