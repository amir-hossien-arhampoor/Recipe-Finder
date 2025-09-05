import { NavLink } from "react-router-dom";
import { useState } from "react";
export default function Header() {

  const [sideBar , setSideBar] = useState(false)
  
  return (
    <>
      <header className="header-section">
        <NavLink to="/" className="header-title">
          <h1>
            <span>Iran</span>Recipe
          </h1>
          <img src="../../public/header-title-svg.svg.svg" alt="" />
        </NavLink>

        <div className="header-navbar">
          <div className="header-nav-btn">
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/news">News</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Recipes">Recipes</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/subscription">Subscribe</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/ai-recipe">AI Recipe</NavLink>
          </div>
          <div className="sign-in-btn">
            <i className="fa-solid fa-search"></i>
            <NavLink to="/usersignup">Sign in</NavLink>
            <i className="fa-solid fa-bars" onClick={() => setSideBar(prevState => !prevState)}></i>
          </div>
        </div>
      </header>
      <div className={`nav-side-bar ${sideBar ? "side-bar-open" : ""}`}>
        <i className="fa-solid fa-arrow-right" onClick={() => setSideBar(prevState => !prevState)}></i>
        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">About</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/news">News</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/Recipes">Recipes</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/subscription">Subscribe</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/ai-recipe">AI Recipe</NavLink>

      </div>
    </>
  );
}
