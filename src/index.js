// Importando módulos
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class MeuComponente extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        //Pensar no state como uma variável dinâmica. Vincular com input para ao alterar o input, alterar o state em tempo real
        this.state = {
            nome: '', 
            idade: null
        }
    }

    // Função
    funcaoNome = (campo) => {
        this.setState({nome: campo.target.value});  //target e value são atributos reservados do navegador
    }

    funcaoIdade = (campo) => {
        this.setState({idade: campo.target.value});
    }

    // Render
    render() {
        return(
            <form>
                <input type='text' placeholder='Nome' onChange={this.funcaoNome} /> <br/><br/>
                <input type='number' placeholder='Idade' onChange={this.funcaoIdade} />

                <p>{this.state.nome}</p>
                <p>{this.state.idade}</p>
            </form>
        );
    }

}

ReactDOM.render(<MeuComponente />, document.getElementById('root'));