import { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const AuthInfo = {
        user: "nahid",
        // user: "",
    };

    return (
        <>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
