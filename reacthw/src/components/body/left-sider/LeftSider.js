import "./left-sider.css"
import {Autorization} from "./autorization";
import {InstallApp} from "./install_App";
import {Grafic} from "./grafic_raboty";
import {SocialMedia} from "./social_media";
import {MenuBase} from "./menu/MenuBase";
import {WholeMenu} from "../../whole-menu/Whole-menu";


export const LeftSider = () => {

    return(
        <div className="main-div1">
            <div className="main-div100">
                <MenuBase/>
                <div className="popup6"><WholeMenu/></div>
            </div>
            <Autorization />
            <InstallApp />
            <Grafic />
            <SocialMedia />
        </div>
    )
}