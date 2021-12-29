import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import {push} from "connected-react-router"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import HistoryIcon from '@mui/icons-material/History';
import PopOver from "./PopOver";
import { signOut } from '../../reducks/users/operations'

interface Props {
    uid: string | number
}

const SideList = (props: Props) => {
    const dispatch = useDispatch()
    const uid = props.uid
    console.log(uid)

    const [anchorEl, setAnchorEl] = React.useState<any>(null);

    const handleClick = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, [setAnchorEl]);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, [setAnchorEl]);

    const handleSignupAndSignin = useCallback((url: string) => {
        dispatch(push(url))
        setAnchorEl(null)
    },[dispatch]);

    const handleSignout = useCallback(() => {
        dispatch(signOut())
        setAnchorEl(null)
    },[dispatch]);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const showSigninSignUp = () => {
        return(
            <>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <PersonAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="新規登録/ログイン" />
                </ListItem>
                <PopOver
                    id={id} open={open} anchorEl={anchorEl} onClose={handleClose} onClick2={() => handleSignupAndSignin('/signin')}
                    label1="サインイン" label2="サインアップ" isButtonChanged={false} onClick={() => handleSignupAndSignin('/signup')}
                />
            </>
        )
    }

    const showSignOut = () => {
        return(
            <>
                <ListItem button >
                    <ListItemIcon>
                        <ModeEditIcon />
                    </ListItemIcon>
                    <ListItemText primary="掲示板" />
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemIcon>
                        <HistoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="履歴" />
                </ListItem>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <PersonAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="ログアウト" />
                </ListItem>
                <PopOver
                    id={id} open={open} anchorEl={anchorEl} onClose={handleClose} onClick2={handleClose}
                    label1="戻る" label2="サインアウト" isButtonChanged={true} onClick={() => handleSignout()}
                />
            </>
        )
    }

    return(
        <List>
            <ListItem button onClick={() => dispatch(push('/'))}>
                <ListItemIcon>
                    <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="ホーム" />
            </ListItem>
            <Divider />
            <ListItem button onClick={() => dispatch(push('/storesearch'))}>
                <ListItemIcon>
                    <LocationSearchingIcon />
                </ListItemIcon>
                <ListItemText primary="お店検索" />
            </ListItem>
            <Divider />
            {!uid ? showSigninSignUp() : showSignOut()}
            <Divider />
        </List>
    )
}

export default SideList