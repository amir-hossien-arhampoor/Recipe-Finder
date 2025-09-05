import Intro from "../Components/Intro";
import FeaturedRecipes from "../Components/FeaturedRecipes";
import FindByCategory from "../Components/FindByCategory";
import LatestNews from "../Components/LatestNews";
import NewestRecipes from "../Components/NewestRecipes";
import NewsLetterSub from "../Components/NewsLetterSub";


export default function Home() {
  return (
    <>
      {/* Home Intro section*/}
      {<Intro />}

      {/* Featured Recipes  section*/}
      {<FeaturedRecipes />}

      {/* Find by category section */}
      {<FindByCategory />}

      {/* Latest News */}
      {<LatestNews />}

      {/* Newest Recipes */}
      {<NewestRecipes />}

      {/* Newsletter */}
      {<NewsLetterSub />}
    </>
  );
}
