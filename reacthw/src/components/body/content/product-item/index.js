import "./product-item.css"
import Heart_not from "../../../../images/item_wishlist_icon.png"
import Heart_yes from "../../../../images/item_wishlist_icon_selected.png"
import Cart_not from "../../../../images/item_cart_icon.png"
import Cart_yes from "../../../../images/item_cart_icon_chosen.png"

export const ProductItem = (props) => {

    const{product:{title, image, price}, product, toWishlist, toCart, isToggledToWishlist, isToggledToCart} = props;


    let name = "";
    if (title.length > 22)
        name = title.substring(0, 22) + "..."
    else name = title




    return(
        <div className={"productItem"}>

            <div id={"div12"}>
                <div>
                <img src={image} alt={title}/>
                </div>
            </div>

            <div>
                <div id={"title"}>{name}</div>
                <div id={"price"}>{price}<span>₴</span></div>
            </div>
            <div className={"item-icons-footer"}>
                <div>
                    <img src={isToggledToWishlist ? Heart_yes: Heart_not} alt={"heart"} onClick={() => toWishlist(product)} className={"item-icon"}/>
                </div>
                <div>
                    <img src={isToggledToCart ? Cart_yes : Cart_not} alt={"cart"} onClick={() => toCart(product)} className={"item-icon2"}/>
                </div>
            </div>
        </div>
    )
}