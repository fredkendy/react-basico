// Importando módulos
import React from 'react';

// Importar tabela
import Tabela from './Tabela';

// Importar formulario
import Formulario from './Formulario';

// Componente
class Principal extends React.Component {

    // Construtor
    constructor(props) {
        super(props);

        this.state = {
            nome: '', 
            idade: '',  //não usou null para não dar erro (input não aceita null ao limpar o campo)
            vetor: []
        };

    }

    // Função ao digitar (onchange)
    aoDigitar = (e) => {
        this.setState({[e.target.name]: e.target.value}); //onChange dinamico
    }

    // Função de clique (onSubmit)
    aoClicar = (e) => {         //e = botão
        e.preventDefault();
        
        var copiaVetor = [...this.state.vetor]; //pega as infos de um vetor e passa para outro (n precisa de laço)

        //Adiciona um novo objeto no vetor como JSON
        copiaVetor.push({
            'nome': this.state.nome, 
            'idade': this.state.idade
        });

        //Atualiza o vetor
        this.setState({vetor: copiaVetor});

        //Limpa os campos
        this.setState({
            nome: '', 
            idade: ''
        });
    }

    // Render
    render() {
        return(
            <div>
                {/* campoNome e campoIdade servem para limpar dados do formulario via props */}
                <Formulario campoNome={this.state.nome} campoIdade={this.state.idade} funcaoBotao={this.aoClicar} funcaoCampo={this.aoDigitar} />
                <Tabela dados={this.state.vetor} />
            </div>
        );
    }

}

// Exportar componente
export default Principal;