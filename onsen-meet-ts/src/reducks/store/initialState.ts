export const initialState = {
    loading: {
        state: false,
        text: ""
    },
    users: {
        id: "",
        email: "",
        username: "",
        roles: {
            id: 0,
            name: ""
        },
        isSignedIn: false
    },
    location: {
        lat: "",
        log: ""
    }
};