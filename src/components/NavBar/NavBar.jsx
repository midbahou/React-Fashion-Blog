import "../NavBar/NavBar.css"

function NavBar() {

    return (
        <div>

            <nav aria-label="Main Navigation" role="navigation">
                <ul className="main-nav">
                    <li><a href="#">Women's</a></li>
                    <li><a href="#">Men's</a></li>
                    <li><a href="#">On the Street</a></li>
                    <li><a href="#">The Catwalk</a></li>
                    <li><a href="#">AdWatch</a></li>
                    <li><a href="#">About</a></li>
                </ul>

            </nav>
        </div>
    )
}

export default NavBar;