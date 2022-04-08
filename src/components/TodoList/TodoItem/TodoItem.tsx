import React, {MouseEventHandler} from 'react';
import Presenter from "./Presenter";
import {TodoType} from "../../../interface/todo";
import {deleteTodoListAPI, patchTodoListAPI} from "../../../api/todo";
import {useRecoilValueLoadable, useSetRecoilState} from "recoil";
import {todoListAtom} from "../../../recoils/atom";
import {todoQuery} from "../../../recoils/selector";

interface Props {
    todo:TodoType;
}

const TodoItem: React.FC<Props> = props => {
    const {todo} = props;

    const setTodoList = useSetRecoilState(todoListAtom)
    const getTodoItem = useRecoilValueLoadable(todoQuery(todo.id));

    const onClickX:MouseEventHandler<HTMLParagraphElement> = async (e) =>{
        e.stopPropagation();
        const res = await deleteTodoListAPI(todo.id);
        if(res){
            setTodoList(prev=>{
                return prev.filter(value => value.id !== todo.id);
            })
        }
    }

    const onClickComplete:MouseEventHandler<HTMLDivElement> = async (e) => {
        e.stopPropagation();
        const res = await patchTodoListAPI(todo.id, {isCompleted:!todo.isCompleted});
        if(res){
            setTodoList(prev=>{
                const arr:Array<TodoType> = [];
                const findIndex = prev.findIndex(value => value.id===todo.id);
                Object.assign(arr,prev);
                const newItem:TodoType = {...arr[findIndex], isCompleted:!todo.isCompleted};
                arr.splice(findIndex, 1, newItem);
                return arr;

            })
        }
    }

    const onClickItem = async() => {
        const res = getTodoItem;
        if(res.state === "hasValue"){
            console.log(res.contents)
        }

    }

    return <Presenter {...props} onClickX={onClickX} onClickComplete={onClickComplete} onClickItem={onClickItem}/>;
}

export default TodoItem;
