import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                        <div className="card-header">Pesquisa </div>

<div className="card-body">Olá, que tal cadastrar uns dados de onde nos conheceu?</div>
</div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
