import "./install.css"
import Google from "../../../../images/google_app.png"
import Apple from "../../../../images/apple_app.png"

export const InstallApp = () => {

    return(
        <div id="div4">
            <div>
                Устанавливайте наши приложения
            </div>
            <div>
                <img src={Google} alt={"google store"} />
                <img src={Apple} alt={"apple store"} />
            </div>
        </div>
    )
}