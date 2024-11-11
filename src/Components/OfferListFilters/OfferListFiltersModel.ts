import {Dayjs} from "dayjs";

export enum PublishedAtScope {
    THIS_MONTH = 'thisMonth',
    LAST_MONTH = 'lastMonth',
    PENULTIMATE_MONTH = 'penultimateMonth',
}

export type OffersListFilters = {
    technologies: string[],
    from: Dayjs|null,
    to: Dayjs|null,
}