import axios from "axios";
import {AxiosFactory} from "../../Helpers/AxiosFactory";
import {ApiRoutes} from "../../Helpers/ApiRoutes";

export const FetchOffersList = async (/*todo params to pass*/): Promise<any/*todo add type*/> => {
    return await axios(AxiosFactory(ApiRoutes.OFFERS())).then(response => {
        return response.data;
    });
}