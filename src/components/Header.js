import { useState } from "react";
import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constant"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [login, setLogin] = useState(true)

    const isOnline = useOnlineStatus();
    return (
        <div className="flex justify-between items-center bg-pink-50 drop-shadow-black">
            <div className="logo-container">
                <Link to="/"><img className='w-30' src={LOGO_URL}></img></Link>
            </div>
            <div>
                <ul className="flex font-medium">
                    <li className="pr-10">Status : {isOnline ? "🟢" : "🔴"}</li>
                    <li className="pr-10"><Link to="/">Home</Link></li>
                    <li className="pr-10"><Link to="about-us">About Us</Link></li>
                    <li className="pr-10"><Link to="cart">Cart</Link></li>
                    <li className="pr-10"><Link to="grocery">Grocery</Link></li>
                    <li className="pr-10"><Link to="contact-us">Contact Us</Link></li>
                    <li className="pr-10"><button onClick={(prev) => {
                        console.log(prev)
                        setLogin(!login)
                    }}>{login == true ? 'Login': 'Logout'}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;