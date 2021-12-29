import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from "react-redux";
import { getUsername } from '../reducks/users/selectors';
import { IconDisp } from './UIKit';
import { Users } from 'reducks/users/types';

interface Props {
    open: boolean,
    onChange: () => void
}

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
}));

const Header = (props: Props) => {
    const classes = useStyles();
    const selector = useSelector((state: Users) => state);
    const username = getUsername(selector)

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: props.open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.onChange}
                    edge="start"
                    className={clsx(classes.menuButton, props.open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    温泉と焼肉探しのアプリ
                </Typography>

                <div style={{ flexGrow: 1 }}></div>
                {username === "" ? <></> : <IconDisp username={username} />}
            </Toolbar>
        </AppBar>
    )
}

export default Header;