import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { userRequest } from "../apiService";
import {resetCart} from "../redux/cartRedux";

const Status = () => {
    const location = useLocation();
    const data = location.state.stripeData;
    const cart = location.state.products;

    const currentUser = useSelector((state) => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);


    // const token = currentUser.accessToken;
    const dispatch = useDispatch();

    useEffect(() => {
        const createOrder = async () => {
          try {
            const res = await userRequest.post("/orders", {
              // token,
              userId: currentUser._id,
              products: cart.products.map((item) => ({
                productId: item._id,
                quantity: item._quantity,
              })),
              amount: cart.total,
              address: data.billing_details.address,
            });
            console.log("res", res);
            setOrderId(res.data._id);
          } catch {}
        };
        data && createOrder();
        dispatch(resetCart());
      }, [cart, data, currentUser]);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
            >
        {orderId
            ? `Order has been created successfully. Your order number is ${orderId}`
            : `Successful. Your order is being prepared...`}
        <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
        </div>
    );
};

export default Status
