import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import restaurantReducer from "./slices/restaurantSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        restaurant: restaurantReducer
    }
})

export default appStore;