type _Config = {
    key: string
}

export const GOOGLE_APIKEY: _Config = {
    key: process.env.REACT_APP_GOOGLE_APIKEY || ""
}

export const SPRING_URL: _Config = {
    key: process.env.REACT_APP_SPRING_URL || ""
}

export const HOTPEPPER_URL: _Config = {
    key: process.env.REACT_APP_HOTPEPPER_URL || ""
}

export const HOTPEPPER_URL_TAIL: _Config = {
    key: process.env.REACT_APP_HOTPEPPER_URL_TAIL || ""
}