import React from 'react';
import PropTypes from 'prop-types';
import DetailHeader from './DetailHeader';

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
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
          }
        `}
      </style>
      <DetailHeader
        keg={props.keg} />
      <div className='detail-row this-will-also-be-a-single-component'>
        <div>
          <p>blah</p>
        </div>
        <div>
          <p>blah</p>
        </div>
      </div>
    </div>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  kegId: PropTypes.string
};
