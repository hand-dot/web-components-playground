class HelloWorld extends HTMLElement {
    connectedCallback () {
        this.innerHTML = 'hello, world!'
    }
}
customElements.define( 'hello-world', HelloWorld )
