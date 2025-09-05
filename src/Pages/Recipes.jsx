import { NavLink } from "react-router-dom"
import detailedRecipes from "../Data/detailed-recipes"
export default function Recipes() {
    const recipesElement = detailedRecipes.map(recipe => {
        return <div key={recipe.id} className="recipe-wrapper">
            <h1>{recipe.title}</h1>
            <div className="recipe-content">
                <div className="recipe-image" style={{ backgroundImage: `url(${recipe.image})` }}>
                    <div className="review-box"> 
                        <p><i className="fa-regular fa-eye"></i>{recipe.reviews}+</p>
                    </div>
                </div>
                <NavLink to={`${recipe.name}`} className="recipe-introduction">
                    See Complete Recipe
                    <i className="fa-solid fa-hamburger"></i>
                    </NavLink>
            </div>
        </div>
    })
    return (
        <>
            <section className="recipes-section">
                <div className="recipes-header" style={{backgroundImage:"url(https://t3.ftcdn.net/jpg/03/71/02/64/240_F_371026496_QDDAlu6JAg7Khr1uhm6CrPqcgWDzAi8Q.jpg)"}}>
                    <h1>Explore <br /> <span>Culinary</span> Insights</h1>
                </div>
                <h2>What to <span>Cook</span>?</h2>
                <div className="recipes-holder">
                    {recipesElement}
                </div>
            </section>
        </>
    )
}
