import React from 'react';
import PropTypes from 'prop-types';

export default function DetailRightColumn(props) {
  return (
    <div className='container'>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }
          .container img {
            background-color: white;
            width: 200px;
            height: 200px;
            border: 2px solid grey;
          }
        `}
      </style>
      <img src={props.imagePath} />
    </div>
  );
}

DetailRightColumn.propTypes = {
  imagePath: PropTypes.string
};
