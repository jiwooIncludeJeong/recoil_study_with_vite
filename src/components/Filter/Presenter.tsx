import React from 'react';
import styled from "styled-components";
import FilterItem from "./FilterItem";

interface Props {
    filter : 'Show All' | 'Show Completed' | 'Show Uncompleted';
    onClickShowAll:()=>void;
    onClickShowCompleted:()=>void;
    onClickShowUncompleted:()=>void;
}

const Presenter: React.FC<Props> = props => {
    const {filter, onClickShowAll, onClickShowCompleted, onClickShowUncompleted} = props;
    return <Wrapper>
        <FilterItem isSelected={filter==='Show All'} text={'전체보기'} onClick={onClickShowAll}/>
        <FilterItem isSelected={filter==='Show Completed'} text={'완료만 보기'} onClick={onClickShowCompleted}/>
        <FilterItem isSelected={filter==='Show Uncompleted'} text={'미완료만 보기'} onClick={onClickShowUncompleted}/>
    </Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  padding:24px;
`;

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
