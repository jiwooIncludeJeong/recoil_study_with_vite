import React from 'react';
import styled from "styled-components";
import {TodoType} from "../../interface/todo";
import TodoItem from "./TodoItem";
import Modal from "../Modal";

interface Props {
    list:Array<TodoType>
    onClickAdd:()=>void;
    closeModal:()=>void;
    modal:boolean;
}

const Presenter: React.FC<Props> = props => {
    const {list, closeModal, modal, onClickAdd} = props;
    return <Wrapper>
        {list.map(value => {
        return <TodoItem key={value.id} todo={value}/> })
        }
        <Add onClick={onClickAdd}>
            <p style={{color:'white'}}>추가하기</p>
        </Add>
        {modal && <Modal close={closeModal} />}
    </Wrapper>;
}

const Wrapper = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  height:100vh;
`;
const Add = styled.div`
  width: 100px;
  height:32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: dodgerblue;
  border-radius: 12px;
`;
export default Presenter;
