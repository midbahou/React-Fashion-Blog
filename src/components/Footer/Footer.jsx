

function Footer() {
    
    return (
        <div>
       
       <nav aria-label="Footer Navigation" role="navigation">
        <ul className="footer-nav" style={{display: "flex", justifyContent: "space-evenly"}}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Women's</a></li>
            <li><a href="#">Men's</a></li>
            <li><a href="#">On the Street</a></li>
            <li><a href="#">The Catwalk</a></li>
            <li><a href="#">AdWatch</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Tips</a></li>
        </ul>
        <h3>&#169; 2019 Valet Industries, Inc</h3>
       </nav>
        </div>
    )
}

export default Footer;