import axios from "axios";
import {AxiosFactory} from "../../Common/AxiosFactory";
import {ApiRoutes} from "../../Common/ApiRoutes";
import {OfferListResponse} from "./OfferListModel";
import {OffersListFilters} from "../OfferListFilters/OfferListFiltersModel";

export const FetchOffersList = async (filters: OffersListFilters): Promise<OfferListResponse> => {
    return await axios(
        {
            ...AxiosFactory(ApiRoutes.OFFERS({
                technologies: filters.technologies.length ? filters.technologies.toString() : undefined,
                dateFrom: filters.from?.format('YYYY-MM-DD'),
                dateTo: filters.to?.format('YYYY-MM-DD'),
            })),
        }
    ).then(response => {
        return response.data;
    });
}