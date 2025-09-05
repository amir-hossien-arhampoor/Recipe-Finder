import { NavLink } from "react-router-dom"
import {newsTitle} from "../Data/news-data"
export default function LatestNews() {
    return (<>
        <section className="news-section">
            <h1>Check our Latest News!</h1>
            <div className="news-wrapper">
                <img src={newsTitle.image} />
                <div className="new-description">
                    <h3>{newsTitle.title}</h3>
                    <p>{newsTitle.description}</p>
                    <NavLink to="/news"><span>Learn More</span></NavLink>
                </div>
            </div>
        </section>
    </>)
}

