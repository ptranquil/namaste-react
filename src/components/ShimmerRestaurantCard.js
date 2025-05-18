import '../style/shimmer.css';

const ShimmerRestaurantCard = () => {
  return (
    <div className="restocards shimmer-card">
      <div className="shimmer shimmer-img"></div>
      <div className="resto-details">
        <div className="shimmer shimmer-text title"></div>
        <div className="shimmer shimmer-text subtitle"></div>
        <div className="shimmer shimmer-text rating"></div>
        <div className="shimmer shimmer-text time"></div>
      </div>
    </div>
  );
};

export default ShimmerRestaurantCard