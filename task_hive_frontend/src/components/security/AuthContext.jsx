import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState(null);

    function login(username, password) {
        if (username === 'csameeerz' && password === '978346') {
            setLoggedIn(true);
            setUsername(username);
            return true;
        } else {
            setLoggedIn(false);
            setUsername(null);
            return false;
        }
    }

    function logout() {
        setLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={ {isLoggedIn, login, logout, username} }>
            { children }
        </AuthContext.Provider>
    );
}