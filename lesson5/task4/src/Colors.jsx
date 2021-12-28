import React from 'react';
const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends React.Component {
  setBodyColor = (color) => {
    document.body.style.backgroundColor = color;
  };
  render() {
    return (
      <div className="colors">
        <button
          style={{ backgroundColor: RED }}
          className="colors__button"
          onClick={this.setBodyColor.bind(this, RED)}
        />
        <button
          style={{ backgroundColor: GREEN }}
          className="colors__button"
          onClick={() => this.setBodyColor(GREEN)}
        />
        <button
          style={{ backgroundColor: BLUE }}
          className="colors__button"
          onClick={() => this.setBodyColor(BLUE)}
        />
      </div>
    );
  }
}
export default Colors;
