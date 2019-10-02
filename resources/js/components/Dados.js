import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class Dados extends Component {

    constructor(){
        super();
        this.state={
            dados:[],
        }
        console.log(super());
    }

    UNSAFE_componentWillMount(){


        axios.get('/api/Dados').then(response =>{

            this.setState({
                dados:response.data
            });
        }).catch(error =>{
            console.log(error);
        })
    }
    render() {
        return (

            <div className="container mt-4">

<div className="card" >
<div className="card-header text-center">
    Dados Cadastrados
  </div>

  <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Nome</th>
      <th scope="col">Telefone</th>
      <th className="text-center" scope="col">Como nos conheceu</th>
      
      <th scope="col">Redes Sociais</th>
    </tr>
  </thead>
  <tbody>
  {this.state.dados.map(dados =><tr>
        <th scope="row">{dados.id}</th>
        <td>{dados.nome}</td>
        <td>{dados.telefone}</td>
        <td className="text-center">{dados.conheceu}</td>
        <td>{dados.rede!=null ? dados.rede : "Não possui redes sociais" }</td>
        </tr> )}
    
      
   
  </tbody>
</table>
  
  
  
</div>
                
            </div>
        );
    }
}



