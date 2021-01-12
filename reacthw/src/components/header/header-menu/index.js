import "./menu.css"
import Icon from "../../../images/icon_catalog.png"
import Compare from "../../../images/libra_icon.png"
import Compare_full from "../../../images/libra_icon_chosen.png"
import Wishlist from "../../../images/wishlist_icon.png"
import Wishlist_full from "../../../images/wishlist_icon_chosen.png"
import Cart from "../../../images/cart_icon.png"
import Cart_full from "../../../images/cart_icon_chosen.png"
import Premium from "../../../images/premium.png"
import {PremiumPop} from "./Premium-pop";
import {useSelector} from "react-redux";
import Heart_yellow from "../../../images/item_wishlist_icon.png"
import Cart_green from "../../../images/item_cart_icon.png"

export const HeaderMenu = () => {

    const {wishlist:{wishlist}, cart:{cart}} = useSelector(value => value)

    let konec = "";
    if (cart.length === 1)
        konec = "товар"
    if (cart.length >= 2 && cart.length <= 4)
        konec = "товара"
    if (cart.length >= 5)
        konec = "товаров"

    const summa = cart.reduce((acc, value) => {
        return Math.round(acc + value.price);
    }, 0)

    return(
        <div className="main">
            <div>
                <a href={"/"}>
                <img src="https://xl-static.rozetka.com.ua/assets/img/design/logo_n.svg" alt="smile" />
                </a>
            </div>
            <div className="catalog">
                <img src={Icon} alt="icon"/>
                <span>Каталог товаров</span>
            </div>
            <div className="search">
                <form className="form-poisk">
                    <input type="text" placeholder="Я ищу..." />
                    <button className="finder">Найти</button>
                </form>
            </div>
            <div className="try">
                <div>Попробуйте</div>
                <div>
                    <img src={Premium} alt="premium" className="premium"/>
                </div>
                <div className="popup2">
                    <PremiumPop />
                </div>
            </div>
            <div className="icons">

                <div>
                    <img src={Compare} alt="comparation" className="left-icons"/>
                </div>

                <div className="icon-pop">
                    <img src={wishlist.length ? Wishlist_full : Wishlist} alt="wishlist"  className="left-icons"/>
                    <div id={wishlist.length ? "div20" : ""}>{wishlist.length ? wishlist.length : ""}</div>

                    {wishlist.length ? <div/> :
                    <div className="popup">
                        <div id={"div-one"}><img src={Heart_yellow} alt={"heart"}/></div>
                        <div>
                            <div id={"div-two"}>Список желаний пуст</div>
                            <div id={"div-three"}>Добавляйте товары в список желаний, делитесь списками с друзьями и обсуждайте товары вместе</div>
                        </div>
                        </div>}

                </div>

                <div className="icon-pop" id={"div3"}>
                    <img src={cart.length ? Cart_full : Cart} alt="cart"  className="left-icons"/>
                    <div id={cart.length ? "div21" : ""}>{cart.length}</div>

                    {cart.length ?
                        <div className="popup3">
                            <div>
                                <div id={"div-three"}>В корзине {cart.length} {konec}</div>
                                <div id={"div-three"}>На сумму {summa} грн</div>
                                <div><button className={"oformi"}>Оформить заказ</button></div>
                                <div id={"div-four"}>Перейти в корзину</div>
                            </div>
                        </div> :
                        <div className="popup">
                            <div id={"div-one"}><img src={Cart_green} alt={"cart"}/></div>
                            <div>
                                <div id={"div-two"}>Ваша корзина пуста</div>
                                <div id={"div-three"}>Добавляйте понравившиеся товары в корзину</div>
                            </div>
                        </div>}

                </div>
            </div>
        </div>
    )
}