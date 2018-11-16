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
//
// 'name': 'Pabst Blue Ribbon',
// 'price': '3.00',
// 'brewery': 'Pabst Brewing Company',
// 'abv': '0.0474',
// 'style': 'American Adjunct Lager',
// 'pintsLeft': 41,
// 'img': 'https://images.heb.com/is/image/HEBGrocery/000942934-1?id=ZkuRh0&fmt=jpg&fit=constrain,1&wid=296&hei=296'

DetailLeftColumn.propTypes = {
  keg: PropTypes.object
};
