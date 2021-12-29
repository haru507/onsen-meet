import React, { useEffect } from "react";
import {useDispatch} from "react-redux";
import { getCurrentPosition } from "../reducks/location/operations";
import { Swipers } from '../components/UIKit'
import Onsen from '../assets/images/onsen.png'
import Meat from '../assets/images/meat.png'
import SignUp from '../assets/images/signup.png'
import 'swiper/swiper-bundle.css'

const Home = () => {
    const dispatch = useDispatch()

    // LocalStrageの位置情報を取得する
    // 値が空の場合に、Reduxに登録する
    useEffect( () => {
        if ('geolocation' in navigator) {
            // dispatch(getCurrentPosition())
        }
    },[])

    return(
        <>
            <h1>Home</h1>
            <Swipers imageData={[Onsen, Meat, SignUp]} isAuto={true} clickable={true} />
            {/* 使い方、説明のUI */}
            <div>
                
            </div>
        </>
    )
}

export default Home;