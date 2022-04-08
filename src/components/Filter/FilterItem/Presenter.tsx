import React from 'react';
import styled from "styled-components";

interface Props {
    isSelected:boolean;
    text:string;
    onClick:()=>void;
}

const Presenter: React.FC<Props> = props => {
    const {isSelected, text, onClick} = props;
    return <Btn isSelected={isSelected} onClick={onClick}>
        <Text color={isSelected ? 'white':'black'}>
            {text}
        </Text>
    </Btn>;
}
const Btn = styled.div<{isSelected:boolean}>`
  flex:1;
  margin-right: 12px;
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.isSelected?'black':'white'};
  
  p{
    text-align: center;
  }
  :last-child {
    margin-right: 0;
  }
`;
const Text = styled.p<{color?:string}>`
  color:${props => props.color??'black'};
`;
export default Presenter;
