import "./Card.css"
import "./data.json"
export default function Card({id, name, price, imgUrl, title, category}) {
    return (
        <div className="card-div" key= {id}>
            <div className="card-img">
                <img src={imgUrl} alt={title} />
            </div>
            <div class="product-content">
                <p className="product-name">{name}</p>
                <div className="product-info">
                    <p className="product-category">{category}</p>
                    <p className="price">${price}</p>
                </div>
            </div>
        </div>
    )
}