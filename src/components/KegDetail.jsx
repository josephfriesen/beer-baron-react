import React from 'react';
import PropTypes from 'prop-types';
import DetailLeftColumn from './DetailLeftColumn';
import DetailRightColumn from './DetailRightColumn';

export default function KegDetail(props) {
  return (
    <div className='container'>
      <style jsx>
        {`
          .container {
            background-color: #ffd699;
            box-shadow: 0 0 1px 2px grey;
            height: 100%;
            padding: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-bewteen;
          }
          .detail-column {
            margin: 10px;
            width: calc(50% - 20px);
          }
        `}
      </style>
      <div className='detail-column'>
        <DetailLeftColumn
          keg={props.keg} />
      </div>
      <div className='detail-column'>
        <DetailRightColumn
          keg={props.keg} />
      </div>
    </div>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  kegId: PropTypes.string
};
