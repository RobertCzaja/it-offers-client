import {RouteInterface} from "../ApiRoutes";
import {getToken} from "../Components/Authorization/TokenRepository";
//import * as https from "https";

type HttpHeaders = {
    'content-type': string;
    'Authorization' ?: string;
}

export const AxiosFactory = (
    route: RouteInterface,
    requestBody: object = {},
    setAuthToken: boolean = true
) => {
    /* Cannot be used because a problemn
    https.globalAgent.options.rejectUnauthorized = false;
    const agent = new https.Agent({rejectUnauthorized: false});
     */

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
            /*httpsAgent: agent,*/
            headers: headers,
            data: requestBody
        },
    }
}