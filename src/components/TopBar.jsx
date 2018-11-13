import React from 'react';

function TopBar() {
  // STYLES
  const topWrapper = {
    width: "100%",
    height: "75px",
    backgroundColor: "red",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  const headerItem = {
    margin: "0 20px"
  };

  // RENDER
  return (
    <div style={topWrapper}>
      <div style={headerItem}>
        <p>LOGO will go here</p>
      </div>

      <div style={headerItem}>
        <p>VIEW TOGGLE will go here</p>
      </div>
    </div>
  );
}

export default TopBar;
