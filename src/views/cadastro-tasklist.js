import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import SelectMenu from '../components/selectMenu'
import TaskTable from './task/taskTable'

import TasklistService from '../app/service/tasklistService'


class CadastroTasklist extends React.Component {

    state = {
        id: '',
        titulo: '',
        status: '',
        descricao: '',
        criacao: '',
        edicao: '',
        remocao: '',
        task: []
    }

    constructor(){
        super();
        this.service = new TasklistService();
    }

    cadastrar = () => {
        const taskfiltro = {
            titulo: this.state.titulo,
            status: this.state.status,
            descricao: this.state.descricao
        }
        this.service.cadastrar(taskfiltro)
            .then(response => {
                this.buscarTodos()
            }).catch(error => {
                console.log(error)
            })
    }

    buscarTodos = () => {
        this.service.buscarTodos()
            .then(response => {
                this.setState({task: response.data})
            }).catch(error => {
                console.log(error)
            })
    }

    editar = (id) => {
        console.log(id)
    }

    deletar = (id) => {
        console.log(id)
    }

    render(){
        const status = [
            {label: 'Selecione...', value: ''},
            {label: 'Andamento', value: 'ANDAMENTO'},
            {label: 'Concluido', value: 'CONCLUIDO'},
            {label: 'Cancelado', value: 'CANCELADO'}
        ]

        return (
            <Card title="Cadastro de tarefas">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputTitulo" label="Título: *">
                                <input type="text" className="form-control" 
                                    id="inputTitulo"
                                    value={this.state.titulo}
                                    onChange={e => this.setState({titulo: e.target.value})}
                                    placeholder="Digite o Título"/>
                            </FormGroup>
                            <FormGroup htmlFor="inputStatus" label="Status: *">
                                <SelectMenu id="inputStatus"
                                            value={this.state.status}
                                            onChange={e => this.setState({status: e.target.value})}
                                            className="form-control" 
                                            lista={status}/>
                            </FormGroup>
                            <FormGroup htmlFor="inputDescricao" label="Descrição: ">
                                <input type="text" className="form-control" 
                                    id="inputDescricao"
                                    value={this.state.descricao}
                                    onChange={e => this.setState({descricao: e.target.value})}
                                    placeholder="Digite a descrição"/>
                            </FormGroup>

                            <button onClick={this.cadastrar} type="button" className="btn btn-success">Cadastrar</button>

                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <TaskTable tasklist={this.state.task} 
                                              deleteAction={this.state.id}
                                              editAction={this.state.id}/>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default CadastroTasklist;