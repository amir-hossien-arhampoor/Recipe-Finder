
import { useState } from "react"
export default function About() {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 2000);

    return (
        <>
            <section className="about-section">
                <div className="description">
                    <h1>Welcome to Iran Recipe!</h1>
                    <p>Our mission is to make cooking simple, fun, and inspiring for everyone. Whether you’re a beginner learning your way around the kitchen or a seasoned cook looking for fresh ideas, Iran Recipe helps you discover the perfect recipe in just a few clicks.</p>
                    <h4>With Iran Recipe, you can:</h4>
                    <ul>
                        <li>Search thousands of recipes by name, ingredients, or category.</li>
                        <li>Enter the ingredients you already have at home to find dishes you can cook right away.</li>
                        <li>Save your favorite recipes for quick access anytime.</li>
                        <li>Explore new meal ideas, from quick snacks to gourmet dinners.</li>
                    </ul>
                    
                </div>
                <img src="https://plus.unsplash.com/premium_vector-1682301003186-0600ac1fbf19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D" alt="" />
            </section >
        </>
    )
}