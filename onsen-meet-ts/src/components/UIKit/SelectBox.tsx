import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Lists } from "assets/js/data";

interface Props {
    label: string,
    options: Lists[],
    required: boolean,
    value: string,
    select: (e: any) => void
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginBottom: 16,
        minWidth: 120,
        width: "20%"
    }
}));

const SelectBox = (props: Props) => {
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
            <InputLabel >{props.label}</InputLabel>
            <Select
                value={props.value} required={props.required}
                onChange={(e) => props.select(e.target.value)}
            >
                {props.options.map((value) => {
                    return <MenuItem key={value.id} value={value.id}>{value.name}</MenuItem>
                })}
            </Select>
        </FormControl>
    );
};

export default SelectBox;