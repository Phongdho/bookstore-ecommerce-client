import {createSlice} from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL ORDERS 
        getOrderRequest: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getOrderSuccess: (state, action) => {
            state.isFetching = false;
            state.orders = action.payload;
        },
        getOrderFailure: (state, action) => {
            state.isFetching = false;
            state.orders = action.payload;
        },
        //DELETE ORDER
        deleteOrderRequest: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteOrderSuccess: (state, action) => {
            state.isFetching = false;
        },
        deleteOrderFailure: (state) => {
            state.isFetching = false;
            state.orders = true;
        },
    }
});

export const {
    getOrderRequest,
    getOrderSuccess,
    getOrderFailure,
    deleteOrderRequest,
    deleteOrderSuccess,
    deleteOrderFailure,
} = orderSlice.actions;

export default orderSlice.reducer;