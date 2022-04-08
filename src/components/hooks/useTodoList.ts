import {useEffect} from "react";
import {useRecoilValueLoadable, useSetRecoilState} from "recoil";
import {todoListState} from "../../recoils/selector";
import {todoListAtom} from "../../recoils/atom";

const useTodoList = () =>{
    const todoList = useRecoilValueLoadable(todoListState);
    const setTodoListAtom = useSetRecoilState(todoListAtom)
    useEffect(()=>{
        if(todoList.state === "hasValue" && todoList.contents){
            setTodoListAtom(todoList.contents)
        }
    },[todoList.state])
}

export default useTodoList;
