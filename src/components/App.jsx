import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import TopBar from './TopBar';
import Banner from './Banner';

function App() {
  const banner = {
    textAlign: 'center'
  };

  return (
    <div>
      <div>
        <TopBar />
      </div>
      <div style={banner}>
        <Banner />
      </div>
      <div>
        <Switch>
          <Route exact path='/' component={Welcome}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
