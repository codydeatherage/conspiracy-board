import { Rnd } from 'react-rnd'
import axios from 'axios'
import { useState } from 'react'

const BoardItem = (props) => {
  /* const [children, changeChildren] = useState(0); */
  const [selectedFile, changeFile] = useState(null);
  const [state, setState] = useState({
    width: 200,
    height: 200,
    x: 0,
    y: 0
  });
  const onFileChange = e => {
    changeFile(e.target.files[0]);
  }

  const onFileUpload = () =>{
    const formData = new FormData();
    if(selectedFile.name){
      formData.append("myFile", selectedFile, selectedFile.name);
    }
    axios.post("api/uploadfile", formData);
  }

  const fileData = () =>{
    if(selectedFile){
      return(
        <div>
          <h1>sFUILfewwwwwwwwwwwfweEASDF</h1>
        </div>
      )
      } 
  }

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
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>
                  Upload!
                </button>
      </Rnd>
  </div>
);
}

export default BoardItem;
