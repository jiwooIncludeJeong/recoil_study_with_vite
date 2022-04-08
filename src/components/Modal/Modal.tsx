import React, {ChangeEvent, KeyboardEventHandler, useEffect, useState} from 'react';
import Presenter from "./Presenter";
import {postTodoListAPI} from "../../api/todo";
import {useSetRecoilState} from "recoil";
import {TodoType} from "../../interface/todo";
import {todoListAtom} from "../../recoils/atom";

interface Props {
    close:()=>void;
}

const Modal: React.FC<Props> = props => {
    const {close} = props;

    const [text, setText] = useState<string>('');
    const setList = useSetRecoilState(todoListAtom);

    const onChange = (e: ChangeEvent<HTMLInputElement>)=>{
        setText(e.target.value)
    }

    const onClickSubmit = async () => {
        if(text.length>0){
            const newItem:TodoType = {id:new Date().getTime(), content:text, isCompleted:false}
        const res = await postTodoListAPI(newItem)
        if(res){
            setList(prev=>{
                if(prev){
                    return [...prev,newItem]
                }else{
                    return prev;
                }
            })
            close();
        }
        }else{
            alert('문자를 입력하여주세요.')
        }
    }

    const onKeyPress:KeyboardEventHandler<HTMLInputElement>=(e)=>{
        if(e.key==='Enter'){
            onClickSubmit();
        }
    }

    useEffect(()=>{
        const bodyLock = () => {
            window.document.body.style.overflow = 'hidden';
        };

        const bodyUnlock = () => {
            window.document.body.style.overflow = 'unset';
        };

        bodyLock();

        return () => {
            bodyUnlock();
        }
    },[])


    return <Presenter close={close} onChange={onChange} onClickSubmit={onClickSubmit} onKeyPress={onKeyPress}/>;
}

export default Modal;
