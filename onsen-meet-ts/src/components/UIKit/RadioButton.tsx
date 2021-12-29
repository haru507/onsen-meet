import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ListsBool } from 'assets/js/data';

interface Props {
    value: string,
    lists: ListsBool[],
    title: string,
    select: (e: any) => void
}

const RadioButton = (props: Props) => {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{props.title}</FormLabel>
            <RadioGroup value={props.value} onChange={(e) => props.select(e.target.value)} row name="row-radio-buttons-group">
                {
                    props.lists.map( (list, i) => (
                        <FormControlLabel key={`${list.name}${i}`} value={list.id} control={<Radio />} label={list.name} />
                    ))
                }
            </RadioGroup>
        </FormControl>
    )
}

export default RadioButton