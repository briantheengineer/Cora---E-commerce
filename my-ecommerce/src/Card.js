import "./Card.css"
import jsonData from "./data.json"
export default function Card() {
    const myData = jsonData;
    return (
        <div class="card-div">
            <img src="" alt="" />
            <p class="product-name">{myData[0].name}</p>
            <div class="product-info">
                <p class="product-category"></p>
                <p class="price">$</p>
            </div>
        </div>
    )
}