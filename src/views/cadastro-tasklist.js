import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import SelectMenu from '../components/selectMenu'
import LancamentosTable from './task/taskTable'

class CadastroTasklist extends React.Component {

    render(){
        const status = [
            {label: 'Selecione...', value: ''},
            {label: 'Andamento', value: 'ANDAMENTO'},
            {label: 'Concluido', value: 'CONCLUIDO'},
            {label: 'Cancelado', value: 'CANCELADO'}
        ]

        const tasklist = [
            {id: 1, titulo: 'Projeto java', status: 'ANDAMENTO', descricao: 'API REST com Spring boot', criacao: '30/05/2020', edicao: '30/05/2020', conclusao: '30/05/2020', remocao: '30/05/2020'}
        ]

        return (
            <Card title="Cadastro de tarefas">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputTitulo" label="Título: *">
                                <input type="text" className="form-control" 
                                    id="inputTitulo" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Digite o Título"/>
                            </FormGroup>
                            <FormGroup htmlFor="inputStatus" label="Status: *">
                                <SelectMenu id="inputStatus" className="form-control" lista={status}/>
                            </FormGroup>
                            <FormGroup htmlFor="inputDescricao" label="Descrição: ">
                                <input type="text" className="form-control" 
                                    id="inputDescricao" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Digite a descrição"/>
                            </FormGroup>

                            <button type="button" className="btn btn-success">Cadastrar</button>

                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <LancamentosTable tasklist={tasklist}/>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default CadastroTasklist;