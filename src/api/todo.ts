import API from "./api";
import {TodoType} from "../interface/todo";

export const getTodoListAPI = async () => {
    try {
        const res = await API.get('todo/');
        return res;

    }catch (e:any) {
        return e.response;
    }
}
export const getTodoAPI = async (
    id:any
) =>{
    try {
        const res = await API.get(`todo/${id}`);
        return res;

    }catch (e:any) {
        return e.response;
    }
}
export const postTodoListAPI = async (body:TodoType) => {
    try {
        const res = await API.post('todo/', body);
        return res;

    }catch (e:any) {
        return e.response;
    }
}
export const deleteTodoListAPI = async (id:number) =>{
    try {
        const res = await API.delete(`todo/${id}`);
        return res;

    }catch (e:any) {
        return e.response;
    }
}
export const patchTodoListAPI = async (id:number, body:{isCompleted:boolean})=>{
    try {
        const res = await API.patch(`todo/${id}`,body);
        return res;

    }catch (e:any) {
        return e.response;
    }
}
