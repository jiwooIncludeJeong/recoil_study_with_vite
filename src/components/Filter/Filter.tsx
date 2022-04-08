import React from 'react';
import Presenter from "./Presenter";
import {useRecoilState} from "recoil";
import {todoListFilterState} from "../../recoils/atom";

interface Props {
}

const Filter: React.FC<Props> = props => {
    const {} = props;

    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const onClickShowAll = () => {
        setFilter("Show All")
    }
    const onClickShowCompleted = () => {
        setFilter("Show Completed")
    }
    const onClickShowUncompleted = () => {
        setFilter("Show Uncompleted")
    }

    return <Presenter filter={filter} onClickShowAll={onClickShowAll} onClickShowCompleted={onClickShowCompleted} onClickShowUncompleted={onClickShowUncompleted}></Presenter>;
}

export default Filter;
