import { Rnd } from 'react-rnd'
import { useState } from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';


library.add(faCoffee);
const BoardItem = props => {
  const [selectedFile, changeFile] = useState(null);
  const [state, setState] = useState({
    width: 100,
    height: 100,
    x: 0,
    y: 0
  });

  const onFileChange = e => {
    if (e.target.files[0].type === 'image/png') {
      changeFile(URL.createObjectURL(e.target.files[0]));
      console.log(e.target.files[0]);
    }
  }

  return (
    <>
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
      {selectedFile ? null:
      <> 
        <input type="file"  onChange={onFileChange} 
        >
        </input>
        <FontAwesomeIcon icon={["fas", "coffee"]} />
      </>
        
      }
      {selectedFile ? <img className="board-img" src={selectedFile}></img> : null}
      </Rnd>
      {/* {props.amt} */}
    </>
  );
}

export default BoardItem;
