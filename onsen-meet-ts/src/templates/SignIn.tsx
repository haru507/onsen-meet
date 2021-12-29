import React, {useState, useCallback} from 'react';
import {PrimaryButton, TextInput} from "../components/UIKit";
import {useDispatch} from "react-redux";
import {signIn} from "../reducks/users/operations";
import {push} from "connected-react-router"

const SignIn = () => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const inputUsername = useCallback((e) => {
        setUsername(e.target.value)
    },[setUsername]);

    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
    },[setPassword]);

    return (
        <div className="c-section-container">
            <h2 className="u-text-center u-text__headline">ログイン</h2>
            <div className="module-spacer--medium" />
            <TextInput
                fullWidth={true} label={"ユーザ名"} multiline={false} required={true}
                rows={1} value={username} type={"text"} onChange={inputUsername}
            />
            <TextInput
                fullWidth={true} label={"パスワード"} multiline={false} required={true}
                rows={1} value={password} type={"password"} onChange={inputPassword}
            />
            <div className="module-spacer--medium" />
            <div className="center">
                <PrimaryButton label={"ログイン"} onClick={() => dispatch(signIn(username, password))} isButtonChanged={true} />
                <div className="module-spacer--small" />
                <p className="u-text-small" onClick={() => dispatch(push('/signin/reset'))}>パスワードを忘れた方はこちら</p>
                <p className="u-text-small" onClick={() => dispatch(push('/signup'))}>アカウント登録がまだですか？</p>
            </div>
        </div>
    );
};

export default SignIn;