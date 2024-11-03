const KEY = "authToken";

export const saveToken = (token : string) => {
    localStorage.setItem(KEY, token);
}

export const getToken = (): string|null => {
    return localStorage.getItem(KEY);
}

export const removeToken = (): void => {
    localStorage.removeItem(KEY);
}

