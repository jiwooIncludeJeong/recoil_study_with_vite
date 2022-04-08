import './App.css';
import { RecoilRoot } from 'recoil';
import TodoList from './components/TodoList';
import Filter from "./components/Filter";

function App() {
  return (
    <RecoilRoot>
        <Filter/>
        <TodoList />
    </RecoilRoot>
  );
}

export default App;
