//npm import
import React from 'react'


//local import



const ButtonLeft = ({ leftClick }) => {
    return (
        <button className="btn-floating btn-large red pulse" id='left' onClick={leftClick}><i className="material-icons">remove</i></button>
    )
}

export default ButtonLeft;
