// Importar módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class MeuComponente extends React.Component {
    
    //Função
    mensagem(nome) {
        alert('Olá ' + nome);
    }

    // Render
    render() {
        //this: NESSE COMPONENTE...
        //Enviando parametros com bind()
        return <button onClick={this.mensagem.bind(this, 'Fred')}>Clique aqui</button>;
    }

}

// Render
ReactDOM.render(<MeuComponente />, document.getElementById('root'));