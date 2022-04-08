import React, {ChangeEvent, KeyboardEventHandler} from 'react';
import styled from "styled-components";

interface Props {
    close:()=>void;
    onChange:(e: ChangeEvent<HTMLInputElement>)=>void;
    onClickSubmit:()=>void;
    onKeyPress:KeyboardEventHandler<HTMLInputElement>
}

const Presenter: React.FC<Props> = props => {
    const {close, onChange, onClickSubmit, onKeyPress} = props;
    return <Wrapper onClick={close}>
        <InnerContent
            onClick={(e)=>e.stopPropagation()}
            onChange={onChange}
            onKeyPress={onKeyPress}
        >
            <TextInput/>
            <Submit onClick={onClickSubmit}>
                <p style={{color:'white'}}>제출</p>
            </Submit>
        </InnerContent>
    </Wrapper>;
}

const Wrapper = styled.div`
  position: absolute;
  top:0;
  width: 100vw;
  height:100vh;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:0 36px;
  background-color: rgba(0,0,0,0.4); 
`;

const InnerContent = styled.div`
  width: 100%;
  padding:24px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  @media only screen and (min-width: 375px) {
    max-width: 325px;
  }
`;

const TextInput= styled.input`
font-size: 18px;
`;
const Submit = styled.div`
  height: 100%;
  padding: 0 24px;
  background-color: dodgerblue;
  cursor: pointer;
`;
export default Presenter;
