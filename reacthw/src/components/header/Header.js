import {useSelector} from "react-redux";

export function Header () {
    const {cart:{cart}, wishlist:{wishlist}} = useSelector(state => state);

    let sum1 = 0;
    if (wishlist.length > 0) sum1 = wishlist.reduce((accumulator, currentValue) => {return accumulator + currentValue.price}, 0)
    let sum2 = 0;
    if (cart.length > 0) sum2 = cart.reduce((accumulator, currentValue) => {return accumulator + currentValue.price}, 0)



return(
    <header>
        <h2>
            Experemental Shop
        </h2>
        <div>

            <div title={sum1}>WishList: {wishlist.length}</div>
            <div title={sum2}>Cart: {cart.length}</div>
        </div>
    </header>

)
}