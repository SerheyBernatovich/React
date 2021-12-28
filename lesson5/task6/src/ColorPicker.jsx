import React from 'react';

const coral = 'CORAL';
const aqua = 'AQUA';
const bisque = 'BISQUE';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  handHover = (color) => {
    this.setState({ value: color });
  };
  // handLeave = () => {
  //   this.setState({ value: '' });
  // };
  render() {
    return (
      <div>
        <div className="picker__title">{this.state.value}</div>
        <div>
          <button
            onMouseEnter={() => this.handHover(coral)}
            onMouseLeave={() => {
              this.setState({ value: '' });
            }}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseEnter={() => this.handHover(aqua)}
            onMouseLeave={() => {
              this.setState({ value: '' });
            }}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseEnter={() => this.handHover(bisque)}
            onMouseLeave={() => {
              this.setState({ value: '' });
            }}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;
