import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

function IsLoged({ children }) {
    const { user } = useAuth();

    if (user) {
        return <Navigate to={"/"} />;
    }

    return children;
}

IsLoged.propTypes = {
    children: PropTypes.node,
};

export default IsLoged;
