import { useEffect, useState } from "react";
import { RESTAURANT_DETAILS_URL } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurantMenu } from "../store/slices/restaurantSlice";

const userRestaurantMenu = (resId) => {
    const [resDetails, setresDetails] = useState(null);

    const dispatch = useDispatch();
    const restaurantItems = useSelector((store) => store.restaurant.restaurantItem?.[resId]);

    useEffect(() => {
        if(!restaurantItems){
            console.log('restaurantItems is : ',restaurantItems)
            fetchResDetails()
        } else {
            setresDetails(restaurantItems)
        }
    },[])

    const fetchResDetails = async () => {
        const data = await fetch(RESTAURANT_DETAILS_URL+resId);
        const json = await data.json();
        // console.log(json?.data?.cards)
        setresDetails(json?.data)
        dispatch(addRestaurantMenu({
            key: resId,
            value: json?.data
        }))
        // const cardItems = json?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
        // const vegItems = cardItems.itemCards || cardItems?.categories[0]?.itemCards;
        // setresDetails(vegItems)
    }

    return resDetails;
}

export default userRestaurantMenu;