import {useSelector} from "react-redux";

export function Header () {
    const {cart:{cart}, wishlist:{wishlist}} = useSelector(state => state);

return(
    <header>
        <h2>
            Experemental Shop
        </h2>
        <div>
            <div>WishList: {wishlist.length}</div>
            <div>Cart: {cart.length}</div>
        </div>
    </header>

)
}