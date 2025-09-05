import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import detailedRecipes from "../Data/detailed-recipes"
import { NavLink } from "react-router-dom"

export default function SingleCategory() {
    const [recipes, setRecipes] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const categorizedRecipes = detailedRecipes.filter(recipe => {
            return recipe.category === id.toLowerCase()
        })

        setRecipes(categorizedRecipes)
    }, [id])
    const recipesElement = recipes.map(recipe => {
        return <div key={recipe.id} className="recipe-wrapper">
                    <h1>{recipe.title}</h1>
                    <div className="recipe-content">
                        <div className="recipe-image" style={{ backgroundImage: `url(${recipe.image})` }}>
                            <div className="review-box">
                                <p><i className="fa-regular fa-eye"></i>{recipe.reviews}+</p>
                            </div>
                        </div>
                        <NavLink to={`/recipes/${recipe.name}`} className="recipe-introduction">
                        See Complete Recipe
                        <i className="fa-solid fa-burger"></i>
                        </NavLink>
                    </div>
                </div>
    })
    
    if (!recipes) {
        return <div>Loading...</div>
    }
    return (
        <>
            <section className="recipes-by-category">
                <div className="category-background">
                    <h1>Here, there are {recipesElement.length} <span>{id} recipes</span> ready for you to make your day better</h1>
                </div>
                <div className="category-recipes-wrapper">
                    {recipesElement}
                </div>
            </section>
        </>
    )
}