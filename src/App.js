import './App.css';
import BoardItem from './components/BoardItem'
import { useState } from 'react'

const App = (props) => {
  const [children, changeChildren] = useState(0);

  const onAddChild = () => {
    changeChildren(children + 1);
  }

  let boards = [];
  for (let i = 0; i < children; i++) {
    boards.push(<BoardItem key={i}></BoardItem>);
  }

  return (
    <div>
      <div className="layoutRoot">
        <div onClick={onAddChild} className="src">
          Permanent
        </div>


      </div>
      <div className="card">
        {boards}
      </div>
    </div>
  );
}

export default App;
