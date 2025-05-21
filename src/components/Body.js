import { useEffect, useState } from "react"
import { RestaurantRawData, SWIGGY_URL } from "../utils/constant"
import RestaurantCards from "./RestaurantCards";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // const [restaurantData, setrestaurantData] = useState(RestaurantRawData);
    // const [searchContent, setsearchContent] = useState(RestaurantRawData)
    const [restaurantData, setrestaurantData] = useState([]);
    const [searchContent, setsearchContent] = useState([])
    const [filterSearch, setfilterSearch] = useState("")

    const fetchDetails = async () => {
        const data = await fetch(SWIGGY_URL);
        const json = await data.json();
        // const filteredData = json?.data?.cards?.filter(cards => cards.card.card["@type"] = 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant')
        const filteredData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setrestaurantData(filteredData)
        setsearchContent(filteredData)
    }

    useEffect(() => {
        fetchDetails();
    }, []);

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus){
        return <h1>Looks like your Internet Connection is not stable! Please check it</h1>
    }

    if (!restaurantData.length) {
        return (
            <div className="shimmer-container">
                <ShimmerRestaurantCard />
                <ShimmerRestaurantCard />
                <ShimmerRestaurantCard />
                <ShimmerRestaurantCard />
                <ShimmerRestaurantCard />
                <ShimmerRestaurantCard />
                <ShimmerRestaurantCard />
                <ShimmerRestaurantCard />
            </div>
        )
    } else {
        return (
            <div className='app-body'>
                <div className='search-container'>
                    <div className="search-bar">
                        <input type="text" value={filterSearch} onChange={(e) => {
                            setfilterSearch(e.target.value)
                        }}></input>
                        <button onClick={() => {
                            const data = searchContent.filter(temp => temp?.info?.name.includes(filterSearch))
                            setsearchContent(data)
                        }}>Search</button>
                        <button onClick={() => {
                            setsearchContent(restaurantData)
                            setfilterSearch("")
                        }}>Clear</button>
                    </div>
                    <div className="filter">
                        <button className="filter-btn" onClick={() => {
                            const filterData = restaurantData.filter(res => res?.info?.avgRating > 4.5);
                            setsearchContent(filterData)
                        }}>Top Rated Restaurant</button>
                    </div>
                </div>
                <div className='restro-container'>
                    {
                        searchContent.map(resData => (
                            <Link style={{ textDecoration: 'none' }} key={resData?.info?.id} to={"/restaurant/" + resData?.info?.id}><RestaurantCards key={resData?.info?.id} resData={resData} /></Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Body;