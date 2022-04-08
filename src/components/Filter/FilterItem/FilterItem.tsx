import React from 'react';
import Presenter from "./Presenter";

interface Props {
    isSelected:boolean;
    text:string;
    onClick:()=>void;
}

const FilterItem: React.FC<Props> = props => {
    const {} = props;
    return <Presenter {...props}></Presenter>;
}

export default FilterItem;
