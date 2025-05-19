import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import { RESTAURANT_DETAILS_URL } from "../utils/constant";

const RestaurantDetails = () => {

    const [resDetails, setresDetails] = useState("");

    const {resId} = useParams();

    const fetchResDetails = async () => {
        const data = await fetch(RESTAURANT_DETAILS_URL+resId);
        const json = await data.json();
        // console.log(json?.data?.cards)
        setresDetails(json?.data)
        // const cardItems = json?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
        // const vegItems = cardItems.itemCards || cardItems?.categories[0]?.itemCards;
        // setresDetails(vegItems)
    }
    useEffect(() => {
        fetchResDetails()
    },[])

    if(resDetails.length === 0){
        return <ShimmerRestaurantCard />
    }

    // const restrodetails = resDetails.cards.cards[0];
    console.log(resDetails?.cards[2]?.card?.card?.info)
    const {name, cuisines} = resDetails?.cards[2]?.card?.card?.info;
    const cardItems = resDetails.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    const vegItems = cardItems.itemCards || cardItems?.categories[0]?.itemCards;

    return (
        <div className="app-body">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h2>Menu</h2>
            <ul>
            {vegItems.map((res) => (
                <li key={res?.card?.info?.id}>{res?.card?.info?.name} - <span>Rs. {res?.card?.info?.price}</span></li> )
            )}
            </ul>
        </div>
    )
}

export default RestaurantDetails;