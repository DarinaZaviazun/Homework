import "./data.css"
import Telephone from "../../../images/phone.png"
import Drop from "../../../images/drop.png"

export const DataMenu = () => {

    return (
        <div className="data">
            <div>
                <ul className="data1">
                    <li>
                        <button   type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCentered"
                                 className="phone">
                            <img src={Telephone} alt="telephone" className="phone-icon"/>
                            <span>(044) 537-02-22</span>
                            <img src={Drop} alt="drop" className="phone-icon2"/>
                        </button>
                    </li>
                    <li><a href="/contacts">Контакты</a></li>
                    <li><a href="/help">Помощь</a></li>
                    <li><a href="/covid19">Наш ответ Covid-19</a></li>
                </ul>

            </div>
            <div>
                <ul className="data1">
                    <li className="language"><div>RU</div> <div>|</div> <div>UA</div></li>
                    <li>Город Львов</li>
                    <li className="last"><a href="/user">Здравствуйте, войдите в личный кабинет</a></li>
                </ul>
            </div>
        </div>
    )
}