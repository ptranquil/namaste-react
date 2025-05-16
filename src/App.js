import * as css from './App.css';

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

const Search = () => {
    return <h3>Search.....</h3>
}

const RestaurantCards = (props) => {
    console.log(props)
    return (
        <div className='restocards'>
            <div className='resto-image-holder'>
                <img className='restro-img' alt='restro-img' src='https://media.istockphoto.com/id/179085494/photo/indian-biryani.jpg?s=612x612&w=0&k=20&c=VJAUfiuavFYB7PXwisvUhLqWFJ20-9m087-czUJp9Fs='></img>
            </div>
            <div className='resto-details'>
                <h4>{props.name}</h4>
                <h5>Chinese, Asian, Italian</h5>
                <h4>4.3</h4>
                <h4>40 minutes</h4>
            </div>
        </div>
    )
}

const RestroContainer = () => {
    return (
        <div className='restro-container'>
            <RestaurantCards name="Meghana Foods" />
            <RestaurantCards name="Gopal Krishna" />
            <RestaurantCards name="Sai Shraddha" />
            <RestaurantCards name="Rama Krishna" />
            <RestaurantCards name="Biriyani Corner" />
            <RestaurantCards name="Meghana Foods" />
            <RestaurantCards name="Meghana Foods" />
            <RestaurantCards name="Meghana Foods" />
            <RestaurantCards name="Meghana Foods" />
        </div>
    )
}

const Body = () => {
    return (
        <div className='app-body'>
            <Search />
            <RestroContainer />
        </div>
    )
}

const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

export default App;