import React from 'react';
import PropTypes from 'prop-types';
import ViewToggle from './ViewToggle';
import Logo from './Logo';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const topWrapper = {
      width: '100%',
      height: '75px',
      backgroundColor: 'red',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    };

    const headerItem = {
      margin: '0 20px',
      maxHeight: '75px',
      maxWidth: '200px'
    };

    return (
      <div style={topWrapper}>
        <div style={headerItem}>
          <Logo />
        </div>

        <div style={headerItem}>
          <ViewToggle
            onViewChange={this.props.onViewChange} />
        </div>
      </div>
    );
  }
}

TopBar.propTypes = {
  onViewChange: PropTypes.func
};

export default TopBar;
