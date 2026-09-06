import  "./Header.css"

const Header =()=>{
    return (
        <header className="header">
            <h1 className="brand-name">Brand</h1>
            <nav>
                <ul className="nav-links" >
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <button className="butn">Read More</button>
        </header>
    )
}

export default Header