import { NavLink } from "react-router-dom"
export default function Intro() {
    return (
        <>
            <section className="intro-section">
                <div className="intro-description">
                    <h1>Learn cooking in a simple way.</h1>
                    <p>
                        Over 10,000+ food recipes from all around the world you can
                        try.Start cooking now!
                    </p>
                    <div className="intro-search">
                        <NavLink to="/recipes">Get Started</NavLink>
                        <input type="text" placeholder="Search recipes..." />
                        <button className="search-btn">
                            <i className="fa-solid fa-search"></i>
                        </button>
                    </div>
                </div>
                <img src="../../public/chief-inside-monitor.jpg" alt="" />
            </section>
        </>
    )
}