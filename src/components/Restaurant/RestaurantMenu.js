import { useParams } from "react-router-dom";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard.js";
import userRestaurantMenu from "../../utils/useRestaurantMenu.js";
import { IMAGE_URL } from "../../utils/constant.js";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resDetails = userRestaurantMenu(resId);
    const [activeIndex, setactiveIndex] = useState(0);

    const ShimmerWrapper = ({ card = 10 }) => {
        return (
            <div className="flex flex-wrap justify-center">
                {[...Array(card)].map((_, index) => (
                    <ShimmerRestaurantCard key={index} />
                ))}
            </div>
        );
    };

    if (resDetails == null) {
        return <ShimmerWrapper card={10} />
    }

    const { name, cuisines } = resDetails?.cards[2]?.card?.card?.info;
    const ItemCategory = resDetails.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(card => {
        return card.card.card['@type'] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    })
    console.log('ItemCategory:::', ItemCategory)

    return (
        <div className="p-5 max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-1">{name}</h1>
            <h3 className="text-md text-gray-500 mb-4">{cuisines.join(", ")}</h3>
            {
                ItemCategory.map((category, index) => (
                    // controlled compoenent as the accordion show and hide is getting controller from here (Parent)
                    <RestaurantCategory 
                        key={index} 
                        data={category?.card?.card}
                        showAccordion={index === activeIndex ? true: false}
                        setCurrentAccordion={() => setactiveIndex(index)}
                    />
                ))
            }
        </div>
    )
}

export default RestaurantMenu;