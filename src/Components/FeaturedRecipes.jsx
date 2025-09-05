import detailedRecipes from "../Data/detailed-recipes";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";

export default function FeaturedRecipes() {
    const filteredRecipes = detailedRecipes.filter((recipe) =>
        recipe.tags.includes("featured-recipe")
    );

    return (
        <section className="featured-recipes" id="featured-recipes">
            <h4>Featured Recipes</h4>
            <Swiper
                modules={[Autoplay, Navigation, Pagination, Mousewheel]}
                loop={true}
                grabCursor={true}
                spaceBetween={0}
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation={true}
                mousewheel={true}

                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    620: {
                        slidesPerView: 2,
                        spaceBetween :20
                    },

                    980: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween :20
                    },
                    1324: {
                        slidesPerView: 4,
                        spaceBetween : 20
                    },
                }}
            >
                {filteredRecipes.map((recipe) => (
                    <SwiperSlide key={recipe.id}>
                        <NavLink to={`recipes/${recipe.name}`}>
                            <div
                                className="recipe-item"
                                style={{ backgroundImage: `url(${recipe.image})` }}
                            >
                                <div className="recipe-description">
                                    <h2>{recipe.title}</h2>
                                    <div className="recipe-detail">
                                        <div className="star-rated">
                                            <i className="fa-solid fa-star"></i>
                                            <span>{recipe.rating}</span>
                                            <p>({recipe.reviews})</p>
                                        </div>
                                        <p>
                                            by <b>{recipe.creator}</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
