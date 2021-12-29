import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles, Theme} from "@material-ui/core/styles";
import {createStyles} from "@material-ui/core";

interface Props {
    label: string,
    isButtonChanged: boolean,
    onClick: () => void,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        "button": {
            backgroundColor: theme.palette.grey["300"],
            fontSize: 8,
            height: 24,
            marginBottom: 16,
            width: 50
        },
        "button2": {
            backgroundColor: theme.palette.grey["300"],
            fontSize: 8,
            height: 24,
            marginBottom: 16,
            width: 100,
        },
    })
)

const GreyButton = (props: Props) => {
    const classes = useStyles();

    const isButtonChanged = props.isButtonChanged

    const lButton = () => {
        return(
            <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
                {props.label}
            </Button>
        )
    }

    const sButton = () => {
        return(
            <Button className={classes.button2} variant="contained" onClick={() => props.onClick()}>
                {props.label}
            </Button>
        )
    }

    return (
        <>
            {isButtonChanged ? lButton() : sButton()}
        </>
    );
};

export default GreyButton;