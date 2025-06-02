import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("footer-component")
export class FooterComponent extends LitElement {
    static readonly styles = css`
        footer {
            display: flex;
            justify-content: center;
            background-color: rgb(99, 20, 20);
            color: white;
            
        }
    `

    render() {
        return html`
            <footer>
                <h3>
                    Lit Pokémon Components App
                </h3>
            </footer>
        `;
    }
}