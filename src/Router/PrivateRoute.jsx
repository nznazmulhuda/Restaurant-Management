import { Loader } from "rsuite";
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
        return (
            <div className="flex items-center justify-center mt-5 md:mt-10">
                <Loader size="lg" content="Loading" className="font-bold" />
            </div>
        );
    }

    return <Navigate to={"/login"} state={pathname} />;
}

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;
