import axios from "axios";

const BASE_URL = "https://domdom-bookstore.herokuapp.com/api";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const cart = JSON.parse(localStorage.getItem("persist:root2"))?.cart;
const currentUser = user && JSON.parse(user).currentUser;
// const currentCart = cart && JSON.parse(cart).currentCart;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
});