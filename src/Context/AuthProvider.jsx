import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const register = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    };

    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const githubLogin = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const login = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    };

    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsLoading(false);
                return;
            } else {
                return setUser(null);
            }
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const AuthInfo = {
        register,
        googleLogin,
        githubLogin,
        login,
        logout,
        user,
        isLoading,
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
