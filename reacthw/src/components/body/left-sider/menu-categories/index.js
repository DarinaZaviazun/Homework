import {MenuBase} from "../menu/MenuBase";
import {WholeMenu} from "../../../whole-menu/Whole-menu";
import "./categories.css"

export const MenuCategories = () => {

    return(

        <div className="main-div100">
            <MenuBase/>
            <div className="popup6"><WholeMenu/></div>
        </div>
    )
}