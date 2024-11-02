import {RouteInterface} from "../ApiRoutes";

export const AxiosFactory = (route: RouteInterface, requestBody: object) => {
    return {
        ...route,
        ...{
            headers: {
                'content-type': 'application/json',
            },
            data: requestBody
        },
    }
}