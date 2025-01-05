import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useAuth()
    if (loading) {
        return <span className="loading-spinner"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{location}} replace={true}></Navigate>
};

export default PrivetRoute;