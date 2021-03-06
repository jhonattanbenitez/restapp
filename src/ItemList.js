import React from "react";
import Item from "./Containers/Item";
import Contador from "./Contador";
import "./ItemList.css";

class ItemList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: props.products,
      total: 0
    };
  }

  onIncrementParent = id => {
    let product = this.state.products.find(item => item.id === id);
    product.quantity = product.quantity + 1;
    let total = product.quantity * product.price;

    product.total = total;
    console.log("este es product.total " + product.total + product.name);
    console.log("este es total" + total);

    let newProducts = this.state.products.filter(item => item.id !== id);
    newProducts = [...newProducts, product].sort((a, b) => a.id - b.id);

    this.setState({
      products: newProducts,
      total: this.state.total + product.price
    });
  };

  onDecrementParent = id => {
    let product = this.state.products.find(item => item.id === id);
    if (product.quantity > 0) {
      product.quantity = product.quantity - 1;
      let total = product.quantity * product.price;

      product.total = total;
      console.log("este es product.total " + product.total + product.name);
      console.log("este es total" + total);

      let newProducts = this.state.products.filter(item => item.id !== id);
      newProducts = [...newProducts, product].sort((a, b) => a.id - b.id);

      this.setState({
        products: newProducts,
        total: this.state.total - product.price
      });
    }
  };

  render() {
    return (
      <div>
        <h1 className="tc">Total: {this.state.total}</h1>
        {this.state.products.map((product, i) => {
          return (
            <div className="tc dib style" key={i}>
              <Item
                key={i}
                id={product.id}
                name={product.name}
                price={product.price}
                img={product.img}
                quantity={product.quantity}
                total={product.total}
                onIncrement={() => this.onIncrementParent(product.id)}
              />
              <Contador
                onIncrement={() => this.onIncrementParent(product.id)}
                value={product.quantity}
                onDecrement={() => this.onDecrementParent(product.id)}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ItemList;
