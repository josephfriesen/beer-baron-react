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
        <p>{props.keg.style}<br/>by {props.keg.brewery}</p>
      </div>
      <div>
        <ul>
          <li>ABV: {(props.keg.abv * 100).toFixed(2)}%</li>
          <li>Price: ${props.keg.price}</li>
          <li>Pints Left: {(props.keg.pintsLeft == 0) ? 'All out!' : props.keg.pintsLeft}</li>
        </ul>
      </div>
    </div>
  );
}

DetailLeftColumn.propTypes = {
  keg: PropTypes.object
};
