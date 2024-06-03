import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lat: "",
    lon: "",
    carouselResList:[]
}

export const swiggySlice = createSlice({
    name:'swiggyApp',
    initialState,
    reducers:{
        setCarouselResList: (state, action) => {
            console.log('action >>', action);

            state.carouselResList = action.payload;
        },
        setLocation: (state, action) => {
            state.lat = action.payload.lat;
            state.lon = action.payload.lon;
        }
    }
})

export const { setCarouselResList, setLocation} = swiggySlice.actions;
export default swiggySlice.reducer;