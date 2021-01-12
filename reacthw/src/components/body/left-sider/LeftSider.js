import "./left-sider.css"
import {Autorization} from "./autorization";
import {InstallApp} from "./install_App";
import {Grafic} from "./grafic_raboty";
import {SocialMedia} from "./social_media";
import {MenuCategories} from "./menu-categories";


export const LeftSider = () => {

    return(
        <div className="main-div1">
            <MenuCategories/>
            <Autorization />
            <InstallApp />
            <Grafic />
            <SocialMedia />
        </div>
    )
}