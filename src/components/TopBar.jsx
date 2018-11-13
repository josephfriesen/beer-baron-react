import React from 'react';
import ViewToggle from './ViewToggle';

function TopBar() {
  // STYLES
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

  // RENDER
  return (
    <div style={topWrapper}>
      <div style={headerItem}>
        <p>LOGO will go here</p>
      </div>

      <div style={headerItem}>
        <ViewToggle />
      </div>
    </div>
  );
}

export default TopBar;
