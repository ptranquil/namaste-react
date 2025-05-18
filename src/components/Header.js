import { useState } from "react";

const Header = () => {
    const [login, setLogin] = useState(true)
    return (
        <div className="header">
            <div className="logo-container">
                <img className='logo' src="https://png.pngtree.com/png-vector/20230212/ourmid/pngtree-restaurant-logo-design-png-image_6594084.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <li>Contact Us</li>
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