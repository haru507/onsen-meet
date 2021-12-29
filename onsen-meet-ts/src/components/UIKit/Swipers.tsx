import React from "react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Autoplay, Navigation]);

interface Props {
    imageData: string[],
    isAuto: boolean,
    clickable: boolean
}

const Swipers = (props: Props) => {
    return(
        <Swiper
            pagination={{ clickable: props.clickable }}
            navigation
            autoplay={props.isAuto}
            loop={true}
            style={{width: '1000px'}}
        >
            {/* 画像を表示する */}
            {props.imageData.map( (imageName, i) => (
                <SwiperSlide style={{textAlign: 'center'}} key={`${imageName}${i}`}>
                    <img width={900} height={300} src={imageName} alt="foto" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Swipers;