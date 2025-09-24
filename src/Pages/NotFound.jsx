import { NavLink } from "react-router-dom"

export default function NotFound() {
    return (
        <>
            <div className="not-found">
                <div className="not-found-text">
                    <p>Page not found...</p>
                    <span>:(</span>
                    <NavLink to="/">Go to homepage</NavLink>
                </div>
                <h1>404</h1>
            </div>
        </>
    )
}