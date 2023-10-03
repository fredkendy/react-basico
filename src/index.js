// Importando módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class MeuComponente extends React.Component {

    // Construtor
    constructor(props) {
        super(props);

        this.state = {texto: this.props.textoInicial};
    }

    // Função (toda vez que mudar o input, vai atualizar o state)
    minhaFuncao = (e) => {
        this.setState({texto: e.target.value});
    }

    // Render
    render() {
        return(
            <div>
                <h1>{this.state.texto}</h1>
                <input type='text' onChange={this.minhaFuncao} value={this.state.texto} />
            </div>
        );
    }

}

// Render
ReactDOM.render(<MeuComponente textoInicial='Digite algo...' />, document.getElementById('root'));