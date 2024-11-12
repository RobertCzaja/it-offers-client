import {OfferCategory, OfferListItemResponse, OfferListModel, OfferListResponse, OfferSalary} from "./OfferListModel";

// todo use type intersection?
export const OfferListMapper = (response: OfferListResponse): OfferListModel[] => {
    const offerDataGridItem: OfferListModel[] = [];

    response.list.forEach((offerItem: OfferListItemResponse) => {

        let salary: OfferSalary|undefined;

        if (offerItem.salaries.length) {
            salary = offerItem.salaries.find((salary: OfferSalary) => salary.currency === 'PLN');
        }

        offerDataGridItem.push(
            {
                id: offerItem.id,
                technology: offerItem.technology,
                title: offerItem.title,
                salaryFrom: salary?.from,
                salaryTo: salary?.to,
                salaryCurrency: salary?.currency,
                requiredSkills: offerItem.categories
                    .map((category: OfferCategory) => category.name)
                    .sort((name1: string, name2: string) => name1.localeCompare(name2)),
                publishedAt: new Date(offerItem.publishedAt),
                seniority: offerItem.seniority,
                companyName: offerItem.companyName,
                companyCity: offerItem.companyCity,
            }
        );
    });

    return offerDataGridItem;
}