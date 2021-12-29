import React from "react";
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

interface Props {
    username: string
}

const IconDisp = (props: Props) => {
    return (
        <Avatar sx={{ bgcolor: red[500] }}>
            {props.username[0]}
        </Avatar>
    )
}

export default IconDisp