import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [pageY, setPageY] = useState(null);
    const AuthInfo = {
        // user: "nahid",
        // user: "",
    };

    return (
        <div onWheel={(e) => setPageY(e.pageY)}>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
