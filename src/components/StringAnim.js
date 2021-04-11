import React from 'react';
import Anime, { anime } from 'react-anime';

let colors = [ 'blue', 'green', 'red' ];

const StringAnim = (props) => {
    return(
        <Anime delay={anime.stagger(100)} scale={[ 0.1, 0.9 ]}>
            {colors.map((color, i) => <div key={i} className={color} />)}
        </Anime>
    )
}

export default StringAnim;