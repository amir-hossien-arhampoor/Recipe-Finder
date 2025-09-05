export default function CookInfo({ iconClass , label , value}) {
    return (
        <>
            <div className="recipe-info-wrapper">
                <i className={iconClass}></i>
                <div className="category-info detail-info">
                    <span>{label}</span>
                    <p>{value}</p>
                </div>
            </div>
        </>
    )
}
