//npm import
import React from 'react';
import AppDisplay from '../Containers/AppDisplay'
import LeftButton from '../Containers/LeftButton'
import RightButton from '../Containers/RightButton'

//local import


const App = () => {
  return (
    <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey z-depth-5 darken-1">
        <div className="card-content white-text">
          <h3 id='title'>Counter App with Redux</h3>
        </div>
        <div className='darken-3' id='counter'>
          <AppDisplay />
        </div>
        <div className="card-action" id='box-button'>
          <LeftButton />
          <RightButton />
        </div>
      </div>
    </div>
  </div>
  );
}


export default App;
