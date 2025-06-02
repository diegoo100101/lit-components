import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";


@customElement("my-tester")
export class MyTester extends LitElement {
    render() {
        return html`<p>Hola</p>`
    }
}