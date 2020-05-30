import React from 'react'

export default props => {

    const rows = props.tasklist.map(task => {
        return (
            <tr key={task.id}>
                <td>{task.titulo}</td>
                <td>{task.status}</td>
                <td>{task.descricao}</td>
                <td>{task.criacao}</td>
                <td>{task.edicao}</td>
                <td>{task.conclusao}</td>
                <td>{task.remocao}</td>
                <td>
                    <button type="button" 
                            className="btn btn-success">
                                Editar
                    </button>
                    <button type="button" 
                            className="btn btn-danger">
                                Deletar
                            </button>
                </td>
                <td></td>
            </tr>
        )
    })
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Título</th>
                    <th scope="col">Status</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Criação</th>
                    <th scope="col">Edição</th>
                    <th scope="col">Conclusão</th>
                    <th scope="col">Remoção</th>
                    <th scope="col">Ação</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}