import "./grafic.css"

export const Grafic = () => {

    return(
        <div id={"div8"}>
            <div id={"div5"}>График работы Call-центра</div>
            <div id={"div6"}>+38 044 537-02-22</div>
            <div id={"div6"}>+38 044 503-80-80</div>
            <table>
                <tbody>
                    <tr>
                        <td>В будние</td>
                        <td>с 8:00 до 21:00</td>
                    </tr>
                    <tr>
                        <td>Суббота</td>
                        <td>с 9:00 до 20:00</td>
                    </tr>
                    <tr>
                        <td>Воскресенье</td>
                        <td>с 10:00 до 19:00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}