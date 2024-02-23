import "./HeaderSection.css"
export default function HeaderSection() {
    return (
        <div class="HeaderSection navbar navbar-expand-md">
             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#options-div" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <p>What are you looking for?</p>
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="options-div navbar-collapse collapse "id="options-div">
                <p >Dresses & Skirts</p>
                <p >Shirts & Blouses</p>
                <p >Pants</p>
                <p>Shoes</p>
                <p>Coats</p>
                <p>Jewelry & Accessories</p>
        </div>
        </div>
    )
}