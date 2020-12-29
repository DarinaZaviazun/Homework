import {Header} from "./components/header";
import {ProductList} from "./components/product-list";
import {useSelector} from "react-redux";
import "./App.css"

export function App() {
    const store = useSelector(state => state)


return(
    <div>
        <Header/>
        <ProductList/>
    </div>
)
}
