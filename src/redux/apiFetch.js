import { loginFailure, loginStart, loginSuccess, registerSuccess } from "./userRedux"
import { addProduct } from "./cartRedux"; 
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





