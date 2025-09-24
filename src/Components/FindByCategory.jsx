import categories from "../Data/categories-data"
import { NavLink } from "react-router-dom"

export default function FindByCategory() {
    const categoriesList = categories.map(category => {
        return <NavLink to={`/categories/${category.name}`}>
            <div key={category.id} className="category-item">
                <img src={category.image} alt="" />
                <p>{category.name}</p>
            </div>
        </NavLink>
    })
    return (
        <>
            <section className="categories-section">
                <h3>Find Recipes by Category</h3>
                <div className="categories-wrapper">
                    {categoriesList}
                </div>
            </section>
        </>
    )
}