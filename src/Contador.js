import React from 'react';

class Contador extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.value}</h3>
        <input type="button" onClick={this.props.onIncrement} value="+" />
        {/* <input type="button" onClick={this.decrementar.bind(this)} value="-" /> */}
      </div>
    );
  }
}

export default Contador;
