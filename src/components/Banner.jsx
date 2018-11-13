import React from 'react';

function Banner() {
  const container = {
    margin: '20px 0',
    textAlign: 'center',
    padding: '10px',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const banner = {
    fontSize: '2.5em',
    color: 'red',
    marginBottom: '0'
  };

  const subhead = {
    fontSize: '0.6em',
  };

  return (
    <div style={container}>
      <h1 style={banner}>The Beer Baron's Beer Basement</h1>
      <p style={subhead}>"slop's on, come and get it lil piggies"</p>
    </div>
  );
}

export default Banner;
