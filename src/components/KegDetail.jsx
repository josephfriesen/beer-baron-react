import React from 'react';
import PropTypes from 'prop-types';
import DetailLeftColumn from './DetailLeftColumn';
import DetailRightColumn from './DetailRightColumn';
import EditButtons from './EditButtons';

export default function KegDetail(props) {
  let editPanel;
  if (props.employeeView) {
    editPanel = <div><EditButtons 
      keg={props.keg} 
      kegId={props.kegId}
      sellAPint={props.sellAPint}
      restock={props.restock}
      removeKeg={props.removeKeg} /></div>;
  } else {
    editPanel = <div className='the-hard-sell'><p>Try one today!</p></div>
  }
  
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
          justify-content: center;
          align-items: center;
        }
        .columns {
          display: flex;
          flex-direction: row;
          justify-content: space-bewteen;
          width: 100%;
        }
        .detail-column {
          margin: 10px;
          width: calc(50% - 20px);
        }
        .the-hard-sell {
          text-align: center;
          font-style: italic;
        }
        `}
      </style>
      <div className='columns'>
        <div className='detail-column'>
          <DetailLeftColumn
            keg={props.keg} />
        </div>
        <div className='detail-column'>
          <DetailRightColumn
            keg={props.keg} />
        </div>
      </div>
      <div className='footer'>
        {editPanel}
      </div>
    </div>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  kegId: PropTypes.string,
  employeeView: PropTypes.bool,
  sellAPint: PropTypes.func,
  restock: PropTypes.func,
  removeKeg: PropTypes.func
};
