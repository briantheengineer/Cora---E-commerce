import "./Body.css"
import Model from "./images/model-body.png"
export default function Body() {
    return(
        <div class="body-div">
            <div class="content-body">
                <div class="body-text">
                    <div class="body-openning">
                        <h1>Collections</h1>
                        <br></br>
                        <p>You can explore and shop many different collections</p>
                        <p>From various brands here!</p> 
                        <br></br>
                        <button class="btn"><i class="bi bi-bag-fill"></i>  Shop Now</button>  
                    </div>
                    
                </div>
                <div class="body-img">
                    <img src={Model} alt="" />
                </div>
            </div>
        </div>
    )
}