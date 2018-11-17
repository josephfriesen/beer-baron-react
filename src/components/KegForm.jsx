import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

export default class KegForm extends React.Component {
  constructor(props) {
    super(props);

    let initialKeg;
    if (props.keg.name == 'new') {
      initialKeg = {
        name: 'Name',
        price: 'Price',
        brewery: 'Brewery',
        abv: 'ABV',
        style: 'Style',
        pintsLeft: 'Pints Left',
        img: 'Image URL'
      };
    } else {
      intitalKeg = props.keg;
    }

    this.state = {
      keg: initialKeg
    };

    this.submit = this.submit.bind(this);
  }

  submit() {
    this.props.onFormSubmission(this.state.keg);
  }

  render() {
    console.log(this.state);
    return (
      <div>hi</div>
    );
  }
}

KegForm.propTypes = {
  onFormSubmission: PropTypes.func,
  keg: PropTypes.object
}
