import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-title">
          <h1>
            <span>Iran</span>Recipe
          </h1>
          <img src="../../public/header-title-svg.svg.svg" alt="" />
        </div>
        <div className="footer-content">
          <div className="footer-explore footer-column">
            <h2>explore</h2>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/news">News</NavLink>
          </div>
          <div className="footer-recipes footer-column">
            <h2>Recipes</h2>
            <HashLink smooth to="/#featured-recipes">Featured Recipes</HashLink>
            <HashLink smooth to="/#newest-recipes">Newest Recipes</HashLink>
            <NavLink to="/recipes">Share Your Recipe</NavLink>
          </div>
          <div className="footer-contact footer-column">
            <h2>Contact</h2>
            <address>Gilan Province, Langarud, Azadegan, Iran</address>
            <div className="contact-number">
                <i className="fa-solid fa-phone"></i>
                <p>013 4324 7123</p>
            </div>
            <div className="contact-email ">
                <i className="fa-solid fa-envelope"></i>
                <p>supportIranRecipes.com</p>
            </div>
          </div>
          <div className="footer-media footer-column">
            <h2>Social Media</h2>
            <div className="media-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="footer-bottom-text">
          <h5>Terms & Conditions&nbsp;&nbsp;&nbsp;&nbsp;Privacy Policy</h5>
          <p>&copy;&nbsp;Iran Recipe 2025, All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
