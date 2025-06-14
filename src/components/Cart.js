import { useDispatch, useSelector } from "react-redux";
import RestaurantItemcard from "./Restaurant/RestaurantItemcard";
import { clearCart } from "../store/slices/CartSlice";

const Cart = () => {

    const items = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <>
            <div className="p-5 font-bold max-w-4xl mx-auto">
                <div>Total Items : ({items.length})</div>
                <div>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-1 rounded-lg" onClick={handleClearCart}>Clear</button>
                </div>
            </div>
            <div className="p-5 max-w-4xl mx-auto text-center">
                {items && items.length > 0 
                    ? items.map((item, index) => (
                        <>
                            <div  key={index}>
                                <button className="w-2 p-1 font-bold font-stretch-75% font-red">-</button>
                            </div>
                            <RestaurantItemcard key={item.id} data={item} />
                        </>
                )) 
                    : <h1 className="font-bold">Please add items to the cart</h1>}
            </div>
        </>
    )
}

export default Cart;