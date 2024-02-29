import "./Assembly.css"
import Card from "./Card.js"
export default function Assembly() {
    return (
        <div class="assembly-div">
            <div class="assembly-nav">
                <p>All Products</p>
                <p>T-Shirt</p>
                <p>Shoes</p>
                <p>Acessories</p>
            </div>
            <div class="assembly-cards">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}