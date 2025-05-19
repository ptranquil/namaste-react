import { useEffect, useState } from "react"
import { RestaurantRawData, SWIGGY_URL } from "../utils/constant"
import RestaurantCards from "./RestaurantCards";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import { Link } from "react-router-dom";

const Body = () => {
    // const [restaurantData, setrestaurantData] = useState(RestaurantRawData);
    // const [searchContent, setsearchContent] = useState(RestaurantRawData)
    const [restaurantData, setrestaurantData] = useState([]);
    const [searchContent, setsearchContent] = useState([])
    const [filterSearch, setfilterSearch] = useState("")

    const fetchDetails = async () => {
        const data = await fetch(SWIGGY_URL);
        const json = await data.json();
        const filteredData = json?.data?.cards?.filter(cards => cards.card.card["@type"] = 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant')
        delete filteredData[0];
        delete filteredData[1];
        delete filteredData[2];
        console.log(filteredData)
        setrestaurantData(filteredData)
        setsearchContent(filteredData)
    }

    useEffect(() => {
        fetchDetails();
    }, []);

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
                            const data = searchContent.filter(temp => temp?.card?.card?.info?.name.includes(filterSearch))
                            setsearchContent(data)
                        }}>Search</button>
                        <button onClick={() => {
                            setsearchContent(restaurantData)
                            setfilterSearch("")
                        }}>Clear</button>
                    </div>
                    <div className="filter">
                        <button className="filter-btn" onClick={() => {
                            const filterData = restaurantData.filter(res => res?.card?.card?.info?.avgRating > 4);
                            setrestaurantData(filterData)
                        }}>Top Rated Restaurant</button>
                    </div>
                </div>
                <div className='restro-container'>
                    {
                        searchContent.map(resData => (
                            <Link style={{ textDecoration: 'none' }} key={resData?.card?.card?.info?.id} to={"/restaurant/" + resData?.card?.card?.info?.id}><RestaurantCards key={resData?.card?.card?.info?.id} resData={resData} /></Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Body;