import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import TopBar from './TopBar';
import Banner from './Banner';
import TapList from './TapList';
import EmployeeView from './EmployeeView';
import PatronView from './PatronView';

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

    let viewToDisplay = null;

    if (this.state.employeeView) {
      viewToDisplay = <EmployeeView />;
    } else {
      viewToDisplay = <PatronView />;
    }

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
          {viewToDisplay}
        </div>
      </div>
    );
  }
}

export default App;
