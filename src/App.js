import './App.css';
import BoardItem from './components/BoardItem'
import { useState } from 'react'

const App = (props) => {
  const [children, changeChildren] = useState(0);
  const [state, setState] = useState({
    width: 200,
    height: 200,
    x: 0,
    y: 0
  });

const onAddChild = () => {
  changeChildren(children + 1);
}


const spawnBox = () => {
  return (
    <div className="src">
      Pqwerwefsdfsef
    </div>
  )
}
let boards = [];
for(let i = 0; i < children; i++){
  boards.push(<BoardItem key={i}></BoardItem>);
}

return (
  <div className="layoutRoot">
    <div onClick={onAddChild} className="src">
      Permanent
    </div>
    {boards}
  </div>
);
}

export default App;
