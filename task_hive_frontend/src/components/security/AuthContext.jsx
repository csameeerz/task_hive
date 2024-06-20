import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [isLoggedIn, setLoggedIn] = useState(false);

    function login(username, password) {
        if (username === 'csameeerz' && password === '978346') {
            setLoggedIn(true);
            return true;
        } else {
            setLoggedIn(false);
            return false;
        }
    }

    function logout() {
        setLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={ {isLoggedIn, login, logout} }>
            { children }
        </AuthContext.Provider>
    );
}