import {Credentials, Token} from "./AuthorizationTypes";
import {MockedHttp} from "../../Mocks/MockedHttpConnection";
import axios from "axios";
import {ApiRoutes} from "../../ApiRoutes";
import {AxiosFactory} from "../../Helpers/AxiosFactory";

export const FetchToken = async (credentials: Credentials): Promise<Token> => {
    MockedHttp.authorization();

    return await axios(AxiosFactory(ApiRoutes.AUTH, credentials)).then(response => {
        return response.data;
    });
}