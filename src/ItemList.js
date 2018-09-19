import React from "react";
import Item from "./Containers/Item"
import Contador from "./Contador";

const ItemList = ({products}) => {

    return (
        <div>  
               {
                 products.map((name, i) =>{
                     return (
                          <div className="tc dib" key={i}>
                            <Item 
                                    key={i} 
                                    id={products[i].id} 
                                    name={products[i].name}
                                    price={products[i].price} 
                                    img={products[i].img}/>
                            <Contador />
                          </div>


                    );
                }) 
               }    
        </div>     

    );

}

export default ItemList; 