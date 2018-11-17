import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';
import { Dialog } from 'react-toolbox/lib/dialog';
import KegForm from './KegForm';

export default class EditButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteDialogOn: false,
      editDialogOn: false
    };
    this.deleteDialogToggle = this.deleteDialogToggle.bind(this);
    this.onDeleteConfirm = this.onDeleteConfirm.bind(this);
    this.deleteDialogActions = [
      { label: 'Cancel', onClick: this.deleteDialogToggle },
      { label: 'Confirm', onClick: this.onDeleteConfirm }
    ];
    this.editDialogToggle = this.editDialogToggle.bind(this);
  }

  deleteDialogToggle() {
    this.setState({deleteDialogOn: !this.state.deleteDialogOn});
  }

  onDeleteConfirm() {
    this.deleteDialogToggle();
    this.props.removeKeg();
  }

  editDialogToggle() {
    this.setState({editDialogOn: !this.state.editDialogOn});
  }

  render() {
    return (
      <div className='container'>
        <style jsx>{`
          .container {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
        `}
        </style>
        <Button label='Sell a pint' raised onClick={this.props.sellAPint} />
        <Button label='Restock keg' raised onClick={this.props.restock} />
        <Button label='Edit this keg' raised onClick={this.editDialogToggle} />
        <Dialog
          actions={[]}
          active={this.state.editDialogOn}
          onEscKeyDown={this.editDialogToggle}
          onOverlayClick={this.editDialogToggle}
          title='Edit Keg Information'>
          <KegForm
            keg={this.props.keg}
            toggleParentDialog={this.editDialogToggle}
            onFormSubmission={this.props.onKegEditSubmission} />
        </Dialog>
        <Button label='Delete this keg' raised onClick={this.deleteDialogToggle} />
        <Dialog
          actions={this.deleteDialogActions}
          active={this.state.deleteDialogOn}
          onEscKeyDown={this.deleteDialogToggle}
          onOverlayClick={this.deleteDialogToggle}
          title='Confirm Keg Deletion'>
          <div>Are you sure you want to delete this keg from inventory? This action cannot be undone.</div>
        </Dialog>
      </div>
    );
  }
}

EditButtons.propTypes = {
  keg: PropTypes.object,
  kegId: PropTypes.string,
  sellAPint: PropTypes.func,
  restock: PropTypes.func,
  removeKeg: PropTypes.func,
  onKegEditSubmission: PropTypes.func
};
