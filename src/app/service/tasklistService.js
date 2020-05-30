import ApiService from '../apiService'

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

}

export default TasklistService;