import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constant"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [login, setLogin] = useState(true)

    const {loggedInUser} = useContext(UserContext)

    /** Subscribing to the store uiing a selector */
    const cart = useSelector((store) => store.cart.items)

    const isOnline = useOnlineStatus();
    return (
        <div className="flex justify-between items-center bg-pink-50 drop-shadow-black">
            <div className="logo-container">
                <Link to="/"><img className='w-30' src={LOGO_URL}></img></Link>
            </div>
            <div>
                <ul className="flex font-medium">
                    <li className="pr-10 font-bold">Status : {isOnline ? "🟢" : "🔴"}</li>
                    <li className="pr-10 font-bold"><Link to="/">Home</Link></li>
                    <li className="pr-10 font-bold"><Link to="about-us">About Us</Link></li>
                    <li className="pr-10 font-bold"><Link to="cart">Cart ({cart.length} items)</Link></li>
                    <li className="pr-10 font-bold"><Link to="grocery">Grocery</Link></li>
                    <li className="pr-10 font-bold"><Link to="contact-us">Contact Us</Link></li>
                    <li className="pr-10 font-bold"><button onClick={(prev) => {
                        setLogin(!login)
                    }}>{login == true ? 'Login': 'Logout'}</button></li>
                    <li className="pr-10 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;