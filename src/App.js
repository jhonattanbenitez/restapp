import React, { Component } from 'react';
import ItemList from "./ItemList";
import {products} from "./products";

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <h1 className="tc f-subheadline lh-title">American's Pizza</h1>
        <ItemList products={products} />
      </div>
    );
  }
}

export default App;
