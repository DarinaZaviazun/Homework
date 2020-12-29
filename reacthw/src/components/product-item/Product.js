import React from "react";

export const Product = ({toCart,
                            toWishList,
                            product,
                            product: {id, title, price}
    }) => {

    return (

        <div>
            Name: {product.title}<br/>
            Price: {product.price} <br/>
            <button onClick={() => toWishList(product)}>add to wishlist</button>
            <button onClick={() => toCart(product)}>add to cart</button>
            <hr/>
        </div>
    )

}