import * as Actions from './actions';
import { initialState } from '../store/initialState';
import { LocationAction } from './types';

export const LocationReducer = (state = initialState.location, action: LocationAction)  => {
    switch (action.type) {
        case Actions.LOCATION:
            return {
                ...action.payload
            };
        default:
            return state
    }
};