import { OrbitProgress } from "react-loading-indicators"

export default function AiLoader() {
    return (
        <>
            <section className="generate-loading">
                <div className="loading-effect">
                    <OrbitProgress color="#ff7700ff" size="medium" text="" textColor="" />
                <p>Generating your creative Recipe...</p>
                </div>
            </section>
        </>
    )
}