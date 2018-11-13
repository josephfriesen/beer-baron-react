import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import TopBar from './TopBar';
import Banner from './Banner';
import TapList from './TapList';

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
        <TapList />
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
