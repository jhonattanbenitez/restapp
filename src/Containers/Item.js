import React from "react";

const Item = (props) => {
    const { name, img, price} = props;
    return (
        <div className="tc bg-dark-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={img} alt="imagen" />
            <div>
                <h2>{name}</h2>
                <p>{`$ ${price}`}</p>
            </div>
        </div>
    );

}
export default Item;