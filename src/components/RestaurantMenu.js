import { useParams } from "react-router-dom";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import userRestaurantMenu from "../utils/useRestaurantMenu";
import { IMAGE_URL } from "../utils/constant.js";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resDetails = userRestaurantMenu(resId);

    const ShimmerWrapper = ({card=10}) => {
        return (
            <div className="flex flex-wrap justify-center">
                {[...Array(card)].map((_, index) => (
                    <ShimmerRestaurantCard key={index} />
                ))}
            </div>
        );
    };

    if (resDetails == null) {
        return <ShimmerWrapper card={10}  />
    }

    console.log(resDetails?.cards[2]?.card?.card?.info)
    const { name, cuisines } = resDetails?.cards[2]?.card?.card?.info;
    const cardItems = resDetails.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    const vegItems = cardItems.itemCards || cardItems?.categories[0]?.itemCards;

    return (
        <div className="p-5 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-1">{name}</h1>
            <h3 className="text-md text-gray-500 mb-4">{cuisines.join(", ")}</h3>

            <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">Recommended</h2>

            <div className="space-y-6">
                {vegItems.map((item) => (
                    <RestaurantItemcard key={item.card.info.id} data={item.card.info} />
                ))}
            </div>
        </div>

    )
}

const RestaurantItemcard = ({ data }) => {
    return (
        <div className="flex justify-between items-start gap-4 border-b pb-4">
            <div className="flex-1 space-y-1">
                <h3 className="font-semibold text-lg text-gray-800">{data.name}</h3>
                <p className="text-gray-700 font-medium">₹ {data.price / 100 || data.defaultPrice / 100}</p>
                <p className="text-sm text-gray-500">{data.description}</p>
            </div>
            {data.imageId && (
                <div className="w-28 h-28 rounded-lg overflow-hidden border">
                    <img
                        src={IMAGE_URL + data.imageId}
                        alt={data.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
        </div>
    );
};

export default RestaurantMenu;