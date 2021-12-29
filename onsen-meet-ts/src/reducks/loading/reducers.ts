import * as Actions from './actions';
import {initialState} from '../store/initialState';
import { LoadingAction } from './types';

export const LoadingReducer = (state = initialState.loading, action: LoadingAction)  => {
    switch (action.type) {
        case Actions.HIDE_LOADING:
            return {
                ...state,
                ...action.payload
            };
        case Actions.SHOW_LOADING:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
};