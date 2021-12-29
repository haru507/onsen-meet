import { locationAction } from "./actions";

// LocalStrageに位置情報を格納する。
export const getCurrentPosition = () => {
    return async (dispatch: any) => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude
            const lng = position.coords.longitude

            if(!lat && !lng){
                dispatch(locationAction({location: {lat, lng }}))
                // ここらへん
            }
        });
    }
};