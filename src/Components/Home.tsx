import React from 'react';
import {OfferList} from "./OfferList/OfferList";
import {MockedData} from "../Mocks/MockedData";
import {OfferListFilters} from "./OfferListFilters/OfferListFilters";

export const Home = () => {
    return (
        <>
            <OfferListFilters />
            <OfferList offers={MockedData.offers()}/>
        </>
    )
}