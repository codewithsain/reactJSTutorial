import React from 'react';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    //this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e) => {
    console.log(e);
    this.setState((state) => {
      return { isToggleOn: state.isToggleOn ? false : true };
    });
  };
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick('some value')}>
          {this.state.isToggleOn ? 'On' : 'Off'}
        </button>
      </div>
    );
  }
}

export default ToggleButton;
