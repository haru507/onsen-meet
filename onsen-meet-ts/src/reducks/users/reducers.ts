import * as Actions from './actions';
import {initialState} from '../store/initialState';
import { UsersAction } from './types';

export const UsersReducer = (state = initialState.users, action: UsersAction)  => {
    switch (action.type) {
        case Actions.SIGN_IN:
            return {
                ...state,
                ...action.payload
            };
        case Actions.SIGN_OUT:
            return {
                ...initialState.users,
            };
        default:
            return state
    }
};