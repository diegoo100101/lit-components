import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("header-component")
export class HeaderComponent extends LitElement {
    static readonly styles = css`
                header {
                    display: flex;
                    justify-content: center;
                    background-color: rgb(99, 20, 20);
                    color: white;
                }
            `

    render() {
        return html`
                <header>
                    <h1>¡Bienvenido, ${localStorage.getItem("user")}!</h1>
                </header>
            `
    }
}