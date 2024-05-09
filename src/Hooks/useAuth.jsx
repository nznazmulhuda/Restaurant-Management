import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

function useAuth() {
    const value = useContext(AuthContext);
    return value;
}

export default useAuth;
