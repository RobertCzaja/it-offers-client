import axios from "axios";
import {AxiosFactory} from "../../Helpers/AxiosFactory";
import {ApiRoutes} from "../../Helpers/ApiRoutes";

export const FetchReportSalaries = async () => {
    return await axios(AxiosFactory(ApiRoutes.REPORT_SALARIES())).then(response => response.data);
}