export interface Lists {
    id: string,
    name: string
}

export interface ListsBool {
    id: boolean,
    name: string
}

export const onsenList: Lists[] = [
    {"id": "", "name": ""},
    {"id": "", "name": ""},
    {"id": "", "name": ""}
]

export const meetList: Lists[] = [
    {"id": "Z011", "name": "東京全般"},
]

export const radioList: ListsBool[] = [
    {"id": true, "name": "広い地域"},
    {"id": false, "name": "現在地からの半径"},
]

export const rangeList: Lists[] = [
    {"id": "1", "name": "300m"},
    {"id": "2", "name": "500m"},
    {"id": "3", "name": "1km"},
    {"id": "4", "name": "2km"},
    {"id": "5", "name": "3km"},
]