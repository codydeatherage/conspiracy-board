import { Rnd } from 'react-rnd'
import { useState } from 'react'

const BoardItem = (props) => {
  /* const [children, changeChildren] = useState(0); */
  const [state, setState] = useState({
    width: 200,
    height: 200,
    x: 0,
    y: 0
  });


return (
  <div className="layoutRoot">
    <Rnd
      className="bg-dark"
      size={{ width: state.width, height: state.height }}
      position={{ x: state.x, y: state.y }}
      onDragStop={(e, d) => { setState({ x: d.x, y: d.y }) }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setState({
          width: ref.style.width,
          height: ref.style.height,
          ...position,
        });
      }}
    >
      001
      </Rnd>
  </div>
);
}

export default BoardItem;
