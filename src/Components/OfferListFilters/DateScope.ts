import {PublishedAtScope} from "./OfferListFiltersModel";
import dayjs, {Dayjs} from "dayjs";

export type DateScopeType = {
    from: Dayjs|null,
    to: Dayjs|null,
}

export const DateScope = (type: PublishedAtScope|null): DateScopeType => {
    var from: Dayjs|null = null;
    var to: Dayjs|null = null;

    switch (type) {
        case (null):
            from = null;
            to = null;
            break;
        case (PublishedAtScope.THIS_MONTH):
            from = dayjs().startOf('month');
            to = dayjs();
            break;
        case (PublishedAtScope.LAST_MONTH):
            from = dayjs().subtract(1, 'month').startOf('month');
            to = dayjs().subtract(1, 'month').endOf('month');
            break;
        case (PublishedAtScope.PENULTIMATE_MONTH):
            from = dayjs().subtract(2, 'month').startOf('month');
            to = dayjs().subtract(2, 'month').endOf('month');
            break;
        default:
            throw new Error('Unknown publishedAt scope: ' + type);
    }

    return {
        from: from,
        to: to,
    };
}