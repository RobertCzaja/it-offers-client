import axios from "axios";
import {AxiosFactory} from "../../Common/AxiosFactory";
import {ApiRoutes} from "../../Common/ApiRoutes";
import {OfferListResponse} from "./OfferListModel";
import {OffersListFilters} from "../OfferListFilters/OfferListFiltersModel";
import {useNavigate} from "react-router-dom";
import {InternalRoutes} from "../Navigation/InternalRoutes";
import {LoginPage} from "../Authorization/LoginPage";
import React from "react";

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