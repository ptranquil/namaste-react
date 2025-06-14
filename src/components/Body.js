import { useContext, useEffect, useState } from "react"
import { RestaurantRawData, SWIGGY_URL } from "../utils/constant"
import { RestaurantCards, RestaurantWithPromoted } from "./Restaurant/RestaurantCards";
import ShimmerRestaurantCard from "./Restaurant/ShimmerRestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useDispatch, useSelector } from "react-redux";
import { addResturantData } from "../store/slices/restaurantSlice";

const Body = () => {
    // const [restaurantData, setrestaurantData] = useState(RestaurantRawData);
    // const [searchContent, setsearchContent] = useState(RestaurantRawData)
    const [restaurantData, setrestaurantData] = useState([]);
    const [searchContent, setsearchContent] = useState([])
    const [filterSearch, setfilterSearch] = useState("")

    const restaurants = useSelector((store) => store.restaurant.restaurantData);
    const dispatch  = useDispatch();
    
    const fetchDetails = async () => {

        let fetchedData = null;

        if(restaurants && restaurants?.length == 0){
            const data = await fetch(SWIGGY_URL);
            const json = await data.json();
            // const filteredData = json?.data?.cards?.filter(cards => cards.card.card["@type"] = 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant')
            fetchedData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            /** Store it in store */
            dispatch (addResturantData(fetchedData));
            // dispatch(setrestaurantData(fetchedData));
        } else {
            fetchedData = restaurants
        }
        setrestaurantData(fetchedData)
        setsearchContent(fetchedData)
    }

    const RestaurantDataPromoted = RestaurantWithPromoted(RestaurantCards);
    const {loggedInUser,setUserName} = useContext(UserContext)

    useEffect(() => {
        fetchDetails();
    }, []);

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
        return <h1>Looks like your Internet Connection is not stable! Please check it</h1>
    }

    const ShimmerWrapper = () => {
        return (
            <div className="flex flex-wrap justify-center">
                {[...Array(10)].map((_, index) => (
                    <ShimmerRestaurantCard key={index} />
                ))}
            </div>
        );
    };

    if (!restaurantData.length) {
        return (
            <ShimmerWrapper />
        )
    } else {
        return (
            <div>
                <div className="p-5 my-5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                        <input
                            className="border border-black rounded-lg p-2 w-64"
                            type="text"
                            value={filterSearch}
                            placeholder="Search..."
                            onChange={(e) => setfilterSearch(e.target.value)}
                        />
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white font-medium px-3 py-1 rounded-lg"
                            onClick={() => {
                                const data = searchContent.filter(temp =>
                                    temp?.info?.name.toLowerCase().includes(filterSearch.toLowerCase())
                                );
                                setsearchContent(data);
                            }}
                        >
                            Search
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-1 rounded-lg"
                            onClick={() => {
                                setsearchContent(restaurantData);
                                setfilterSearch("");
                            }}
                        >
                            Clear
                        </button>
                         <input
                            className="border border-black rounded-lg p-2 w-64"
                            type="text"
                            value={loggedInUser}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Enter Username..."
                            // onChange={(e) => setfilterSearch(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-1 rounded-lg"
                            onClick={() => {
                                const filterData = restaurantData.filter(
                                    res => res?.info?.avgRating > 4.5
                                );
                                setsearchContent(filterData);
                            }}
                        >
                            Top Rated Restaurants
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center">
                    {searchContent.map(resData => (
                        <Link
                            key={resData?.info?.id}
                            to={"/restaurant/" + resData?.info?.id}
                            className="text-inherit no-underline"
                        >
                            {
                                resData?.info?.avgRating >= 4.5 ? <RestaurantDataPromoted resData={resData} /> : <RestaurantCards resData={resData} />
                            }
                        </Link>
                    ))}
                </div>
            </div>

        )
    }
}

export default Body;