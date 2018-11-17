import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

export default function EditKegForm(props) {
  
  let kegObject = {
    name: props.keg.name,
    price: props.keg.price,
    brewery: props.keg.brewery,
    abv: props.keg.abv,
    style: props.keg.style,
    pintsLeft: props.keg.pintsLeft,
    img: props.keg.img,
  };
  
  function handleKegSubmission(keg) {
    props.onKegEditSubmission(keg);
    props.editDialogToggle();
  }
  
  function inputSubmission(attribute, value) {
    kegObject = Object.assign(kegObject, {
      [attribute]: value
    });
  }
  
  return (
    <div>
      <Input type='text' hint={kegObject.name} id='name' onChange={(value) => {inputSubmission('name', value);}}/>
      <Input type='text' hint={kegObject.brewery} id='brewery' onChange={(value) => {inputSubmission('brewery', value);}} />
      <Input type='text' hint={kegObject.style} id='style' onChange={(value) => {inputSubmission('style', value);}}/>
      <Input type='text' hint={kegObject.abv} id='abv' onChange={(value) => {inputSubmission('abv', value);}}/>
      <Input type='text' hint={kegObject.price} id='price' onChange={(value) => {inputSubmission('price', value);}}/>
      <Input type='text' hint={kegObject.pintsLeft} id='pintsLeft' onChange={(value) => {inputSubmission('pintsLeft', value);}}/>
      <Input type='text' hint={kegObject.img} id='img' onChange={(value) => {inputSubmission('img', value);}}/>
      <Button label='Cancel' onClick={props.editDialogToggle} />
      <Button label='Save' onClick={() => {handleKegSubmission(kegObject);}} />
    </div>
  );
}

EditKegForm.propTypes = {
  onNewKegSubmission: PropTypes.func,
  closeDialog: PropTypes.func,
  keg: PropTypes.object
};