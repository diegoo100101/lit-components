import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface IPokemonResponse {
  count?: number;
  next?: string;
  previous?: any;
  results?: IPokemonInfo[];
}

export interface IPokemonInfo {
  name?: string;
  url?: string;
}

@customElement("api-component")
export class ApiComponent extends LitElement {

    static readonly styles = css`
        ul {
            list-style-type: circle;
        }

        div {
            display: flex;
            justify-content: center;    
        }
    `

    @property({
        type: Object
    })
    pokemonResponse: IPokemonResponse = {};
    
    private readonly url: string = "https://pokeapi.co/api/v2/pokemon";
    
    getInfo = () => {
        fetch(this.url, {method: "GET"})
        .then((response) => response.json())
        .then((result) => 
            this.pokemonResponse = { ...result }
        );
    }

    constructor() {
        super();
        this.getInfo();
    }

    render() {
        return html`
        <div>
            <img src="src/assets/pokeball.svg" width="40">
            <h1>Pokémon en API:</h1>
        </div>
        <ul>
            ${this.pokemonResponse.results?.map((pokemon) => html`<li>${pokemon.name}</li>`)}
        </ul>
        `
    }
}