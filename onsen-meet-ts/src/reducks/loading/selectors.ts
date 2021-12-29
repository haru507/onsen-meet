import { createSelector } from "reselect";
import { Loading } from "./types";

const loadingSelector = (state: Loading) => state.loading;

export const getLoadingState = createSelector(
    [loadingSelector],
    state => state.state
);

export const getLoadingText = createSelector(
    [loadingSelector],
    state => state.text
)