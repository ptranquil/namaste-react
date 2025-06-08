import { useEffect, useState } from "react";
import { RESTAURANT_DETAILS_URL } from "./constant";

const userRestaurantMenu = (resId) => {
    const [resDetails, setresDetails] = useState(null);

    useEffect(() => {
        fetchResDetails()
    },[])

    const fetchResDetails = async () => {
        const data = await fetch(RESTAURANT_DETAILS_URL+resId);
        const json = await data.json();
        // console.log(json?.data?.cards)
        setresDetails(json?.data)
        // const cardItems = json?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
        // const vegItems = cardItems.itemCards || cardItems?.categories[0]?.itemCards;
        // setresDetails(vegItems)
    }

    return resDetails;
}

export default userRestaurantMenu;