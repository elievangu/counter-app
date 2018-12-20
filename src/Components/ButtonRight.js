//npm import
import React from 'react'


//local import



const ButtonRight = ({ rightClick }) => {
    return (
        <button className="btn-floating btn-large cyan pulse" id='right' onClick={rightClick}><i className="material-icons">add</i></button>
    )
}

export default ButtonRight;