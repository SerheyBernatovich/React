import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Off' };
  }
  handClick = () => {
    this.setState({ value: this.state.value === 'Off' ? 'On' : 'Off' });
  };
  render() {
    return (
      <button className="toggler" onClick={this.handClick}>
        {this.state.value}
      </button>
    );
  }
}
export default Toggler;
