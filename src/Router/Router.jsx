import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NotPage from "../components/NotPage/NotPage";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";

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
                path: '/our-menu',
                element: <Menu></Menu>
            }
        ]
    },
    {
        path: '*',
        element: <NotPage></NotPage>
    },
]);