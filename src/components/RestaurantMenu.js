import { useParams } from "react-router-dom";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";
import userRestaurantMenu from "../utils/useRestaurantMenu";
import { IMAGE_URL } from "../utils/constant.js";
import { useState } from "react";

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

const RestaurantCategory = ({data, showAccordion, setCurrentAccordion}) => {
    // const [showAccordion, setshowAccordion] = useState(false)
    return (
        <div className="p-4 max-w-4xl mx-auto bg-grey-50 border-b-18 border-gray-100 text-left">
            <div className="flex justify-between text-shadow-black mb-4">
                <div className="">
                    <h2 className="text-2xl font-bold">{data?.title} ({data?.itemCards?.length})</h2>
                </div>
                <div>
                    {/* <span onClick={() => setshowAccordion(!showAccordion)} className="cursor-pointer">🔽</span> */}
                    <span onClick={() => setCurrentAccordion()} className="cursor-pointer">🔽</span>
                </div>
            </div>
            {
                showAccordion && <div className="space-y-6">
                    {data?.itemCards.map((item) => (
                        <RestaurantItemcard key={item.card.info.id} data={item.card.info} />
                    ))}
                </div>
            }
        </div>
    )
}

const RestaurantItemcard = ({ data }) => {
    return (
        <div className="flex justify-between items-start gap-4 border-b-1 border-gray-300 pb-4">
            <div className="flex-1 space-y-1">
                <h3 className="font-semibold text-lg text-gray-800">{data.name}</h3>
                <p className="text-gray-700 font-medium">₹ {data.price / 100 || data.defaultPrice / 100}</p>
                <p className="text-sm text-gray-500 line-clamp-2">{data.description}</p>
            </div>
            {data.imageId && (
                <div className="w-28 h-28 rounded-lg overflow-hidden">
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