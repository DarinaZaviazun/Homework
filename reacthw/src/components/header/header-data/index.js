import "./data.css"
import Telephone from "../../../images/phone.png"

export const DataMenu = () => {

    return (
        <div className="data">
            <div>
                <ul className="data1">
                    <li className="phone"><img src={Telephone} alt="telephone" className="phone-icon"/><span>(044) 537-02-22</span></li>
                    <li><a href="/contacts">Контакты</a></li>
                    <li>Помощь</li>
                    <li>Наш ответ Covid-19</li>
                </ul>
            </div>
            <div>
                <ul className="data1">
                    <li className="language"><div>RU</div> <div>|</div> <div>UA</div></li>
                    <li>Город Львов</li>
                    <li className="last">Здравствуйте, пользователь</li>
                </ul>
            </div>
        </div>
    )
}