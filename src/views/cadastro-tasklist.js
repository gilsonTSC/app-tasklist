import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import SelectMenu from '../components/selectMenu'
import TaskTable from './task/taskTable'
import {mensagemSucesso, mensagemErro} from '../components/toastr'

import TasklistService from '../app/service/tasklistService'


class CadastroTasklist extends React.Component {

    state = {
        id: '',
        titulo: '',
        status: '',
        descricao: '',
        task: [],
        atualizando: false
    }

    constructor(){
        super();
        this.service = new TasklistService();
    }

    componentDidMount(){
        console.log(this.state.id)
    }

    cadastrar = () => {
        const {titulo, status, descricao} = this.state;
        const taskfiltro = {titulo, status, descricao}
        try{
            this.service.validar(taskfiltro);
        }catch(erro){
            const msgs = erro.mensagens;
            msgs.forEach(msg => mensagemErro(msg));
            return false;
        }

        this.service.cadastrar(taskfiltro)
            .then(response => {
                mensagemSucesso('Cadastado com sucesso');
            }).catch(error => {
                mensagemErro(error.response.data);
            })
    }

    buscarTodos = () => {
        this.service.buscarTodos()
            .then(response => {
                this.setState({task: response.data})
            }).catch(error => {
                mensagemErro(error.response.data);
            })
    }

    editar = (id) => {
        this.service.buscarPorId(id)
            .then(response => {
                this.setState({...response.data, atualizando: true})
            }).catch(error => {
                mensagemErro(error.response.data);
        })
    }

    deletar = (id) => {
        this.service.deletar(id)
            .then(response => {
                mensagemSucesso('Deletado com sucesso');
                this.buscarTodos();
            }).catch(error => {
                mensagemErro(error.response.data);
            })
    }

    atualizar = () => {
        const {id, titulo, status, descricao} = this.state;
        const task = {id, titulo, status, descricao};

        this.service.atualizar(id, task).then(response => {
            mensagemSucesso('Atualziado com sucesso');
            this.setState({atualizando: false})
            this.buscarTodos();
        }).catch(error => {
            mensagemErro(error.response.data);
        })
    }

    cancelar = () => {
        this.setState({atualizando: false})
    }

    render(){
        const status = this.service.obterListStatus();

        return (
            <Card title={this.state.atualizando ? 'Atualização de Tarefa' : 'Cadastro de Tarefa'}>
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
                            {
                                this.state.atualizando ? 
                                    (
                                        <>
                                            <button onClick={this.atualizar} type="button" className="btn btn-success">Atualizar</button>
                                            <button onClick={this.cancelar} type="button" className="btn btn-danger">Cancelar</button>
                                        </>
                                    ) : (
                                        <button onClick={this.cadastrar} type="button" className="btn btn-success">Cadastrar</button>
                                    )
                            }
                            <button onClick={this.buscarTodos} type="button" className="btn btn-success">Buscar</button>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <TaskTable tasklist={this.state.task} 
                                        editAction={this.editar}
                                        deleteAction={this.deletar}/>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default CadastroTasklist;