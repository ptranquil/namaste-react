import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState:{
        restaurantData: [],
        restaurantItem:{}
    },
    reducers:{
        addResturantData: (state, action) => {
            state.restaurantData.push(...action.payload)
        },
        addRestaurantMenu: (state, action) => {
            console.log('action is :',action)
            const { key, value } = action.payload;
            state.restaurantItem[key] = value;
        }
    }
})

export const {addResturantData, addRestaurantMenu} = restaurantSlice.actions;
export default restaurantSlice.reducer;