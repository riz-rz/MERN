
const Header =()=>{
    return (
        <header className="flex  justify-between items-center px-20 py-10 md:px-10 ">
            <h1 className="text-4xl font-bold ">Brand</h1>
            <nav>
                <ul className="flex gap-10 items-center justify-center sm:hidden md:flex " >
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <button className="bg-gray-700 text-white px-3 py-2 rounded-full">Read More</button>
        </header>
    )
}

export default Header