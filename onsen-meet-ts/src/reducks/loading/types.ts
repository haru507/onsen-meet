export interface Loading {
    loading: {
        state: boolean,
        text: string
    }
}

export interface LoadingAction {
    type: string,
    payload: Loading
}