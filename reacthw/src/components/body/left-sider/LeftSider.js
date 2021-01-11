import "./left-sider.css"
import One from "../../../images/icons-left-menu/1.png"
import Two from "../../../images/icons-left-menu/2.png"
import Three from "../../../images/icons-left-menu/3.png"
import Four from "../../../images/icons-left-menu/4.png"
import Fife from "../../../images/icons-left-menu/5.png"
import Six from "../../../images/icons-left-menu/6.png"
import Seven from "../../../images/icons-left-menu/7.png"
import Eight from "../../../images/icons-left-menu/8.png"
import Nine from "../../../images/icons-left-menu/9.png"
import Ten from "../../../images/icons-left-menu/10.png"
import Eleven from "../../../images/icons-left-menu/11.png"
import Twelve from "../../../images/icons-left-menu/12.png"
import Thirteen from "../../../images/icons-left-menu/13.png"
import Fourteen from "../../../images/icons-left-menu/14.png"
import Fifteen from "../../../images/icons-left-menu/15.png"
import Sixteen from "../../../images/icons-left-menu/16.png"
import Seventeen from "../../../images/icons-left-menu/17.png"
import RightArrow from "../../../images/rightArrow.png"
import Tree from "../../../images/christmas-tree.png"
import {Autorization} from "./autorization";
import {InstallApp} from "./install_App";
import {Grafic} from "./grafic_raboty";
import {SocialMedia} from "./social_media";


export const LeftSider = () => {

    return(
        <div className="main-div1">
            <div className="main-div">
                <div>
                    <div>
                        <img src={One} alt={"icon"} className={"icon"}/>
                        Ноутбуки и компьютеры
                    </div>
                    <img src={RightArrow} alt={"rightarrow"} className={"arrow"}/>
                </div>
                <div>
                    <div>
                        <img src={Two} alt={"icon"} className={"icon"}/>
                        Смартфоны, ТВ и электроника
                    </div>
                    <img src={RightArrow}alt={"rightarrow"}  className={"arrow"}/>
                </div>
                <div>
                    <div>
                        <img src={Three} alt={"icon"} className={"icon"}/>
                        Товары для геймеров
                    </div>
                    <img src={RightArrow} alt={"rightarrow"}  className={"arrow"}/>
                </div>
                <div>
                    <div>
                        <img src={Four} alt={"icon"} className={"icon"}/>
                        Бытовая техника
                    </div>
                    <img src={RightArrow} alt={"rightarrow"}  className={"arrow"}/>
                </div>
                <div>
                    <div>
                        <img src={Fife} alt={"icon"} className={"icon"}/>
                        Товары для дома
                    </div>
                    <img src={RightArrow} alt={"rightarrow"}  className={"arrow"}/>
                </div>
                <div>
                    <div>
                        <img src={Six} alt={"icon"} className={"icon"}/>
                        Инструменты и автотовары
                    </div>
                    <img src={RightArrow} alt={"rightarrow"}  className={"arrow"}/>
                </div>
                <div>
                    <div>
                        <img src={Seven} alt={"icon"} className={"icon"}/>
                        Сантехника и ремонт
                    </div>
                    <img src={RightArrow} alt={"rightarrow"}  className={"arrow"}/>
                </div>
                <div>
                    <div>
                        <img src={Eight} alt={"icon"} className={"icon"}/>
                        Дача, сад и огород
                    </div>
                    <img src={RightArrow} alt={"rightarrow"}  className={"arrow"}/>
                </div>
                <div>
                    <div>
                        <img src={Nine} alt={"icon"} className={"icon"}/>
                        Спорт и увлечения
                    </div>
                    <img src={RightArrow} alt={"rightarrow"}  className={"arrow"}/>
                </div>
                <div>
                    <div>
                        <img src={Ten} alt={"icon"} className={"icon"}/>
                        Одежда, обувь и украшения
                    </div>
                    <img src={RightArrow} alt={"rightarrow"}  className={"arrow"}/>
                </div>
                <div>
                    <div>
                        <img src={Eleven} alt={"icon"} className={"icon"}/>
                        Красота и здоровье
                    </div>
                    <img src={RightArrow} alt={"rightarrow"}  className={"arrow"}/>
                </div>
                <div>
                    <div>
                        <img src={Twelve} alt={"icon"} className={"icon"}/>
                        Детские товары
                    </div>
                    <img src={RightArrow} alt={"rightarrow"}  className={"arrow"}/>
                </div>
                <div>
                    <div>
                        <img src={Thirteen} alt={"icon"} className={"icon"}/>
                        Канцтовары и книги
                    </div>
                    <img src={RightArrow} alt={"rightarrow"}  className={"arrow"}/>
                </div>
                <div>
                    <div>
                        <img src={Fourteen} alt={"icon"} className={"icon"}/>
                        Алкогольные напитки и продукты
                    </div>
                    <img src={RightArrow} alt={"rightarrow"}  className={"arrow"}/>
                </div>
                <div>
                    <div>
                        <img src={Fifteen} alt={"icon"} className={"icon"}/>
                        Товары для бизнеса
                    </div>
                    <img src={RightArrow} alt={"rightarrow"}  className={"arrow"}/>
                </div>
                <div>
                    <div>
                        <img src={Sixteen} alt={"icon"} className={"icon"}/>
                        Услуги и сервисы
                    </div>
                    <img src={RightArrow} alt={"rightarrow"}  className={"arrow"}/>
                </div>
                <div>
                    <div>
                        <img src={Seventeen} alt={"icon"} className={"icon"}/>
                        Все для уютных праздников
                        <img src={Tree} alt={"tree"} className={"icon-tree"}/>
                    </div>
                </div>
            </div>
            <Autorization />
            <InstallApp />
            <Grafic />
            <SocialMedia />
        </div>
    )
}