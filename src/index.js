import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ItemList from "./ItemList";
import registerServiceWorker from './registerServiceWorker';
import "tachyons";
import {products} from "./products";

ReactDOM.render(
                <div>
                  <ItemList products={products} />
                </div>               
                    , document.getElementById('root'));
                    
registerServiceWorker();
