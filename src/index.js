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

    // Função para enviar dados para os states
    enviarParaState = (campo) => {
        this.setState({[campo.target.name]: campo.target.value});  //vai pegar o atributo name (do input) dinamicamente
    }

    // Render
    render() {
        return(
            <form>
                <input name='nome' type='text' placeholder='Nome' onChange={this.enviarParaState} /> <br/><br/>
                <input name='idade' type='number' placeholder='Idade' onChange={this.enviarParaState} />

                <p>{this.state.nome}</p>
                <p>{this.state.idade}</p>
            </form>
        );
    }

}

ReactDOM.render(<MeuComponente />, document.getElementById('root'));