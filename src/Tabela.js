// Importar módulo
import React from 'react';

// Componente
class Tabela extends React.Component{

    // Render
    render() {
        return(
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.dados.map((item, indice) => {
                        return(
                            <tr key={indice}>
                                <td>{item.nome}</td>
                                <td>{item.idade}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

}

// Exportar
export default Tabela;