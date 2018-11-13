import React from 'react';

function Banner() {
  const container = {
    textAlign: 'center'
  };
  
  const banner = {
    fontSize: '2.5em',
    color: 'red',
    marginBottom: '0'
  };

  const subhead = {
    fontSize: '0.6em',
    margin: '0'
  };

  return (
    <div className={container}>
      <h1 style={banner}>The Beer Baron's Beer Basement</h1>
      <p style={subhead}>"slop's on, come and get it lil piggies"</p>
    </div>
  );
}

export default Banner;
