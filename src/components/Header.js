import { useState } from "react";
import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constant"

const Header = () => {
    const [login, setLogin] = useState(true)
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/"><img className='logo' src={LOGO_URL}></img></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about-us">About Us</Link></li>
                    <li><Link to="cart">Cart</Link></li>
                    <li><Link to="contact-us">Contact Us</Link></li>
                    <li><button onClick={(prev) => {
                        console.log(prev)
                        setLogin(!login)
                    }}>{login == true ? 'Login': 'Logout'}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;