import { createSelector } from "reselect";
import { Location } from "./types";

const locationSelector = (state: Location) => state.location;

export const getLocation = createSelector(
    [locationSelector],
    state => state
);