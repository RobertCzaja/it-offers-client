import {Credentials} from "./AuthorizationTypes";
import {MockedHttp} from "../../Mocks/MockedHttpConnection";

export const FetchToken = (credentials: Credentials) => {
    MockedHttp.authorization();
    console.log('fetch token');
}