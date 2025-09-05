import Plan from "../Components/Plan"
import subscriptionPlans from "../Data/subscription-plan"
import { useState } from "react"


export default function Subscription() {  
    const [billing, setBilling] = useState("monthly") 
    return (
        <>
            <section className="subscription-section">
                <h1>Choose your plan</h1>
                <div className="subscription-tip">
                    <p>Get the right plan for your cooking advanture.Plans can be upgraded in the future.</p>
                    <div className="subscription-btn">
                        <button onClick={() => setBilling("monthly")} autoFocus>Monthly</button>
                        <button onClick={() => setBilling("yearly")}>Yearly</button>
                    </div>
                </div>
                <div className="plans-wrapper">
                    {subscriptionPlans.map((plan, index )=> (
                        <Plan key={index} {...plan} billingType={billing}/>
                    ))}
                </div>
            </section>
        </>
    )
}

