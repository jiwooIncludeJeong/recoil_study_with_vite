import {selector, selectorFamily} from "recoil";
import {todoListAtom, todoListFilterState,} from "./atom";
import {getTodoAPI, getTodoListAPI} from "../api/todo";
import {TodoType} from "../interface/todo";

export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const list = get(todoListAtom);
        if(list){
        switch (filter) {
            case 'Show Completed':
                return list.filter((item) => item.isCompleted);
            case 'Show Uncompleted':
                return list.filter((item) => !item.isCompleted);
            default:
                return list;
        }
        } else{
            return null;
        }
    },
});

export const todoListState = selector<Array<TodoType>|null>({
    key:'todoListStates',
    get :async () => {
        const res = await getTodoListAPI();
        const {status} = res;
        if(status===200){
            return res.data;
        } else {
            return null;
        }
    }
})

export const todoQuery = selectorFamily({
    key:'todoQuery',
    get : (todoId) => async () => {
        const res = await getTodoAPI(todoId);
        const {status} = res;
        if(status === 200){
            return res.data;
        } else {
            return null;
        }
    }
})
