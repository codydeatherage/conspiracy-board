import './App.css';
import Board from './components/Board'
import BoardItem from './components/BoardItem'
import StringAnim from './components/StringAnim'
import Canvas from './components/Canvas'
import { useState } from 'react'
import dining2 from './assets/dining2.svg'
const App = props => {
  const [children, changeChildren] = useState(0);
  const [amt, changeAmt] = useState(0);

  const onAddChild = () => {
    changeAmt(amt+1);
    changeChildren(children + 1);
  }

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    /* ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI) */
    ctx.moveTo(10, 10);
    ctx.lineTo(10, 2);
    ctx.lineTo(2, 10);
    ctx.closePath();
    ctx.stroke();
    ctx.fill()
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
        {}{/* 
        <Canvas draw={draw}></Canvas> */}
      </div>
      
      <img className="dining" src={dining2} alt=""></img>
    {/*   <div className=" board-main"> */}
        <Board tiles={boards}></Board>
      {/* </div> */}
    </div>
  );
}

export default App;
