import { Rnd } from 'react-rnd'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const BoardItem = props => {
  const [selectedFile, changeFile] = useState(null);
  const [state, setState] = useState({
    width: 200,
    height: 200,
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
    <div className=" card card-body layoutRoot">
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
      {props.amt}
      {selectedFile ? null: <input type="file" onChange={onFileChange} />}
      {selectedFile ? <img className="board-img" src={selectedFile}></img> : null}
      </Rnd>
    </div>
  );
}

export default BoardItem;
