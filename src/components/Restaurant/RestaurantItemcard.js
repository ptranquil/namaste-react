import { IMAGE_URL } from "../../utils/constant";

const RestaurantItemcard = ({ data }) => {
    return (
        <div className="flex justify-between items-start gap-4 border-b-1 border-gray-300 pb-4">
            <div className="flex-1 space-y-1">
                <h3 className="font-semibold text-lg text-gray-800">{data.name}</h3>
                <p className="text-gray-700 font-medium">₹ {data.price / 100 || data.defaultPrice / 100}</p>
                <p className="text-sm text-gray-500 line-clamp-2">{data.description}</p>
            </div>
            {data.imageId && (
                <div className="relative w-28 h-28 rounded-lg overflow-hidden">
                    <img
                        src={IMAGE_URL + data.imageId}
                        alt={data.name}
                        className="w-full h-full object-cover"
                    />
                    <button className="absolute bottom-2 right-2 bg-gray-300 text-black font-bold text-sm px-3 py-1 rounded shadow">
                        Add +
                    </button>
                </div>
            )}
        </div>
    );
};

export default RestaurantItemcard;