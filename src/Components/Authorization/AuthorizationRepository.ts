const KEY_TOKEN = "authToken";
const KEY_EMAIL = "email";

export const save = (token: string, email: string) => {
    localStorage.setItem(KEY_TOKEN, token);
    localStorage.setItem(KEY_EMAIL, email);
}

export const getToken = (): string|null => {
    return localStorage.getItem(KEY_TOKEN);
}

export const getEmail = (): string|null => {
    return localStorage.getItem(KEY_EMAIL);
}

export const remove = (): void => {
    localStorage.removeItem(KEY_TOKEN);
    localStorage.removeItem(KEY_EMAIL);
}

