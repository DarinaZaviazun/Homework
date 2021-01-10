import "./slider_top.css"
import First from "../../../images/slider/27201.jpg"
import Second from "../../../images/slider/27202.jpg"
import Third from "../../../images/slider/27203.jpg"
import Fourth from "../../../images/slider/27204.jpg"
import Fifth from "../../../images/slider/27205.jpg"
import Sixth from "../../../images/slider/27206.jpg"
import Seventh from "../../../images/slider/27207.jpg"
import Eighth from "../../../images/slider/27208.jpg"
import Nineth from "../../../images/slider/27209.jpg"

export const SliderTop = () => {

    return(
        <div className="slider-main">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={First}
                             alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Second}
                             alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Third}
                             alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Fourth}
                             alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Fifth}
                             alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Sixth}
                             alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Seventh}
                             alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Eighth}
                             alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Nineth}
                             alt="Second slide"/>
                    </div>

                </div>
                {/*<a className="carousel-control-prev" href="" role="button" data-slide="prev">*/}
                {/*    <span className="carousel-control-prev-icon" aria-hidden="true"/>*/}
                {/*    <span className="sr-only">Previous</span>*/}
                {/*</a>*/}
                {/*<a className="carousel-control-next" href="" role="button" data-slide="next">*/}
                {/*    <span className="carousel-control-next-icon" aria-hidden="true"/>*/}
                {/*    <span className="sr-only">Next</span>*/}
                {/*</a>*/}
            </div>
            <div className="calc-akcii">Все акции "count-akcij"</div>
        </div>
    )
}