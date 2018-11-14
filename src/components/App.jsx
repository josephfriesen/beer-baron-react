import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import TopBar from './TopBar';
import Banner from './Banner';
import TapList from './TapList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      employeeView: false
    };
    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleViewChange() {
    const newView = !this.state.employeeView;
    this.setState({employeeView: newView});
    console.log('App state has changed: ', this.state);
  }

  render() {
    const banner = {
      textAlign: 'center'
    };

    return (
      <div>
        <div>
          <TopBar
            onViewChange={this.handleViewChange} />
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
}

export default App;
