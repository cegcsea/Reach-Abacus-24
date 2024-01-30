import React, { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

import {
    abacusLogin,
    getAbacusUser,
    getAbacusRegiserLink,
    abacusRegister,
    getAbacusForgotPasswordLink,
    resetForgottenPassword
} from '../api/auth';

import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const DEFAULT_REDIRECT_PATH = "/";

    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState({});

    const handleAbacusLogin = (data) => {
        toast.promise(
            abacusLogin(data),
            {
                loading: "Authorizing...",
                success: (data) => {
                    setAuth(true);
                    refreshAuth();
                    navigate(DEFAULT_REDIRECT_PATH);
                    return data.message;
                },

                error: (err) => {
                    return typeof err == "object" ? err.message : err;
                },
            }
        );
    }

    const handleAbacusRegisterLink = (data) => {
        toast.promise(
            getAbacusRegiserLink(data),
            {
                loading: "Checking records...",
                success: (data) => {
                    return data.message;
                },

                error: (err) => {
                    return typeof err == "object" ? err.message : err;
                },
            }
        );
    }

    const handleAbacusRegister = (data) => {
        toast.promise(
            abacusRegister(data),
            {
                loading: "Registering...",
                success: (data) => {
                    setAuth(true);
                    navigate(DEFAULT_REDIRECT_PATH);
                    return data.message;
                },

                error: (err) => {
                    return typeof err == "object" ? err.message : err;
                },
            }
        );
    }

    const handleForgotPasswordLink = (data) => {
        toast.promise(
            getAbacusForgotPasswordLink(data),
            {
                loading: "Checking records...",
                success: (data) => {
                    return data.message;
                },

                error: (err) => {
                    return typeof err == "object" ? err.message : err;
                },
            }
        );
    }

    const handleResetForgottenPassword = (data) => {
        toast.promise(
            resetForgottenPassword(data),
            {
                loading: "Resetting Password...",
                success: (data) => {
                    navigate('/login');
                    return data.message;
                },

                error: (err) => {
                    return typeof err == "object" ? err.message : err;
                },
            }
        );
    }

    const refreshAuth = () => {
        const token = Cookies.get("token");
        if (token) {
            getAbacusUser()
                .then((data) => {
                    setAuth(true);
                    setUser(data.user);
                })
                .catch((error) => {
                });
        } else {
            setAuth(false);
            setUser({});
        }
    };

    const handleLogout = () => {
        Cookies.remove("token");
        setAuth(false);
        setUser({});
    };

    useEffect(() => {
        refreshAuth();
    }, [auth]);

    return (
        <AuthContext.Provider
            value={{
                auth, setAuth,
                user, setUser,
                handleAbacusLogin,
                handleLogout,
                handleAbacusRegisterLink,
                handleAbacusRegister,
                handleForgotPasswordLink,
                handleResetForgottenPassword,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}