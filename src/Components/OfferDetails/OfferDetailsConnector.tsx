export interface OfferDetailsDto {
    title: string,
    url: string,
}

export const OfferDetailsConnector = (offerId: string): OfferDetailsDto => {
    return {
        title: "One Identity Consultant z j. angielskim",
        url: "https://justjoin.it/job-offer/dmtech-polska-c-backend-developer-z-j-angielskim-iam--bydgoszcz-net",
    };
}