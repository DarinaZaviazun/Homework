import "./product-item.css"
import Heart_not from "../../../../images/item_wishlist_icon.png"
import Heart_yes from "../../../../images/item_wishlist_icon_selected.png"

export const ProductItem = (product) => {

    const{product:{title, image, price}} = product;

    let name = "";
    if (title.length > 30)
        name = title.substring(0, 30) + "..."
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
            <div>
                <img src={Heart_not} alt={"heart"} className={"item-icon"}/>
            </div>
        </div>
    )
}