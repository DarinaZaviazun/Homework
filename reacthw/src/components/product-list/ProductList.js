import ProductService from "../../services/ProductService";
import {useCallback, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../../redux";
import {Product} from "../product-item";


export function  ProductList () {

    const {products: {products}} = useSelector(state => state);

    const dispatch = useDispatch();

    const fetchData = useCallback(async () => {
        const data = await ProductService.getProducts();
        dispatch(setProducts(data));
    }, [])


    useEffect(() => {
        fetchData();
    }, [])

    const toWishList = (product) => {
        let aa = products.filter(product => product.id === product.id)
        console.log(aa)
    }

    const toCart = (product) => {
        let aa = products.filter(product => product.id === id)
        console.log(aa)
    }

    return(
        <div>
            {!!products &&
                products.map(product => {
                        return <Product product={product} toWishList={toWishList} toCart={toCart} key={product.id}/>
                    }
                )
            }
        </div>
    )
}