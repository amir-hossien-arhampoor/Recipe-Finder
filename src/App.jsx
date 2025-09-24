import { Routes, Route } from "react-router-dom";
import SingleCategory from "./Components/SingleCategory";
import LatestNews from "./Components/LatestNews";
import Layout from "./Components/Layout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Recipes from "./Pages/Recipes";
import SingleRecipe from "./Pages/SingleRecipe";
import Subscription from "./Pages/Subscription";
import UserSignUp from "./Pages/UserSignUp";
import NotFound from "./Pages/NotFound";
import FeaturedRecipes from "./Components/FeaturedRecipes";
import NewestRecipes from "./Components/NewestRecipes"
import AiFetchedRecipe from "./Pages/AiFetchedRecipe";
import '@fortawesome/fontawesome-free/css/all.min.css';
import PageLoader from "./Components/PageLoader";
export default function App() {
  return (
    <>
      <PageLoader>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="news" element={<News />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="recipes/:id" element={<SingleRecipe />} />
            <Route path="recipes/newestrecipes" element={<NewestRecipes />} />
            <Route path="recipes/featuredrecipes" element={<FeaturedRecipes />} />
            <Route path="ai-recipe" element={<AiFetchedRecipe/>}/>
            <Route path="subscription" element={<Subscription />} />
            <Route path="latestnews" element={<LatestNews />} />
            <Route path="/categories/:id" element={<SingleCategory />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/usersignup" element={<UserSignUp />} />
        </Routes>
      </PageLoader>
    </>
  );
}
