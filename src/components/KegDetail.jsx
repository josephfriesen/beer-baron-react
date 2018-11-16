import React from 'react';
import PropTypes from 'prop-types';

export default function KegDetail(props) {
  if (props.kegId == null) {
    return <div></div>
  }
  else {
    return (
      <div>
        <p>{props.kegId}</p>
      </div>
    );
  }
}

KegDetail.propTypes = {
  kegs: PropTypes.object,
  kegId: PropTypes.string
}
