export interface OfferDetailsDto {
    id: string,
    title: string,
    url: string,
}

export const OfferDetailsConnector = (offerId: string): Promise<OfferDetailsDto> => {
    return new Promise((resolve) => {
        resolve({
            id: offerId,
            title: "One Identity Consultant z j. angielskim",
            url: "https://justjoin.it/job-offer/dmtech-polska-c-backend-developer-z-j-angielskim-iam--bydgoszcz-net",
        });
    });
}