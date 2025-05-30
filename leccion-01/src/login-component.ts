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
      `;
    
    @query("#user")
    userInput!: HTMLInputElement;
    
    @query("#password")
    passwordInput!: HTMLInputElement;

    @property({
        type: Boolean
    })
    oculto = true;

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
                    <span ?hidden=${this.oculto}>
                        Los campos no son válidos
                    </span>
                </div>
            </div>
            `;
    }

    private _enviar() {
        let user = this.userInput.value;
        let password = this.passwordInput.value;

        if(user && password){
            this.oculto = true;
            console.log("Usuario: " + user + "\nContraseña: " + password);
        }
        else{
            this.oculto = false;
            console.log("No válido");
        }
    }
}