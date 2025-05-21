import { IMAGE_URL } from "../utils/constant";

const RestaurantCards = (props) => {
    const cardDetails = props?.resData?.info;
    return (
        <div className='restocards'>
            <div className='resto-image-holder'>
                <img className='restro-img' alt='restro-img' src={IMAGE_URL+cardDetails?.cloudinaryImageId}></img>
            </div>
            <div className='resto-details'>
                <h4>{cardDetails?.name}</h4>
                <h5>{cardDetails?.cuisines.join(',')}</h5>
                <h4>{cardDetails?.avgRating}</h4>
                <h4>{cardDetails?.sla?.deliveryTime} Minutes</h4>
            </div>
        </div>
    )
}

export default RestaurantCards;