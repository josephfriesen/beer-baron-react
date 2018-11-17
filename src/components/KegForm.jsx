import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

export default class KegForm extends React.Component {
  constructor(props) {
    super(props);
    let initialKeg = this.props.keg;
    if (this.props.keg.name == 'new') {
      initialKeg = {
        name: '',
        price: '',
        brewery: '',
        abv: '',
        style: '',
        pintsLeft: '',
        img: ''
      };
    }

    this.state = {
      keg: initialKeg
    };

    this.submit = this.submit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  submit() {
    this.props.onFormSubmission(this.state.keg);
    this.closePopup();
  }

  closePopup() {
    this.props.toggleParentDialog();
  }

  handleFormChange(attribute, value) {
    const newKeg = Object.assign(this.state.keg, {
      [attribute]: value
    });
    this.setState({keg: newKeg});
  }

  render() {
    return (
      <div>
        <Input type='text' label='Name' defaultValue={this.state.keg.name} onChange={(value) => {this.handleFormChange('name', value);}} />
        <Input type='text' label='Brewery' defaultValue={this.state.keg.brewery} onChange={(value) => {this.handleFormChange('brewery', value);}} />
        <Input type='text' label='Style' defaultValue={this.state.keg.style} onChange={(value) => {this.handleFormChange('style', value);}} />
        <Input type='text' label='ABV (Example: If your beer is 4.74% ABV, enter "0.0474")'defaultValue={`${this.state.keg.abv}`} onChange={(value) => {this.handleFormChange('abv', value);}} />
        <Input type='text' label='Price (Example: If your beer is $4.50 for a pint, enter "4.50")' defaultValue={`${this.state.keg.price}`} onChange={(value) => {this.handleFormChange('price', value);}} />
        <Input type='text' label='Pints Remaining (124 for a new keg)' defaultValue={`${this.state.keg.pintsLeft}`} onChange={(value) => {this.handleFormChange('pintsLeft', value);}} />
        <Input type='text' label='Image URL' defaultValue={this.state.keg.img} onChange={(value) => {this.handleFormChange('img', value);}} />
        <Button label='Cancel' onClick={this.closePopup} />
        <Button label='Save' onClick={this.submit} />
      </div>
    );
  }
}

KegForm.propTypes = {
  onFormSubmission: PropTypes.func.isRequired,
  toggleParentDialog: PropTypes.func,
  keg: PropTypes.object.isRequired
};
