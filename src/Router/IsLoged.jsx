import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

function IsLoged({ children }) {
    const { user } = useAuth();

    if (user) {
        return <Navigate to={"/"} />;
    }

    return children;
}

export default IsLoged;
