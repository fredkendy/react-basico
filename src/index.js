// Importar módulos 
import React from 'react';
import ReactDOM from 'react-dom';

// Componente (transformar classe em componente)
class MeuComponente extends React.Component{
    render() {
        return <h1>Meu primeiro componente</h1>;
    }
}

//Render (chamando componente no root)
ReactDOM.render(<MeuComponente />, document.getElementById('root'));
