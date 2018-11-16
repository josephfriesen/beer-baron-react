import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

export default function AddKegForm(props) {
  
  let kegObject = {
    name: null,
    price: null,
    brewery: null,
    abv: null,
    style: null,
    pintsLeft: null,
    img: null,
  };
  
  function handleKegSubmission(keg) {
    props.onNewKegSubmission(keg);
    props.closeDialog();
  }
  
  return (
    <div>
      <Input type='text' label='Beer Name' id='name' onChange={(value) => {kegObject.name = value;}}/>
      <Input type='text' label='Brewery' id='brewery' onChange={(value) => {kegObject.brewery=value;}} />
      <Input type='text' label='Beer Style' id='style' onChange={(value) => {kegObject.style=value;}}/>
      <Input type='text' label='ABV' id='abv' onChange={(value) => {kegObject.abv=value;}}/>
      <Input type='text' label='Price' id='price' onChange={(value) => {kegObject.price=value;}}/>
      <Input type='text' label='Pints Left' id='pintsLeft' onChange={(value) => {kegObject.pintsLeft=value;}}/>
      <Input type='text' label='Image URL' id='img' onChange={(value) => {kegObject.img=value;}}/>
      <Button label='Cancel' onClick={props.closeDialog} />
      <Button label='Save' onClick={() => {handleKegSubmission(kegObject);}} />
    </div>
  );
}

AddKegForm.propTypes = {
  onNewKegSubmission: PropTypes.func,
  closeDialog: PropTypes.func
};