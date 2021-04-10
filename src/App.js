import './App.css';
import Board from './components/Board'
import BoardItem from './components/BoardItem'
import { useState } from 'react'

const App = props => {
  const [children, changeChildren] = useState(0);
  const [amt, changeAmt] = useState(0);

  const onAddChild = () => {
    changeAmt(amt+1);
    changeChildren(children + 1);
  }

  let boards = [];
  for (let i = 0; i < children; i++) {
    boards.push(<BoardItem amt={amt} key={i}></BoardItem>);
  }

  return (
    <div>
      <div className="card">
        <div onClick={onAddChild} className="src">
          Permanent
        </div>
      </div>
    {/*   <div className=" board-main"> */}
        <Board tiles={boards}></Board>
      {/* </div> */}
    </div>
  );
}

export default App;
