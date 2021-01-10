import Pop from "../../../images/premium_pop.png"

export const PremiumPop = () => {

    return(
        <div className={"premium-pop"}>
                <img src={Pop} alt={"premium"} />
                <button className="btn-premium">Узнать больше</button>
        </div>
    )
}