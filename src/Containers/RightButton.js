//npm import
import { connect } from 'react-redux'

//local import
import ButtonRight from '../Components/ButtonRight'
import { increment } from '../Actions/index'

const mapDispatchToProps = (dispatch) => {
  return {
      rightClick: () => {
          dispatch(increment())
      }
  }
}

const RightButton = connect(
    null, 
    mapDispatchToProps
)(ButtonRight)

export default RightButton;