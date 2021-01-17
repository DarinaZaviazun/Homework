import "./pagelayout.css"
import {Header} from "../Header";
import {Footer} from "../Footer";

export const PageLayout = ({children}) => {

    return(
        <div className={"page-layout"}>
            <Header/>
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}