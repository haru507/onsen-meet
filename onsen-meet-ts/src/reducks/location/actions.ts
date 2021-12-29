import { Location } from "./types";

export const LOCATION = "LOCATION";
export const locationAction = (location: Location) => {
    return {
        type: "LOCATION",
        payload: location
    }
};