import React, {useState} from 'react';
import Presenter from "./Presenter";
import {useRecoilValue} from "recoil";
import {filteredTodoListState} from "../../recoils/selector";
import useTodoList from "../hooks/useTodoList";

interface Props {
}

const TodoList: React.FC<Props> = props => {
    const {} = props;

    useTodoList();

    const res = useRecoilValue(filteredTodoListState);
    const [modal, setModal] = useState<boolean>(false);

    const openModal=()=>{
        setModal(true)
    }
    const closeModal=()=>{
        setModal(false)
    }

    const onClickAdd = () => {
        openModal();
    }

    return <Presenter modal={modal} list={res ?? []} onClickAdd={onClickAdd } closeModal={closeModal}/>;
}

export default TodoList;
