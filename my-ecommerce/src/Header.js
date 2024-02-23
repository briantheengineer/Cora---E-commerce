import "./Header.css"
export default function Header() {
    return (
    <nav role="navigation" class="navbar ">
        <i class="fas fa-cart-shopping"></i>
        <div class="content content-fluid">
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <a class="navbar-brand"><img /></a>
            <div class="icons">
                <button><i class="bi bi-person-circle"></i> Account </button>
                <button><i class="bi bi-bag-fill"></i> Shopping </button>
            </div>
        </div>
        <br></br>
    </nav>

            
    )
}

