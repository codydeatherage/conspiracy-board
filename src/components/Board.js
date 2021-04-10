import React, { useState } from 'react'

const Board = (props) => {
    return (
        <div className=" board-main">
            {props.tiles}
        </div>)
}

export default Board;