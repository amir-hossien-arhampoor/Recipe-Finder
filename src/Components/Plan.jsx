import { NavLink } from "react-router-dom"

export default function Plan({type ,name, priceMonthly,priceYearly, features, bestFor, trial , color ,billingType}) {
    return (
        <>
            <div className="plan-box">
                <div className="plan-type">
                    <div className={`glow-circle ${type}`}></div>
                    <h4 className={`${color}`}>{name}</h4>
                </div>
                <div className="plan-price">
                    <span>{billingType === "monthly" ? priceMonthly : priceYearly}</span>
                    <p>{billingType === "monthly" ? "/ month" : "/ year"}</p>
                </div>
                <div className="plan-benefits">
                    <div className="plan-benefit-top">
                        {features.map(feature => (
                        <p><i className="fa-solid fa-plus"></i>{feature}</p>
                    ))}
                    </div>
                    <h5>{bestFor}</h5>
                    <span>{trial}</span>
                </div>
                <NavLink>Get Plan</NavLink>
            </div>
        </>
    )
}