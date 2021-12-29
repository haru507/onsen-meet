export interface Users {
    users: {
        id: number | string,
        email: string,
        username: string,
        roles: {
            id: number,
            name: string,
        },
        isSignedIn: boolean
    }
}

export interface UsersAction {
    type: string,
    payload: Users
}