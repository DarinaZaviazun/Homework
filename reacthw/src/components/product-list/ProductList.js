import ProductService from "../../services/ProductService";
import {useCallback, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {setProducts, setWishList, setCart} from "../../redux";
import {Product} from "../product-item";



export function  ProductList () {

    const {products: {products}, wishlist: {wishlist}, cart:{cart}} = useSelector(state => state);

    const dispatch = useDispatch();

    const fetchData = useCallback(async () => {
        const data = await ProductService.getProducts();
        dispatch(setProducts(data));
    }, [])


    useEffect(() => {
        fetchData();
    }, [])

    const toWishList = (product) => {
        dispatch(setWishList(product))
    }

    const toCart = (product) => {
        dispatch(setCart(product))
    }

    return(
        <div>
            {
                products.map(product => {
                        return <Product
                            product={product}
                            toWishList={toWishList}
                            toCart={toCart}
                            key={product.id}
                            isAddedToWishList={!!wishlist.find(({id}) => id === product.id)}
                            isAddedToCart={!!cart.find(({id}) => id === product.id)}
                        />
                    }
                )
            }
        </div>
    )
}