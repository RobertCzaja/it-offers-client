import axios from "axios";
import {AxiosFactory} from "../../Helpers/AxiosFactory";
import {ApiRoutes} from "../../Helpers/ApiRoutes";
import {OfferListItemResponse} from "./OfferListModel";
import {OffersListFilters} from "../OfferListFilters/OfferListFiltersModel";

export const FetchOffersList = async (filters: OffersListFilters): Promise<OfferListItemResponse> => {
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