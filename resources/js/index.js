import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dados from './components/Dados';
import {BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom';
import Example from './components/Example';
import DadosPessoa from './components/DadosPessoa';

import DadosPost from './components/DadosPost';
import Header from './components/header';

export default class Index extends Component {
    render() {
        return (
            <div >
              <Router>
                <div>
                <Header />
                    
                    <Route path="/" exact component={Example}/>
                    
                    <Route path="/Dados" exact component={Dados}/>
                    
                    
                    <Route path="/post-dados" exact component={DadosPost}/>
                    <Route path="/Dados/:id" exact render={props => <DadosPessoa {...props}  /> }     />
                </div>

              </Router>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
