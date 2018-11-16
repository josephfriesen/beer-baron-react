import React from 'react';
import PropTypes from 'prop-types';

export default function TapList(props) {
  const gettingLow = {
    color: 'red'
  };

  const wereAllOutOfThisStuff = {
    color: 'red',
    textDecoration: 'line-through'
  };

  const none = {};

  return (
    <div>
      <h1>Tap List</h1>
      <ul>
        {Object.keys(props.kegs).map(kegId => {
          const keg = props.kegs[kegId];
          let listItemStyle = none;
          if (keg.pintsLeft <= 10) {
            if (keg.pintsLeft == 0) {listItemStyle = wereAllOutOfThisStuff;} else {listItemStyle = gettingLow;}
          }
          return <li key={kegId} style={listItemStyle} onClick={() => {props.onActiveKegChange(kegId);}}>{keg.name}</li>;
        })}
      </ul>
    </div>
  );
}

TapList.propTypes = {
  kegs: PropTypes.object,
  onActiveKegChange: PropTypes.func
};
