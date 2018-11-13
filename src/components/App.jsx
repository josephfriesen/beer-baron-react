import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import TopBar from './TopBar';

function App() {
  return (
    <div>
      <TopBar />
      <Switch>
        <Route exact path='/' component={Welcome}/>
      </Switch>
    </div>
  );
}

export default App;
