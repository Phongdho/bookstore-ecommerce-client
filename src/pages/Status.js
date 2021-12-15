import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { userRequest } from "../apiService";
import {resetCart} from "../redux/cartRedux";
import { Link } from 'react-router-dom';

const Status = () => {
    const location = useLocation();
    const data = location.state?.stripeData;
    const cart = location.state?.products;

    const currentUser = useSelector((state) => state.user.currentUser);
    const [order, setOrder] = useState(null);

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
            // console.log("res", res);
            setOrder(res.data);
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
        {order?._id
            ? `Order has been created successfully. Your order number is ${order?._id}`
            : `Success! Your order has been received!`}
        <Link to="/" style={{textDecoration:"none"}}>
          <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
        </Link>
        </div>
    );
};

export default Status
