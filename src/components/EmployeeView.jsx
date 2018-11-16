import React from 'react';
import PropTypes from 'prop-types';
import TapList from './TapList';
import { Button } from 'react-toolbox/lib/button';

function EmployeeView(props) {
  return (
    <div>
      <div>
        <TapList
          kegs={props.kegs}
          onActiveKegChange={props.onActiveKegChange} />
      </div>
      <div>
        <Button label='Add a keg' icon='add' />
      </div>
    </div>
  );
}

EmployeeView.propTypes = {
  kegs: PropTypes.object,
  routerPath: PropTypes.string,
  onActiveKegChange: PropTypes.func
};

export default EmployeeView;
