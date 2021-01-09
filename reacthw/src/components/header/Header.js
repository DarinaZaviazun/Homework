import "./header.css"
import banner from "../../images/banner-top.jpg"
import {DataMenu} from "./header-data";
import {HeaderMenu} from "./header-menu";

export const Header = () => {
    return(
        <header>
            <div className="top-banner">
                <img src={banner}  alt={"banner in the top"} />
            </div>
            <div className="header-main">

                <DataMenu />
                <HeaderMenu />
            </div>

        </header>
    )
}