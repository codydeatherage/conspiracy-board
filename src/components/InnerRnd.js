import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
const InnerRnd = props => {

    const [selectedFile, changeFile] = useState(null);
    const [state, setState] = useState({
        width: props.info.width /2 ,
        height: props.info.height / 2,
        x: props.info.x,
        y: props.info.y
    });

    const onFileChange = async e => {
        if (e.target.files[0].type === 'image/png') {
            await changeFile(URL.createObjectURL(e.target.files[0]));
            console.log(e.target.files[0]);
        }
    }

    return (
        <div>
            <Rnd
                className="bg-dark border-white"
                size={{ width: state.width, height: state.height }}
                position={{ x: (state.x + state.width) / 2, y: (state.y+state.height) / 2 }}
                onDragStop={(e, d) => { setState({ x: d.x, y: d.y }) }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    console.log(position);
                    setState({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position,
                    });
                }}
            >
                Inner
              <input type="file" onChange={onFileChange} /> 
                {props.file ?  <img className="board-img" src={props.file}></img>: null}  
            </Rnd>
        </div>
    )


}

export default InnerRnd