import {atom} from 'recoil';
import {TodoType} from "../interface/todo";

export const todoListFilterState = atom< 'Show All' | 'Show Completed' | 'Show Uncompleted' >({
  key:'todoListFilterState',
  default:'Show All',
})

export const todoListAtom = atom<Array<TodoType>>({
  key:'todoListAtom',
  default: []
})
