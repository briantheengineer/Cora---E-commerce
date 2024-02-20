import "./Header.css"
export default function Header() {
    return (
    <nav class="navbar">
        <i class="fas fa-cart-shopping"></i>
        <div class="content">
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <a class="navbar-brand"><img /></a>
            <div class="icons">
                <icon></icon>
                <p>Account</p>
                <i class="fas fa-cart-shopping"></i>
                <p>Shopping</p> 
            </div>         
        </div>
        <div class="navbar sec-nav">
            <p>Dresses & Skirts</p>
            <p>Shirts & Blouses</p>
            <p>Pants</p>
            <p>Shoes</p>
            <p>Coats</p>
            <p>Jewelry & Accessories</p>
        </div>
    </nav>

            
    )
}

