// Importando módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class MeuComponente extends React.Component {
    
    // Função
    minhaFuncao = (e) => {                  //e seria o form
        e.preventDefault();                 //n dá o refresh após submit 
        alert('Testando evento onSubmit');
    }

    // Render
    render() {
        return(
            <form onSubmit={this.minhaFuncao} action='http://www.ralflima.com'>
                <input type='submit' />
            </form>
        );
    }

}

ReactDOM.render(<MeuComponente />, document.getElementById('root'));