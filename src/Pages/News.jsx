import newsData from "../Data/news-data"

export default function News() {
    const newsWrapper = newsData.map(newItem => {
        return <div key={newItem.id} className="news-content" >
            <div className="new-image" style={{ backgroundImage: `url(${newItem.image})` }}>
                <div className="new-info">
                    <h5>Author :<b>{newItem.author}</b></h5>
                    <p>{newItem.date}</p>
                </div>
            </div>
            <div className="news-description">
                <h1>{newItem.title}</h1>
                <p>{newItem.description}</p>
            </div>
        </div>
    })
    return (
        <>
            <section className="news-page-section">
                <h1>NEWS</h1>
                {newsWrapper}
            </section>
        </>
    )
}

