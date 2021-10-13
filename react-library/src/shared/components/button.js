import React, {Component} from 'react';

class Button extends Component {

  render() {
    return (
      <button
        type={this.props.type ? this.props.type : 'button'}
        className={this.props.className}
        onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
