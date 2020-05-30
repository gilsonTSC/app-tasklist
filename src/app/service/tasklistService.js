import ApiService from '../apiService'
import ErroValidacao from '../exception/ErroValidacao'

class TasklistService extends ApiService {

    constructor(){
        super('/api/task');
    }

    obterListStatus(){
        return [
            {label: 'Selecione...', value: ''},
            {label: 'Andamento', value: 'ANDAMENTO'},
            {label: 'Concluido', value: 'CONCLUIDO'},
            {label: 'Cancelado', value: 'CANCELADO'}
        ];
    }

    buscarPorId(id){
        return this.get(`/${id}`);
    }

    buscarTodos(){
        return this.get('/');
    }

    cadastrar(tasklist){
        return this.post('/', tasklist);
    }

    deletar(id){
        return this.delete(`/${id}`);
    }

    atualizar(id, tasklist){
        return this.put(`/${id}`, tasklist);
    }

    validar(task){
        const erros = [];

        if(!task.titulo){
            erros.push('O preenchimento do campo Título é obrigatório.');
        }
        if(!task.status){
            erros.push('O preenchimento do campo Status é obrigatório.');
        }

        if(erros && erros.length > 0){
            throw new ErroValidacao(erros);
        }
    }

}

export default TasklistService;