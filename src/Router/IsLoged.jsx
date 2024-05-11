import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

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
