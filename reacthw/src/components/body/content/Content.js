import "./content.css"
import {SliderTop} from "../slider-top";
import Star from "../../../images/star.png"
import ProductService from "../../../services/ProductService";
import {useDispatch, useSelector} from "react-redux";
import {ProductItem} from "./product-item";
import {useEffect} from "react";
import {setCart, setProducts, setWishlist} from "../../../redux";
import {useCallback} from "react";
import Chat from "../../../images/chat.png"
import Viewed from "../../../images/viewed.png"
import Newicon from "../../../images/new-icon.png"


export const Content = () => {

    const {product: {product}, wishlist:{wishlist}, cart:{cart}} = useSelector(state => state);
    const dispatch = useDispatch();
    let productService = new ProductService();

    const fetchData = useCallback( async () => {
        const items = await productService.productService();
        dispatch(setProducts(items))
            }, [])

    useEffect(() => {
        fetchData();
    }, [])


    let jewerly = product.filter(el => el.category === "jewelery");
    let womenclothing = product.filter(el => el.category === "women clothing");
    let menclothing = product.filter(el => el.category === "men clothing");
    let electronics = product.filter(el => el.category === "electronics");

    function toWishlist (product) {
        dispatch(setWishlist(product))
    }

    function toCart (product) {
        dispatch(setCart(product))
    }

    return(
        <div className="main-content">
            <SliderTop />

            <div className={"tovary"}>
                <div className="content">
                    <div className={"div-img"}><img src={Star} alt="star" /></div>
                    <div>Только в Розетке</div>
                </div>
                {jewerly.map(element => {
                    return <ProductItem
                        key={element.id}
                        product={element}
                        toWishlist={toWishlist}
                        toCart={toCart}
                        isToggledToWishlist = {!!wishlist.find(el => el.id === element.id)}
                        isToggledToCart = {!!cart.find(el => el.id === element.id)}
                    />})}
            </div>
            <div className={"tovary"}>
                <div className="content">
                    <div className={"div-img"}><img src={Chat} alt="chat" /></div>
                    <div>Сейчас популярны в категории Женская одежда</div>
                </div>
                {womenclothing.map(element => {
                    return <ProductItem
                        key={element.id}
                        product={element}
                        toWishlist={toWishlist}
                        toCart={toCart}
                        isToggledToWishlist = {!!wishlist.find(el => el.id === element.id)}
                        isToggledToCart = {!!cart.find(el => el.id === element.id)}
                    />})}
            </div>

            <div className={"tovary"}>
                <div className="content">
                    <div className={"div-img"}><img src={Viewed} alt="eye" id={"eye"}/></div>
                    <div>Последние просмотренные товары</div>
                </div>
                {menclothing.map(element => {
                    return <ProductItem
                        key={element.id}
                        product={element}
                        toWishlist={toWishlist}
                        toCart={toCart}
                        isToggledToWishlist = {!!wishlist.find(el => el.id === element.id)}
                        isToggledToCart = {!!cart.find(el => el.id === element.id)}
                    />})}
            </div>

            <div className={"tovary"}>
                <div className="content">
                    <div className={"div-img"}><img src={Newicon} alt="icon" /></div>
                    <div>Возможно, Вас заинтересует</div>
                </div>
                {electronics.map(element => {
                    return <ProductItem
                        key={element.id}
                        product={element}
                        toWishlist={toWishlist}
                        toCart={toCart}
                        isToggledToWishlist = {!!wishlist.find(el => el.id === element.id)}
                        isToggledToCart = {!!cart.find(el => el.id === element.id)}
                    />})}
            </div>


        </div>
    )
}