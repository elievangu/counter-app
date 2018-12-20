//npm import
import { connect } from 'react-redux'

//local import
import Dispaly from '../Components/Display'


const mapStateToProps = (state) => ({
    result: state
})

const AppDisplay = connect(
    mapStateToProps, 
    null
    )(Dispaly)

export default AppDisplay;
