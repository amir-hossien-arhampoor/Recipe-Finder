import { NavLink } from "react-router-dom"

export default function NewsLetterSub() {
    return (<>
        
        <section className="newsletter-section">
            <h1>Subscribe Our Newsletter</h1>
            <p>Stay updated with our best news and recipes!</p>
            <div className="newsletter-email">
                <i className="fa-solid fa-envelope"></i>
                <input type="text" placeholder="Enter your email..."/>
                <NavLink to="/subscription"><i className="fa-solid fa-paper-plane"></i></NavLink>
            </div>
        </section>
    </>)
}