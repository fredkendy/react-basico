// Importando módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class MeuComponente extends React.Component {

    render() {

        // Vetor
        let cores = ['azul', 'amarelo', 'vermelho'];

        // Função: percorrer cada elemento
        let listar = cores.map((cor, index) => {
            return <li key={index}> {index} - {cor} </li> //chave garante que o elemento percorrido é único
        });

        return(
            <ul>
                {listar}
            </ul>
        )

    }
    
}

ReactDOM.render(<MeuComponente />, document.getElementById('root'));