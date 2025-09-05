import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import detailedRecipes from "../Data/detailed-recipes"
import cookInfo from "../Data/recipe-cook-info"
import CookInfo from "../Components/CookInfo"

export default function SingleRecipe() {
    const [recipe, setRecipe] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        const fetchedRecipe = detailedRecipes.find(recipe => recipe.name === id)
        setRecipe(fetchedRecipe)
    }, [id])
    if (!recipe) {
        return <div>Loading....</div>
    }
    return (
        <>
            <section className="single-recipe">
                <div className="recipe-img" style={{ backgroundImage: `url(${recipe.image})` }}>
                    <i className="fa-regular fa-heart"></i>
                    <div className="recipe-img-title">
                        <p>Let's Cook</p>
                        <h1>{recipe.title}</h1>
                    </div>
                </div>
                {/*  */}
                <div className="recipe-cooking-info">
                    {Object.keys(cookInfo).map((key) => {
                        const { label, icon, suffix = "" } = cookInfo[key]
                        return (
                            <CookInfo
                                key={key}
                                iconClass={icon}
                                label={label}
                                value={`${recipe[key]}${suffix}`}
                            />
                        )
                    })}
                </div>
                <div className="recipe-description">
                    <div className="description-text">
                        <p>{recipe.description}</p>
                    </div>
                    <div className="recipe-nutrotional">
                        <h1>Nutritional Info</h1>
                        <div className="nutritional-items">
                            {recipe.nutritionalInfo.map(nutrition => <p>{nutrition}</p>)}
                        </div>
                    </div>
                </div>
                <div className="recipe-ingredients">
                    <h1>Ingredients</h1>
                    <div className="ingredients-items">
                        {recipe.ingredients.map(ingredient => <p>{ingredient}</p>)}
                    </div>
                </div>
                <div className="recipe-instructions">
                    <h1>Cooking <span>Instructions</span></h1>
                    <div className="instruction-items">
                        {recipe.instructions.map((instruction, index) => {
                            return <div className="instruction-step">
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <p>{instruction}</p>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
