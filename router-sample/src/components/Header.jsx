import { Link, useNavigate } from "react-router-dom"

const Header =()=>{
    
    const navig = useNavigate

    const handleClick =()=>{
        const flag = true
        if (flag) {
            navig("/services")
        }
    }
    
    return (
        <header className="flex  justify-between items-center px-20 py-10 md:px-10 ">
            <h1 className="text-4xl font-bold ">Brand</h1>
            <nav>
                <ul className="flex gap-10 items-center justify-center sm:hidden md:flex " >
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/blog'}>Blog</Link>
                    </li>
                    <li>
                        <Link to={'/services'}>Services</Link>                       
                    </li>
                    <li>
                        <Link to={'/dashboard'}>Dashboard</Link>                       
                    </li>
                </ul>
            </nav>
            <button onClick={handleClick}  className="bg-gray-700 text-white px-3 py-2 rounded-full">Contact Us</button>
        </header>
    )
}

export default Header