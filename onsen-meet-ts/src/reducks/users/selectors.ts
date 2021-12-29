import { createSelector } from "reselect";
import { Users } from "./types";

const usersSelector = (state: Users) => state.users;

export const getSignedIn = createSelector(
    [usersSelector],
    state => state.isSignedIn
);

export const getUsername = createSelector(
    [usersSelector],
    state => state.username
);

export const getUserId = createSelector(
    [usersSelector],
    state => state.id
);