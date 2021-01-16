import "./body.css"
import {LeftSider} from "./left-sider";
import {Content} from "./content";
import {WholeMenu} from "../whole-menu/Whole-menu";
import {useDispatch, useSelector} from "react-redux";
import {setFlagForMenu} from "../../redux";

export const Body = () => {
    const {flagForMenu:{flagForMenu}} = useSelector(val => val);
    const dispatch = useDispatch();
    let html = document.querySelector('html');
    let menu = document.getElementsByClassName('popup7');

    html.addEventListener('click', function(e) {
        if(flagForMenu === true && menu.length > 0 && e.target.className !== 'popup7' && e.target.id !== "catalog-span" && e.target.className !== 'catalog' && e.target.id !== "catalog-icon"){

            try{
                menu[0].classList.add("hide");
                setTimeout(() => {dispatch(setFlagForMenu(!flagForMenu))}, 5)
            }
            catch(e){
                console.log(e)
            }
        }
    });

    return(

        <div className="body-main">
            <div>
                {flagForMenu === true && <div className={"popup7"}><WholeMenu /></div>}
            </div>
            <LeftSider />
            <Content />
        </div>
    )
}