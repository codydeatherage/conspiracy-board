import './App.css';
import { Resizable, ResizableBox } from 'react-resizable'
import { useState } from 'react'

const App = (props) => {
  const [state, setState] = useState({
    width: 200,
    height: 200,
    absoluteWidth: 200,
    absoluteHeight: 200,
    absoluteLeft: 0,
    absoluteTop: 0,
  });

  const onResetClick = () => {
    setState({ width: 200, height: 200, absoluteWidth: 200, absoluteHeight: 200 });
  };

  // On top layout
  const onResize = (event, { element, size, handle }) => {
    setState({ width: size.width, height: size.height });
  };

  const onResizeAbsolute = (event, { element, size, handle }) => {
    setState((state) => {
      let newLeft = state.absoluteLeft;
      let newTop = state.absoluteTop;
      const deltaHeight = size.height - state.absoluteHeight;
      const deltaWidth = size.width - state.absoluteWidth;
      if (handle[0] === 'n') {
        newTop -= deltaHeight;
      } else if (handle[0] === 's') {
        newTop += deltaHeight;
      }
      if (handle[handle.length - 1] === 'w') {
        newLeft -= deltaWidth;
      } else if (handle[handle.length - 1] === 'e') {
        newLeft += deltaWidth;
      }

      return {
        absoluteWidth: size.width,
        absoluteHeight: size.height,
        absoluteLeft: newLeft,
        absoluteTop: newTop,
      }
    })
  }
  
  return (
    <div className="layoutRoot">
      <ResizableBox
        className="custom-box box"
        width={200}
        height={200}
        handle={<span className="custom-handle custom-handle-se" />}
        handleSize={[8, 8]}>
        <span className="text">{"<ResizableBox> with custom overflow style & handle in SE corner."}</span>
      </ResizableBox>
    </div>
  );
}

export default App;
