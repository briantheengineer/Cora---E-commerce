import "./Assembly.css"
import jsonData from "./data.json"
import Card from "./Card.js"
export default function Assembly() {
    const data = jsonData
    return (
        <div className="assembly-div">
            <div className="assembly-nav">
                <p>All Products</p>
            </div>
            <div className="assembly-cards">
                {data.map(cardData => (
                    <Card key={cardData.id} {...cardData} />
                    ))}
            </div>
                 
        </div>
    )
}