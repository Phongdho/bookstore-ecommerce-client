import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import cartReducer from "./cartRedux";

export const store = configureStore ({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    },
});