import * as React from 'react';
import {createContext} from "react";

type AuthTokenContextProviderProps = {
    children: React.ReactNode;
}

export const AuthorizationContext = createContext({});

export const AuthorizationContextProvider = ({children}: AuthTokenContextProviderProps) => {

    return <AuthorizationContext.Provider value={{}}>{children}</AuthorizationContext.Provider>
}
