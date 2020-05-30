import ApiService from '../apiService'

class TasklistService extends ApiService {

    constructor(){
        super('/api/task');
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
        return this.post(`/${id}`, tasklist);
    }

}

export default TasklistService;