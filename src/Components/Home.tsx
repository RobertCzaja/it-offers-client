import {OfferList} from "./OfferList/OfferList";
import {MockedData} from "../Mocks/MockedData";

export const Home = () => {
    return (
        <>
            <OfferList offers={MockedData.offers()}/>
        </>
    )
}