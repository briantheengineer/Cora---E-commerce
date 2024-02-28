import "./Main.css"
import Brand1 from "./images/brand-1.png"
import Brand2 from "./images/brand-2.png"
import Brand3 from "./images/brand-3.png"
import Brand4 from "./images/brand-4.png"
import Img1 from "./images/main-img-1.png"
import Img2 from "./images/main-img-2.png"
import Img3 from "./images/main-img-3.png"
import Img4 from "./images/main-img-4.png"
import Img5 from "./images/main-img-5.png"
export default function Main(){
    return (
        <div class="main-div">
            <div class="main-brands">
                <img class="img-fluid" src={Brand1} alt=""></img>
                <img class="img-fluid" src={Brand2} alt=""></img>
                <img class="img-fluid" src={Brand3} alt=""></img>
                <img class="img-fluid" src={Brand4} alt=""></img>
            </div>
            <div class="main-content">
                <div class="main-text">
                   <h5> EXPLORE NEW AND POPULAR STYLES</h5>
                </div>
                <div class="grid-container">
                    <div class="item1"><img src={Img1} alt=""></img></div>
                    <div class="small-img-div">
                        <div class="grid-item"><img src={Img2} alt=""></img></div>
                        <div class="grid-item"><img src={Img3} alt=""></img></div>
                        <div class="grid-item"><img src={Img4} alt=""></img></div>
                        <div class="grid-item"><img src={Img5} alt=""></img></div>
                        </div>
                </div>
            </div>
        </div>
    )
}