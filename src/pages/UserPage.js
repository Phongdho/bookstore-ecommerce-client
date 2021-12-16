import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteOutline } from "@material-ui/icons";
import { userRequest } from "../apiService";
import AnnouncementBar from '../components/AnnouncementBar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { DataGrid } from "@material-ui/data-grid";
import { deleteOrder, getOrder } from "../redux/apiFetch";

const Container = styled.div`
`;
const Title = styled.h1`
    margin: 20px;
    text-align: center;
    font-weight: 300;
    font-size: 40px;
`;


const UserPage = () => {

    const currentUser = useSelector((state) => state.user.currentUser);
    // console.log(currentUser._id);
    // const order = useSelector(state => state.order.orders);
    const [order, setOrder] = useState([]);
    const dispatch = useDispatch();

    // useEffect(() => {
    //   getOrder(currentUser, dispatch)
    // }, [dispatch]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get(`/orders/find/${currentUser._id}`);
                setOrder(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getOrders();
    }, [currentUser]);
    console.log("all", order);

    const handleDelete = (id) => {
        deleteOrder(id, dispatch)
    };

    const columns = [
        { field: "_id", headerName: "Order ID", width: 250 },
        {
          field: "amount",
          headerName: "Order Amount $",
          width: 250,
        },
        {
          field: "status",
          headerName: "Order Status",
          width: 250,
        },
        {
            field: `createdAt`,
            headerName: "Created At",
            valueGetter: ({value}) => value && new Date(value),
            width: 500,
          },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <DeleteOutline
                  style={{cursor: "pointer"}}
                  className="productListDelete"
                  onClick={() => handleDelete(params.row._id)}
                />
              </>
            );
          },
        },
      ];

    return (
        <Container>
            {/* <AnnouncementBar/> */}
            <Navbar/>
            <Title>{currentUser?.username}'s Order</Title>
            <div style={{height: "50vh"}}>
            <DataGrid
                rows={order}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={5}
                checkboxSelection
            />
            </div>
            <Footer />
        </Container>
    );
};

export default UserPage
