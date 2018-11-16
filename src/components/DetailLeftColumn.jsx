import React from 'react';
import PropTypes from 'prop-types';

export default function DetailLeftColumn(props) {
  return(
    <div className='container'>
      <style jsx>{`
          .container {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }
          h4 {
            margin: 0;
          }
        `}
      </style>
      <div>
        <h4>{props.keg.name}</h4>
      </div>
      <div>
        <p>{props.keg.style}</p>
      </div>
    </div>
  );
}

DetailLeftColumn.propTypes = {
  keg: PropTypes.object
};
