import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NotPage from "../components/NotPage/NotPage";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Dashboard from "../layout/Dashboard";
import MyCarts from "../pages/Dashboard/MyCarts/MyCarts";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import MyBooking from "../pages/Dashboard/MyBooking/MyBooking";
import PrivetRoute from "../Route/PrivetRoute";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'our-menu',
                element: <Menu></Menu>
            },
            {
                path: 'our-shop/:category',
                element: <OurShop></OurShop>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children: [
            {
                path: 'my-carts',
                element: <MyCarts></MyCarts>
            },

            {
                path: "user-home",
                element: <UserHome />
            },
            {
                path: "reservation",
                element: <Reservation />
            },
            {
                path: "payment-history",
                element: <PaymentHistory />
            },
            {
                path: "add-review",
                element: <AddReview />
            },
            {
                path: "my-booking",
                element: <MyBooking />
            },
            // admin 
            {
                path: 'all-users',
                element: <AllUsers></AllUsers>
            }
        ]
    },
    {
        path: '*',
        element: <NotPage></NotPage>
    },
]);