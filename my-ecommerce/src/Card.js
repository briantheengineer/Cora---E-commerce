import "./Card.css"
import "./data.json"
import { Link } from 'react-router-dom';
export default function Card({id, name, price, imgUrl, title, category}) {
    return (
        <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}>
        <div className="card-div" key= {id}>
            <div className="card-img">
                <img src={imgUrl} alt={title} />
            </div>
            <div className="product-content">
                <p className="product-name">{name}</p>
                <div className="product-info">
                    <p className="product-category">{category}</p>
                    <p className="product-price">${price}</p>
                </div>
            </div>
        </div></Link>
    )
}