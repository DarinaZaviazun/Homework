import React from "react";

export const Product = ({
                            toCart,
                            toWishList,
                            isAddedToWishList,
                            isAddedToCart,
                            product,
                            product: {id, title, price}
    }) => {



    return (

        <div>
            Name: {title}<br/>
            Price: {price} <br/>
            <button onClick={() => toWishList(product)}>{isAddedToWishList? "remove from wishlist" : "add to wishlist"}</button>
            <button onClick={() => toCart(product)}>{isAddedToCart? "remove from cart" : "add to cart"}</button>
            <hr/>
        </div>
    )

}