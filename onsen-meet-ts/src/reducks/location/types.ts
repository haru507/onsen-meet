export interface Location {
    location: {
        lat: number,
        lng: number,
    }
}

export interface LocationAction {
    type: string,
    payload: Location
}