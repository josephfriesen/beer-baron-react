import React from 'react';
import PropTypes from 'prop-types';
import TapList from './TapList';

function PatronView(props) {
  return (
    <div>
      <TapList
        kegs={props.kegs}
        onActiveKegChange={props.onActiveKegChange} />
    </div>
  );
}

PatronView.propTypes = {
  kegs: PropTypes.object,
  onActiveKegChange: PropTypes.func
};

export default PatronView;
