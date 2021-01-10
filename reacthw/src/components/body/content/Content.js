import "./content.css"
import {SliderTop} from "../slider-top";
import Star from "../../../images/star.png"

export const Content = () => {

    return(
        <div className="main-content">
            <SliderTop />
            <div className="tolko">
                <img src={Star} alt="star" />
                Только в Розетке
            </div>
        </div>
    )
}