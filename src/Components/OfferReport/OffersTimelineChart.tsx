import {OfferListItemResponse} from "../OfferList/OfferListModel";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
    Title,
    Tooltip,
} from "chart.js";
import {Line} from "react-chartjs-2";
import {OffersPerDay} from "./OfferReportModel";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,

);

interface OffersTimelineChart {
    offers: OfferListItemResponse[],
}

export const OffersTimelineChart = ({offers}: OffersTimelineChart) => {

    const amountsPerDay: OffersPerDay = {};

    offers.forEach((offer: OfferListItemResponse) => {
        const date: string = offer.publishedAt.split('T')[0];

        if (amountsPerDay.hasOwnProperty(date) && amountsPerDay[date].hasOwnProperty(offer.technology)) {
            amountsPerDay[date][offer.technology].amount++;
        } else {
            if (!amountsPerDay.hasOwnProperty(date)) {
                amountsPerDay[date] = {};
            }
            amountsPerDay[date][offer.technology] = {amount: 1};
        }
    })

    const data = {
        labels: [
            '2024-11-12',
            '2024-11-13',
            '2024-11-14',
        ],
        datasets: [
            {
                label: "Php",
                data: [4,5,2],
            },
        ]
    };

    return <>
        <Line options={{}} data={data} />
    </>
}