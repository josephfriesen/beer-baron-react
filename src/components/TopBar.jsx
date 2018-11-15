import React from 'react';
import PropTypes from 'prop-types';
import ViewToggle from './ViewToggle';
import Logo from './Logo';

function TopBar(props) {

  const topWrapper = {
    width: '100%',
    height: '75px',
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const headerItem = {
    margin: '0 20px',
    maxHeight: '75px',
    maxWidth: '200px'
  };

  return (
    <div style={topWrapper}>
      <div style={headerItem}>
        <Logo />
      </div>

      <div style={headerItem}>
        <ViewToggle
          onViewChange={props.onViewChange}
          employeeView={props.employeeView} />
      </div>
    </div>
  );
}

TopBar.propTypes = {
  onViewChange: PropTypes.func,
  employeeView: PropTypes.bool
};

export default TopBar;
