import React from 'react'
import { Popover } from '@material-ui/core'
import { GrayButton, PrimaryButton } from '.'

interface Props{
  id: any,
  open: boolean,
  anchorEl: any,
  label1: string,
  label2: string,
  isButtonChanged: boolean,
  onClose: () => void,
  onClick: () => void,
  onClick2: () => void
}

const PopOver = (props: Props) => {

    return(
        <Popover
        id={props.id}
        open={props.open}
        anchorEl={props.anchorEl}
        onClose={props.onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <GrayButton
            label={props.label1}
            onClick={props.onClick2}
            isButtonChanged={props.isButtonChanged}
        />
        <PrimaryButton
            label={props.label2}
            onClick={props.onClick}
            isButtonChanged={false}
        />
      </Popover>
    )
}

export default PopOver