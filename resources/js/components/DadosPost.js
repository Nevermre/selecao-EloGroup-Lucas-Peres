import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class DadosPost extends Component {

    constructor(){

        super();
        this.state ={
            nome:"",
            validn:false,
            
            telefone:'',
                validf:false,
            conheceu:'TV',
            possuirede:false,
                checked:false,
            
            quais:[]

        }
        
        


    }
    handleNomeChange(e){
        var valido;
        let t1;
        if (/\s/.test(e.target.value)) {
          valido=true;

        }
        else
            valido=false;

        this.setState({
            nome:e.target.value,
                validn:valido
           
        });
       

    }
    handleTelChange(e){
        
        var remove=e.target.value.replace(/\D/g,'');
        var valido;
        if(remove.length>10)
            remove=remove.slice(0,10);
        e.target.value=remove;
        console.log(remove);
        if(remove.length>2){ 
           
           
            e.target.value=remove.slice(0,2)+" - "+remove.slice(2);
        }
        console.log(remove.length);
        if(remove.length==10)
            valido=true;
        else
            valido=false;

        this.setState({
            telefone: e.target.value,
                validf:valido
           
        });
        

    }
    handleConheceuChange(e){

        this.setState({
            conheceu: e.target.value
        });

    }
    handleRedesChange(e){
        
        var redes = this.state.quais;
       
        
        var index;

        if (e.target.checked) {
            redes.push(e.target.value)
            console.log("checkou "+e.target.value);
            console.log(redes);
             
          } else {
            index = redes.indexOf(e.target.value)
            redes.splice(index, 1)
          }
        

        this.setState({
            quais: redes
        });
       console.log(this.state.quais);

    }

    handlePossuiChange(e){
        
        
        this.setState({
            possuirede: e.target.value,
                checked:true
        });

    }
    handleSubmit(e){

        
        console.log(this.state);
        axios.post('/api/Dados',this.state).then(response=>{

            


        }
            
            
            ).then(error=>{

                console.log(error);
            });

    }
    render() {
        return (
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Insira os dados da pessoa</div>

                            <div className="card-body">
                                
                                <form onSubmit={this.handleSubmit.bind(this)} action="/">
                                <div className="form-group">
    <label for="exampleInputEmail1">Nome e sobrenome</label>
                                    <input
                                     type="text" aria-describedby="emailHelp" className={this.state.validn?  "form-control border border-success" : "form-control border border-danger"}
                                     name="nome"
                                     placeholder="Nome"
                                     onChange={this.handleNomeChange.bind(this)}
                                     value={this.state.nome}
                                     />
                                     
                                     <label className="text-danger" for="exampleInputEmail1 "> {this.state.validn? ""  : "Digite ao menos um nome e um sobrenome" } </label>
                                </div>
                                <div className="form-group">
    <label for="exampleInputEmail1">Telefone</label>
                                <input
                                     type="text" name="telefone" aria-describedby="emailHelp" className={this.state.validf?  "form-control border border-success" : "form-control border border-danger"}
                                     placeholder="## - ########"
                                     onChange={this.handleTelChange.bind(this)}
                                     value={this.state.telefone} />
                                     <label className="text-danger" for="exampleInputEmail1 "> {this.state.validf? ""  : "O telefone deve conter 10 números" } </label>
                                    </div>
                                
                                    <div className="form-group">
    <label for="exampleInputEmail1">Como nos conheceu?</label>
                                
                                <select className="form-control"  onChange={this.handleConheceuChange.bind(this)}
                                     value={this.state.conheceu}>
                                     <option value="TV">TV</option>
                                     <option value="Internet">Internet</option>
                                     
                                     <option value="Outro">Outro</option>
                                     </select>
                                    </div>

                                    <div onChange={this.handlePossuiChange.bind(this)}>Possui Rede Social?
                                        <input type="radio" name="possui" value="1"/>Sim
                                        <input type="radio" name="possui" value="0"/>Não
                                        <label className="text-danger" for="exampleInputEmail1 "> {this.state.checked? ""  : "Selecione uma das opções" } </label>
                                    
                                
                                     
                                     
                                    </div>
                                    <div >Quais??
                                        <input type="checkbox" onChange={this.handleRedesChange.bind(this)}  disabled={this.state.possuirede==1 ? false : true} name="redes[]" value="Facebook"/>Facebook
                                        <input type="checkbox" onChange={this.handleRedesChange.bind(this)}  disabled={this.state.possuirede==1 ? false : true} name="redes[]" value="LinkedIn"/>LinkedIn
                                        
                                        <input type="checkbox" onChange={this.handleRedesChange.bind(this)} disabled={this.state.possuirede==1 ? false : true} name="redes[]" value="Instagram"/>Instagram
                                
                                     
                                     
                                    </div>
                                <div>
                                    
                                    <input className="btn btn-primary" disabled={(this.state.validn && this.state.validf && this.state.checked) ? false:true} type="submit" value="Cadastrar" />
                                </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

