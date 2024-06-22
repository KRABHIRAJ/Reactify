import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lat: "",
    lon: "",
    currentResId:"",
    cartItemResId:"",
    cartItem: []
}

export const calculateCartAmount = (cartItem) => {
    const cal =  cartItem.reduce((acc, item) => {
        const price = item?.price / 100 || item?.defaultPrice / 100;
        return acc += price;
    }, 0)
    return cal;
}
export const swiggySlice = createSlice({
    name:'swiggyApp',
    initialState,
    reducers:{
        setLocation: (state, action) => {
            state.lat = action.payload.lat;
            state.lon = action.payload.lon;
        },
        addItemToCart: (state, action) => {
            const item = action.payload;
            if(state.cartItem.length === 0){
                state.cartItem.push({...item, count:1});
                state.cartItemResId = state.currentResId;
            }else{
                if(state.cartItemResId === state.currentResId){
                    const index = state.cartItem.findIndex((currItem) => currItem.id === item.id);
                    if(index >= 0){
                        state.cartItem[index].count += 1;
                    }else{
                        state.cartItem.push({...item, count:1});
                    }
                }else{
                    state.cartItem.length = 0;
                    state.cartItem.push({...item, count:1});
                    state.cartItemResId = state.currentResId;
                }
            }
        },
        removeItemFromCart: (state, action) =>{
            const id = action.payload;
            const index = state.cartItem.findIndex((item) => item.id === id);
            if(index >= 0){
                if(state.cartItem[index].count === 1){
                    state.cartItem.splice(index,1);
                }else{
                    state.cartItem[index].count -= 1;
                }
            }
        },
        setCurrResId(state, action){
            state.currentResId = action.payload;
        }
    }
})

export const { setLocation, addItemToCart, setCurrResId, removeItemFromCart } = swiggySlice.actions;
export default swiggySlice.reducer;