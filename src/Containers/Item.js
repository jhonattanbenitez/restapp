import React from "react";

class Item extends React.Component {
  // const { name, img, price, total } = props;

  render() {
    return (
      <div
        onClick={this.props.onIncrement}
        className="tc bg-dark-blue dib br3 pa3 ma2 grow bw2 shadow-5"
        id="mod"
      >
        <img src={this.props.img} alt="imagen" />
        <div>
          <h2>{this.props.name}</h2>
          <p>{`$ ${this.props.price}`}</p>
          <p>{`Subtotal: $ ${this.props.total}`}</p>
        </div>
      </div>
    );
  }
}
export default Item;