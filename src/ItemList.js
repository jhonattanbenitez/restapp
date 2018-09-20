import React from 'react';
import Item from './Containers/Item';
import Contador from './Contador';

class ItemList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: props.products,
      total: 0,
    };
  }

  onIncrementParent = id => {
    let product = this.state.products.find(item => item.id === id);
    product.quantity = product.quantity + 1;
    let total = product.quantity * product.price;
    product.total = total + product.total;

    let newProducts = this.state.products.filter(item => item.id !== id);
    newProducts = [...newProducts, product].sort((a, b) => a.id - b.id);

    this.setState({
      products: newProducts,
    });
  };

  render() {
    return (
      <div>
        {this.state.products.map((product, i) => {
          return (
            <div className="tc dib" key={i}>
              <Item
                key={i}
                id={product.id}
                name={product.name}
                price={product.price}
                img={product.img}
                quantity={product.quantity}
              />
              <Contador onIncrement={() => this.onIncrementParent(product.id)} value={product.quantity} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ItemList;
