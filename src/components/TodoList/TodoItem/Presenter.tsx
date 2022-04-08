import React, {MouseEventHandler} from 'react';
import {TodoType} from "../../../interface/todo";
import styled from "styled-components";

interface Props {
    todo:TodoType;
    onClickComplete:MouseEventHandler<HTMLDivElement>;
    onClickX:MouseEventHandler<HTMLParagraphElement>;
    onClickItem : MouseEventHandler<HTMLDivElement>;
}

const Presenter: React.FC<Props> = props => {
    const {todo, onClickX, onClickComplete, onClickItem} = props;
    return <Wrapper onClick={onClickItem}>
        <CheckBox isCompleted={todo.isCompleted} onClick={onClickComplete}/>
        <p>{todo.content}</p>
        <X onClick={onClickX}>X</X>
    </Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CheckBox = styled.div<{isCompleted:boolean}>`
  width: 16px;
  height:16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 5px solid black;
  background-color: ${props => props.isCompleted?'black':'white'};
  margin-right: 12px;
`;

const X = styled.p`
  cursor: pointer;
  color: red;
  margin-left: 8px;
`;

export default Presenter;
