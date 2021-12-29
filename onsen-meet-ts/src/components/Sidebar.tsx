import React from "react";
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { SideList } from "./UIKit";
import { getUserId } from '../reducks/users/selectors';
import { useSelector } from "react-redux";
import { Users } from "reducks/users/types";

interface Props {
    open: boolean,
    onChange: () => void
}

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

const Sidebar = (props: Props) => {

    const classes = useStyles();
    const theme = useTheme();
    const selector = useSelector((state: Users) => state);
    const uid = getUserId(selector);

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={props.open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={props.onChange}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <SideList uid={uid} />
        </Drawer>
    )
}

export default Sidebar