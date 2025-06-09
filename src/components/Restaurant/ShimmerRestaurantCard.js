import '../../style/shimmer.css';

const ShimmerRestaurantCard = () => {
  return (
    <div className="w-64 h-64 bg-white shadow-md rounded-2xl overflow-hidden m-4 animate-pulse">
      <div className="h-40 bg-gray-300"></div>
      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="h-3 bg-gray-300 rounded w-1/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/3"></div>
      </div>
    </div>
  );
};

export default ShimmerRestaurantCard