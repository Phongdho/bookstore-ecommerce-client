import { loginFailure, loginStart, loginSuccess, registerSuccess } from "./userRedux"
import {publicRequest} from "../apiService";


export const register = async (dispatch, user) => {
    // dispatch(registerStart());
    try {
        // console.log("user nè", user);
        const res = await publicRequest.post("/auth/register", user);
        // console.log("res nè", res);
        dispatch(registerSuccess(res.data));
    } catch (err) {
        console.log("Register error", err);
        // dispatch(registerFailure());
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