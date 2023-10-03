// Importando módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class MeuComponente extends React.Component {

    // Construtor
    constructor(props) {
        super(props);

        this.state = {exibir: false};
    }

    // Função
    alterarState = () => {
        let converter = !this.state.exibir;
        this.setState({exibir: converter});
    }

    // Render
    render() {

        // Condicional
        let meuTexto = '';
        if (this.state.exibir == true) {
            meuTexto = <h1>Olá</h1>
        } else {
            meuTexto = <h1>Tchau</h1>
        }

        return(
            <div>
                {meuTexto}
                <button onClick={this.alterarState}>Clique Aqui</button>
            </div>
        )
    }

}

ReactDOM.render(<MeuComponente />, document.getElementById('root'));