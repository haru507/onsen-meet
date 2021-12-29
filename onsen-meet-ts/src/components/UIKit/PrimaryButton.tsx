import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles, Theme} from "@material-ui/core/styles";
import {createStyles} from "@material-ui/core";

interface Props {
    className?: string,
    variant?: string,
    label: string,
    isButtonChanged: boolean,
    onClick: () => void,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        "button": {
            backgroundColor: theme.palette.primary.main,
            color: '#000',
            fontSize: 16,
            height: 48,
            marginBottom: 16,
            width: 256,
            "&:hover": {
                backgroundColor: theme.palette.primary.light,
            }
        },
        "button2": {
            backgroundColor: theme.palette.primary.main,
            color: '#000',
            fontSize: 8,
            height: 24,
            marginBottom: 16,
            width: 100,
            "&:hover": {
                backgroundColor: theme.palette.primary.light,
            }
        },
    })
)

const PrimaryButton = (props: Props) => {
    const classes = useStyles()

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
            {props.isButtonChanged ? lButton() :sButton()}
        </>
    );
};

export default PrimaryButton;