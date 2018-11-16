import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';

export default function EditButtons(props) {
  return (
    <div className='container'>
      <Button label='Sell a pint' raised onClick={props.sellAPint} />
      <Button label='Restock keg' raised onClick={props.restock} />
      <Button label='Delete this keg' raised onClick={props.removeKeg} />
    </div>
  );
}

EditButtons.propTypes = {
  keg: PropTypes.object,
  kegId: PropTypes.string,
  sellAPint: PropTypes.func,
  restock: PropTypes.func,
  removeKeg: PropTypes.func
};