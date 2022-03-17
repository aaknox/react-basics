import React, { Component } from "react";

export default class Pokemon extends Component{
    constructor(props){
        super(props);
        this.state = {
            pokeInfo: [],
            gotPokeData: false
        };
        this.catchPokemon = this.catchPokemon.bind(this);
    }

    catchPokemon(){
        fetch("https://pokeapi.co/api/v2/pokemon/gengar")
            .then((result) => result.json())
            .then((json) => {
                console.log(json);
                this.setState({
                    pokeInfo: [json.sprites.front_default, json.name, json.id],
                    gotPokeData: true
                })
            })
    }

    render(){
        return(
            <div>
                <button onClick={this.catchPokemon}>Get Pokemon Info</button>
                {this.state.gotPokeData ? <span style={{textTransform: "capitalize", fontWeight: "bold"}}><img style={{margin: "0 auto", width: "300px", height: "300px", display: "block"}} src={this.state.pokeInfo[0]}/><br/>Name - {this.state.pokeInfo[1]}<br />ID: {this.state.pokeInfo[2]}</span> : <h2>No info rendered</h2>}
            </div>
        );
    }
}