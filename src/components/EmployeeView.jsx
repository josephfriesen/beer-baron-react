import React from 'react';
import PropTypes from 'prop-types';
import TapList from './TapList';

function EmployeeView(props) {
  return (
    <div>
      <div>
        <TapList
          kegs={props.kegs}
          onActiveKegChange={props.onActiveKegChange} />
      </div>
      <div>
        <button type='button'>Add a keg</button>
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
