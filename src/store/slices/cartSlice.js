import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers:{
        addItem : (state, action) => {
            state.cart.push(action.payload)
        },
        removeItem: (state)=>{
            state.cart.pop()
        },
        clearCart: (state)=>{
            state.cart.length = 0;
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;