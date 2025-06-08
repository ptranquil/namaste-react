import { IMAGE_URL } from "../utils/constant";

export const RestaurantCards = ({ resData }) => {
    const cardDetails = resData?.info;

    return (
        <div className="w-64 bg-white shadow-md rounded-2xl overflow-hidden m-4 transition-transform hover:scale-105">
            <div className="h-40 overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    alt="restaurant"
                    src={IMAGE_URL + cardDetails?.cloudinaryImageId}
                />
            </div>
            <div className="p-4 space-y-1">
                <h4 className="text-lg font-semibold text-gray-800">{cardDetails?.name}</h4>
                <h5 className="text-sm text-gray-600">{cardDetails?.cuisines.join(', ')}</h5>
                <h4 className="text-sm text-yellow-500 font-semibold">⭐ {cardDetails?.avgRating}</h4>
                <h4 className="text-sm text-gray-500">{cardDetails?.sla?.deliveryTime} min</h4>
            </div>
        </div>
    );
};

export const RestaurantWithPromoted = (RestaurantCards) => {
    return (props) => {
        return(
            <>
                <label className="absolute bg-black text-white p-1 px-2 rounded-lg">Promoted</label>
                <RestaurantCards {...props} />
            </>
        )
    }
}