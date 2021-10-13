import React, {Component} from 'react';
import Button from './button';

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {

    return (

      <Button type={this.props.type}
              className={this.props.className}
              text={this.state.isToggleOn ? this.props.text.toggleOn : this.props.text.toggleOff}
              handleClick={this.handleClick}> text= {this.state.isToggleOn ? 'ON' : 'OFF'}

      </Button>


    );
  }
}

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );
export default ToggleButton;
