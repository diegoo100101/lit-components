import { css, html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";

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
      `;
    
    @query("#user")
    _userInput!: HTMLInputElement;
    
    @query("#password")
    _passwordInput!: HTMLInputElement;

    @property({
        type: Boolean
    })
    _ocultoNoValido = true;

    @property({
        type: Boolean
    })
    _ocultoValido = true;

    render() {
        return html`
            <div class="card">
                <h1>Login</h1>
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
                    <span ?hidden=${this._ocultoNoValido}>
                        Los campos no son válidos
                    </span>

                    <span ?hidden=${this._ocultoValido} class="span-valido">
                        Los campos son válidos
                    </span>
                </div>
            </div>
            `;
    }

    private _enviar() {
        let user = this._userInput.value;
        let password = this._passwordInput.value;
        let userLocalStorage = localStorage.getItem("user");
        let passwordLocalStorage = localStorage.getItem("password");

        if(user && password && user === userLocalStorage && password === passwordLocalStorage){
            this._ocultoNoValido = true;
            this._ocultoValido = false;
            console.log("Autenticado correctamente");
        }
        else{
            this._ocultoNoValido = false;
            this._ocultoValido = true;
            console.log("No válido");
        }
    }
}