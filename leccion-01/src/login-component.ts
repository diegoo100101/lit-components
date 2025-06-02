import { css, html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";

import "./main-component";

@customElement("login-component")
export class LoginComponent extends LitElement {

    static readonly styles = css`
        .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: white;
            padding: 20px 50px 50px 50px;
            border-radius: 5px;
        }
        
        input {
            margin-bottom: 15px;
            border: none;
            border-bottom: 2px solid;
        }

        input:focus {
            outline: none;
        }

        .login-form { 
            display: flex;
            flex-direction: column;
        }

        button {
            margin-top: 10px;
            border: none;
            color: white;
            background-color: rgb(236, 78, 78);
            padding: 10px;
        }

        button:hover {
            background-color: rgb(0, 78, 78);
        }

        a {
            color: black;
            font-size: small;
        }

        .forgot {
            align-self: center;
        }

        span {
            font-size: small;
            color: red;
        }

        .span-valido {
            color: green;
        }

        .body-component {
            display: flex;
            height: 100vh;
            justify-content: center;
            align-items: center;
        }

        .login-message {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
      `;
    
    @query("#user")
    _userInput!: HTMLInputElement;
    
    @query("#password")
    _passwordInput!: HTMLInputElement;

    @property({
        type: Boolean
    })
    _esValido = false;

    @property({
        type: Boolean
    })
    _enviado = false;

    render() {
        return html`
            <div ?hidden=${this._esValido}>
                <div class="body-component">
                    <div class="card">
                        <div class="login-message">
                            <img src="src/assets/pokeball.svg" width="30">
                            <h1>Login</h1>
                        </div>
                        <div class="login-form">
        
                            <div>
                                <img src="src/assets/user.svg" width="20">
                                <input type="text" id="user" name="user" placeholder="username">
                            </div>
                            
                            <div>
                                <img src="src/assets/lock.svg" width="20">
                                <input type="password" id="password" name="password" placeholder="password">
                            </div>
                            <a href="#" class="forgot">
                                Forgot password?
                            </a>
                            <button @click=${this._enviar}>
                                Enviar
                            </button>
                            <span ?hidden=${this._enviado ? this._esValido : true}>
                                Los campos no son válidos
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div ?hidden=${!this._esValido}>
                <main-component></main-component>
            </div>
            `;
    }

    private _enviar() {
        let user = this._userInput.value;
        let password = this._passwordInput.value;
        let userLocalStorage = localStorage.getItem("user");
        let passwordLocalStorage = localStorage.getItem("password");
        this._enviado = true;

        if(user && password && user === userLocalStorage && password === passwordLocalStorage){
            this._esValido = true;
            console.log("Autenticado correctamente");
        }
        else{
            this._esValido = false;
            console.log("No válido");
        }
    }
}