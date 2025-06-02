import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import "./login-component";
import "./header-component";
import "./footer-component";

@customElement('main-component')
export class MainComponent extends LitElement {
    static readonly styles = css`
        .body-component {
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
        }
    `

    render() {
        return html`
            <header-component></header-component>

            <div class="body-component">
                <login-component></login-component>
            </div>
            
            <footer-component></footer-component>
        `;
    }
}