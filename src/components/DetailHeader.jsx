import React from 'react';
import PropTypes from 'prop-types';

export default function DetailHeader(props) {
  return(
    <div className='container'>
      <style jsx>{`
          .container {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .container img {
            width: 200px;
            height: 200px;
            border: 1px solid grey;
          }
        `}
      </style>
      <div>
        <h4>{props.keg.name}</h4>
      </div>
      <div>
        <img src={props.keg.img} />
      </div>
    </div>
  )
}

DetailHeader.propTypes = {
  keg: PropTypes.object
}
