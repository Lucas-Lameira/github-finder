import {Fragment} from 'react';

import spinner from './spinner-gif.gif';

const Spinner = () => 
  <Fragment>
    <img src={spinner} alt="Loading spinner" style={{width: '200px', margin: 'auto', display: 'block'}}/>
  </Fragment>  

export default Spinner