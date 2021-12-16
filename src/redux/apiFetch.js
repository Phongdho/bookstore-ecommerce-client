import { loginFailure, loginStart, loginSuccess, registerSuccess } from "./userRedux"
import { deleteOrderRequest, deleteOrderSuccess, deleteOrderFailure, getOrderRequest, getOrderSuccess, getOrderFailure } from "./orderRedux";
import {publicRequest, userRequest} from "../apiService";

export const register = async (dispatch, user) => {
    // dispatch(registerStart());
    try {
        const res = await publicRequest.post("/auth/register", user);
        // console.log("res nè", res);
        dispatch(registerSuccess(res.data));
    } catch (err) {
        console.log("Register error", err);
    }
}
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure())
    }
};

export const getOrder = async (currentUser, dispatch) => {
    dispatch(getOrderRequest());
    try {
        const res = await userRequest.get(`/orders/find/${currentUser._id}`);
        dispatch(getOrderSuccess(res.data));
    } catch (err) {
        dispatch(getOrderFailure())
    }
};

export const deleteOrder = async ( id, dispatch) => {
    dispatch(deleteOrderRequest());
    try {
        const res = await userRequest.delete(`/orders/${id}`);
        dispatch(deleteOrderSuccess());
    } catch (err) {
        dispatch(deleteOrderFailure())
    }
};





