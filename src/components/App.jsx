import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
      employeeView: false,
    };
    this.handleViewChange = this.handleViewChange.bind(this);
  }

  handleViewChange() {
    const newView = !this.state.employeeView;
    this.setState({employeeView: newView});
    console.log(this.state);
  }

  render() {
    const banner = {
      textAlign: 'center'
    };

    // const redirect = () => {
    //   console.log('Redirect');
    //   if (this.state.employeeView) {
    //     return <Redirect to='/employee' />
    //   } else {
    //     return <Redirect to='/' />
    //   }
    // }

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
            <Route exact path='/' component={PatronView} />
            <Route path='/employee' component={EmployeeView} />
          </Switch>
          {this.state.employeeView ? <Redirect to='/employee' /> : <Redirect to='/' />}
        </div>
      </div>
    );
  }
}

export default App;
