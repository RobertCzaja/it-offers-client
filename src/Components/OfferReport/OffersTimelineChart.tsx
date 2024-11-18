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
import {ChartDatasets, OffersPerDay, OffersTimelineChartData} from "./OfferReportModel";

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
    const allTechnologies: string[] = [];
    const offersTimelineData: OffersTimelineChartData = {labels: [], technologies: {}};

    offers.forEach((offer: OfferListItemResponse) => {
        const date: string = offer.publishedAt.split('T')[0];

        if (allTechnologies.indexOf(offer.technology) === -1) {
            allTechnologies.push(offer.technology);
        }

        if (amountsPerDay.hasOwnProperty(date) && amountsPerDay[date].hasOwnProperty(offer.technology)) {
            amountsPerDay[date][offer.technology].amount++;
        } else {
            if (!amountsPerDay.hasOwnProperty(date)) {
                amountsPerDay[date] = {};
            }
            amountsPerDay[date][offer.technology] = {amount: 1};
        }
    })

    for (const [date] of Object.entries(amountsPerDay)) {
        offersTimelineData.labels.push(date);
        allTechnologies.forEach((technology: string): void => {
            if (!offersTimelineData.technologies.hasOwnProperty(technology)) {
                offersTimelineData.technologies[technology] = [];
            }

            offersTimelineData.technologies[technology].push(
                amountsPerDay[date].hasOwnProperty(technology)
                    ? amountsPerDay[date][technology].amount
                    : 0
            );
        })
    }

    const datasets: ChartDatasets = [];
    Object.entries(offersTimelineData.technologies).forEach(
        ([technology, amounts]) => datasets.push({label: technology, data: amounts})
    );


    const data = {
        labels: offersTimelineData.labels,
        datasets: datasets
    };

    return <>
        <Line options={{}} data={data} />
    </>
}