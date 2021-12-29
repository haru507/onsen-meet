import { signInAction, signOutAction } from "./actions";
import {isValidEmailFormat, isValidRequiredInput} from "../../function/common";
import {hideLoadingAction, showLoadingAction} from "../loading/actions";
import axios from 'axios';
import {push} from 'connected-react-router'
import { SPRING_URL } from "config/config";

interface SigninResponse {
    access_token: string,
    refresh_token: string
}
interface SigninUserResponse {
    id: number | string,
    email: string,
    username: string,
    roles: {
        id: number,
        name: string
    }
}

export const signUp = (username: string, email: string, password: string, confirmPassword: string) => {
    return async (dispatch: any) => {
        // Validations
        if(!isValidRequiredInput(username, email, password, confirmPassword)) {
            alert('必須項目が未入力です。');
            return false
        }
        if(!isValidEmailFormat(email)) {
            alert('メールアドレスの形式が不正です。もう1度お試しください。')
            return false
        }
        if (password !== confirmPassword) {
            alert('パスワードが一致しません。もう1度お試しください。')
            return false
        }
        if (password.length < 6) {
            alert('パスワードは6文字以上で入力してください。')
            return false
        }

        const userInitialData = {
            id: null,
            email: email,
            username: username,
            password: password
        };
        return axios.post(`${SPRING_URL.key}/api/user/save`, userInitialData ,{ headers: {'Content-Type': 'application/json;charset=utf-8', 'Access-Control-Allow-Origin': '*'} })
            .then(res => {
                console.log(res)
                const addtouser = {
                    username: username,
                    roleName: "ROLE_USER"
                }
                return axios.post(`${SPRING_URL.key}/api/role/addtouser`, addtouser, { headers: {'Content-Type': 'application/json;charset=utf-8', 'Access-Control-Allow-Origin': '*'} })
                    .then(res => {
                        console.log(res)
                        dispatch(push('/signin'))
                        alert("新規会員登録が完了しました。ログインを行ってください。")
                        dispatch(hideLoadingAction())
                    })
                    .catch(err => {
                        console.log(err)
                        dispatch(hideLoadingAction())
                    })
            })
            .catch(err => {
                console.log(err)
                dispatch(hideLoadingAction())
            })
    }
}

export const signIn = (username: string, password: string) => {
    return async (dispatch: any) => {
        dispatch(showLoadingAction("Sign in..."));
        if (!isValidRequiredInput(username, password)) {
            dispatch(hideLoadingAction());
            alert('メールアドレスかパスワードが未入力です。')
            return false
        }
        const params = new URLSearchParams();
        params.append("username", username)
        params.append("password", password)

        return axios.post<SigninResponse>(`${SPRING_URL.key}/api/login`, params)
            .then(res => {
                console.log(res.data.access_token)
                console.log(res.data.refresh_token)
                localStorage.setItem("access_token", res.data.access_token)
                localStorage.setItem("refresh_token", res.data.refresh_token)

                return axios.get<SigninUserResponse>(`${SPRING_URL.key}/api/user/${username}`, { headers: {Authorization: `Bearer ${localStorage.getItem("access_token")}`, 'Content-Type': 'application/json;charset=utf-8', 'Access-Control-Allow-Origin': '*'} })
                    .then(res => {
                        console.log(res)
                        dispatch(hideLoadingAction());
                        //Redux処理追加とログイン完了とHomeへの移動
                        dispatch(signInAction({
                            users: {
                                id: res.data.id,
                                email: res.data.email,
                                username: res.data.username,
                                roles: {
                                    id: res.data.roles.id,
                                    name: res.data.roles.name
                                },
                                isSignedIn: true
                            }
                        }))
                        dispatch(push('/'))
                        alert("サインインが完了しました。履歴画面と掲示板画面が使えるようになりました。。")
                    })
                    .catch( err => {
                        dispatch(hideLoadingAction());
                        console.log(err)
                    })
            })
            .catch(err => {
                dispatch(hideLoadingAction());
                console.log(err)
            })
    }
};

export const signOut = () => {
    return async (dispatch: any) => {
        dispatch(showLoadingAction("Sign out..."));

        // Sign out with Firebase Authentication
        dispatch(signOutAction());
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        dispatch(hideLoadingAction());
        dispatch(push('/signin'));
        alert("サインアウトしました。サインイン画面に進みます。")
    }
};

// リロード（F5キー）押下時にローカルストレージ内のJWTをチェックしてユーザを取得する。
export const listenAuthState = () => {
    // アクセストークンが拒否された場合、リフレッシュトークンを使ってアクセストークンの取得 かつ LocalStrageに保存
}