import axios from "axios";
import {UserProfile, UserProfileToken} from "../Models/User";
import {handleError} from "../Helpers/ErrorHandler";

const api = "https://localhost:8443";

export const loginAPI = async (email: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "/auth", {
            email: email,
            password: password,
        })
        return data;
    } catch (error) {
        handleError(error);
    }
}