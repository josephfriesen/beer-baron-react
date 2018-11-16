import React from 'react';
import PropTypes from 'prop-types';
import TapList from './TapList';
import { Button } from 'react-toolbox/lib/button';
import { Dialog } from 'react-toolbox/lib/dialog';


export default class EmployeeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addDialogOn: false
    };
    this.addDialogToggle = this.addDialogToggle.bind(this);
    this.addDialogActions = [
      { label: 'Cancel', onClick: this.addDialogToggle }
    ];
  };
  
  addDialogToggle() {
    this.setState({addDialogOn: !this.state.addDialogOn});
  };
  
  render() {
    return (
      <div>
        <div>
          <TapList
            kegs={this.props.kegs}
            onActiveKegChange={this.props.onActiveKegChange} />
        </div>
        <div>
          <Button label='Add a keg' raised onClick={this.addDialogToggle} />
          <Dialog
            actions={this.addDialogActions}
            active={this.state.addDialogOn}
            onEscKeyDown={this.addDialogToggle}
            onOverlayClick={this.addDialogToggle}
            title='Add a new keg'>
            <p>What up</p>
          </Dialog>
        </div>
      </div>
    );
  }
}

EmployeeView.propTypes = {
  kegs: PropTypes.object,
  routerPath: PropTypes.string,
  onActiveKegChange: PropTypes.func
};
