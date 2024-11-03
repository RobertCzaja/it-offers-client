import {RouteInterface} from "../ApiRoutes";
import {getToken} from "../Components/Authorization/TokenRepository";

type HttpHeaders = {
    'content-type': string;
    'Authorization' ?: string;
}

export const AxiosFactory = (
    route: RouteInterface,
    requestBody: object = {},
    setAuthToken: boolean = true
) => {
    const headers: HttpHeaders = {
        'content-type': 'application/json',
    };

    if (setAuthToken) {
        const token: string|null = getToken();
        if (!token) {
            throw new Error('Auth token not provided');
        }
        headers['Authorization'] = 'Bearer '+token;
    }

    return {
        ...route,
        ...{
            headers: headers,
            data: requestBody
        },
    }
}