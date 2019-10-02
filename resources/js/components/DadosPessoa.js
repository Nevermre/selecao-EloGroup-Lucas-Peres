import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class DadosPessoa extends Component {

   constructor (props){
    super(props);
    this.state={
        post: {}
    };

   }
   componentDidMount(){

    axios.get("/api/Dados/"+ this.props.match.params.id).then(response =>{
        console.log(axios.get("/api/Dados/"+ this.props.match.params.id));
        this.setState({
            post : response.data[0]
        });
    }).catch(error => console.log(error));

   }
    render() {
        console.log("/api/Dados/" + this.props.match.params.id);
        if(this.state.post){ 
            return (
                
                <div className="container">
                <h1> {this.state.post.nome}</h1>
                <p>{this.state.post.telefone}</p>
                <p>{this.state.post.conheceu}</p>
                
                </div>

            );
        }
        else{
            return null;
        }
     
     
    }
}


