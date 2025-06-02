import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import "./api-component";
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

        .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: white;
            padding: 20px 50px 50px 50px;
            border-radius: 5px;
        }
    `

    render() {
        return html`
            <header-component></header-component>
                <div class="body-component">
                    <div class="card">
                        <api-component></api-component>
                    </div>
                </div>
            <footer-component></footer-component>
        `;
    }
}