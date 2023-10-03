// Importando módulos
import React from 'react';
import ReactDOM from 'react-dom';
import './estilos.css';

// Componente
class MeuComponente extends React.Component {

    render() {

        const estilo = {
            color: 'blue',
            borderBottom: 'solid 5px green'
        }

        return(
            <div>
                <h1 style={{color: 'red', backgroundColor: 'gray'}}>CSS Interno (inline)</h1>
                <h1 style={estilo}>CSS através de variáveis e constantes</h1>
                <h1 className='minhaClasse'>CSS através de classes</h1>
            </div>
        )

    }
        
}

ReactDOM.render(<MeuComponente />, document.getElementById('root'));