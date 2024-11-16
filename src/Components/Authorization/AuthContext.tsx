import {createContext, useContext, useState} from "react";
import {getEmail, getToken, remove, save} from "./AuthorizationRepository";

type LoggedUserType = {
    email: string;
    authToken: string;
}

interface ProviderProps {
    user: LoggedUserType|null;
    login (user: LoggedUserType): void,
    logout(): void;
}

const AuthContext = createContext<ProviderProps>({
    user: null,
    login: () => {},
    logout: () => {}
});

const AuthProvider = ({children}: {children: React.ReactNode}) => {

    const token: string|null = getToken();
    const email: string|null = getEmail();

    const [user, setUser] = useState<LoggedUserType|null>(token && email ? {authToken: token, email: email} : null);

    const login = (user: LoggedUserType) => {
        save(user.authToken, user.email);
        setUser({
            email: user.email,
            authToken: user.authToken,
        });
    }

    const logout = () => {
        remove();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext)
}