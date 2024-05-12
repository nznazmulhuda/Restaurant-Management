import PropTypes from "prop-types";
import { auth } from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import {
    signOut,
    signInWithPopup,
    onAuthStateChanged,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // register an account using email and pass
    const register = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    };

    // login with google account
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    // login with github account
    const githubLogin = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    };

    // login with email and pass
    const login = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    };

    // logout
    const logout = () => {
        return signOut(auth);
    };

    // unSubscribe
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsLoading(false);
                return;
            } else {
                setIsLoading(false);
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
