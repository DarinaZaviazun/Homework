import "./menu.css"
import Icon from "../../../images/icon_catalog.png"
import Compare from "../../../images/libra_icon.png"
import Wishlist from "../../../images/wishlist_icon.png"
import Cart from "../../../images/cart_icon.png"
import Premium from "../../../images/premium.png"

export const HeaderMenu = () => {

    return(
        <div className="main">
            <div>
                <img src="https://xl-static.rozetka.com.ua/assets/img/design/logo_n.svg" alt="smile" />
            </div>
            <div className="catalog"><img src={Icon} alt="icon"/><span>Каталог товаров</span></div>
            <div className="search">
                <form className="form-poisk">
                    <input type="text" placeholder="Я ищу..." />
                    <button className="finder">Найти</button>
                </form>
            </div>
            <div className="try">
                <div>Попробуйте</div>
                <div><img src={Premium} alt="premium" className="premium"/></div>
            </div>
            <div className="icons">
                <div><img src={Compare} alt="comparation" className="left-icons"/></div>
                <div><img src={Wishlist} alt="wishlist"  className="left-icons"/></div>
                <div><img src={Cart} alt="cart"  className="left-icons"/> </div>
            </div>
        </div>
    )
}