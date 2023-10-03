// Importar módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class MeuComponente extends React.Component {
    
    //Função
    mensagem(nome) {
        alert('Olá ' + nome);
    }

    // Arrow Function
    minhaArrowFunction = (curso) => {
        alert('Estou fazendo o curso de ' + curso);
    }

    //Treinando onChange (capturando o que foi digitado)
    teclado = (e) => {                  //é criado um objeto no navegador
        console.log(e.target.value);    //value é uma propriedade de target do objeto
    }

    // Render
    render() {
        
        return(
            <div>
                <button onClick={this.mensagem.bind(this, 'Fred')}>Clique aqui</button>
                <button onClick={() => this.minhaArrowFunction('ReactJS')}>Arrow Function</button>

                <hr />

                <input type='text' onChange={this.teclado} />

            </div>
        ); 

    }

}

// Render
ReactDOM.render(<MeuComponente />, document.getElementById('root'));