import { useParams } from "react-router-dom";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import userRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resDetails = userRestaurantMenu(resId);

    if(resDetails == null){
        return <ShimmerRestaurantCard />
    }

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

export default RestaurantMenu;