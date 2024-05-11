import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
    const { user, isLoading } = useAuth();
    const { pathname } = useLocation();

    if (user) {
        return children;
    }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return <Navigate to={"/login"} state={pathname} />;
}

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;
