import OpenAI from "openai";
import { useState, useEffect, useRef } from "react";
import cookInfo from "../Data/recipe-cook-info"
import CookInfo from "../Components/CookInfo"
import AiLoader from "../Components/AiLoader";


export default function AiFetchedRecipe() {
	const [recipe, setRecipe] = useState(null)
	const [loading, setLoading] = useState(null)
	const [userIngredients, setIngredients] = useState([])
	const [input, setInput] = useState("")
	const recipeRef = useRef(null)

	const openai = new OpenAI({
		apiKey: "", // Paste your API KEY here... 
		dangerouslyAllowBrowser: true
	});

	useEffect(() => {
		if (recipe && recipeRef.current) {
			recipeRef.current.scrollIntoView({ behavior: "smooth" })
		}
	}, [recipe])
	function addIngredient(formData) {
		let newIngredient = formData.get("ingredientInput").trim()
		if (newIngredient && !userIngredients.includes(newIngredient)) {
			setIngredients(prevIngredient => [...prevIngredient, newIngredient])
			setInput("")
		}
	}
	const ingredientsList = userIngredients.map((ingredient, index) => <p>{index + 1}.{ingredient}</p>)

	const generateRecipe = async (userIngredients) => {
		setLoading(true)
		setRecipe(null)

		const response = await openai.responses.create({
			model: "gpt-4o-mini",
			input: [
				{
					role: "system",
					content: "You are a recipe generator. Always return JSON in the specified format."
				},
				{
					role: "user",
					content: `Create a recipe using these ingredients: ${userIngredients}.Return the JSON object with fields: 
                            name, 
                            category,             
                            rating, 
                            reviews, 
                            prepTime (just number), 
                            cookTime (just number), 
                            difficulty, 
                            servings, 
                            mealType, 
                            description, 
                            nutritionalInfo (simple array), 
                            ingredients (array), 
                            instructions (array).`
				}
			],

		})
		if (response.output_text) {
			let cleanText = response.output_text
				.replace(/```json/gi, "")
				.replace(/```/g, "")
				.trim();
			const match = cleanText.match(/\{[\s\S]*\}/);
			if (match && match[0]) {
				try {
					const recipeJSON = JSON.parse(match[0]);
					setRecipe(recipeJSON);
					setLoading(false)
					setIngredients([])
				} catch (err) {
					setLoading(false)
					console.error("JSON parse error:", err, match[0]);
				}
			} else {
				console.error("No JSON object found in response:", cleanText);
				setLoading(false)
			}
		}


	}



	return (
		<>
			{loading && <AiLoader />}
			<section className="ai-recipe">
				<div className="ai-header">
					<h1>Discover endless <span>culinary</span> possibilities.</h1>
					<p>Simply add your <span>ingredients</span>, and our AI will generate creative recipes designed to inspire your cooking.</p>
					<form className="user-ingredients" action={addIngredient}>
						<div className="input-bar">
							<input type="text" name="ingredientInput" value={input} onChange={e => setInput(e.target.value)} placeholder="Add Ingredients..." />
							<button >Add Ingredient</button>
						</div>
					</form>
					{userIngredients.length > 0 && <div className="saved-ingredients">
						<p className="ingredient-title">Ingredients on hand:</p>
						<div className="ingredients-list">
							{ingredientsList}
						</div>
					</div>}
					{userIngredients.length >= 4 && <button onClick={() => generateRecipe(userIngredients)}>Generate Recipe</button>}
				</div>

				{recipe && <section className="single-recipe" ref={recipeRef}>
					<div className="recipe-img" >
						<i className="fa-regular fa-heart"></i>
						<div className="recipe-img-title">
							<p>Let's Cook</p>
							<h1 style={{ color: "black" }}>{recipe.name}</h1>
						</div>
					</div>

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
				</section>}
			</section>
		</>
	)
}



