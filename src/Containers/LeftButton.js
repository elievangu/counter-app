//npm import
import { connect } from 'react-redux'

//local import
import ButtonLeft from '../Components/ButtonLeft'
import { decrement } from '../Actions/index'


const mapDispatchToProps = (dispatch) => {
    return {
        leftClick: () => {
            dispatch(decrement())
        }
    }
}

const LeftButton = connect(
    null, 
    mapDispatchToProps
    )(ButtonLeft);

export default LeftButton;


