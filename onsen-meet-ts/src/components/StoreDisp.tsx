import React from 'react'
import { InfoWindow, Marker } from "@react-google-maps/api";
import { ListsType } from 'templates/StoreSearch';

interface Props {
    lists: ListsType[],
    size: any,
    onChange: (i: number, bool: boolean) => void
}

const StoreDisp = (props: Props) => {

    const infoWindowOptions = {
        pixelOffset: props.size,
    };

    return(
        <>
        {
            props.lists.map((list, i) => (
                <div key={i}>
                    <Marker position={list.location} onMouseOver={() => props.onChange(i, true)}  />
                    {list.isShow ? (
                        <InfoWindow position={list.location} options={infoWindowOptions} onCloseClick={() => props.onChange(i, false)}>
                            <div  style={{ width: "150px" }}>
                                <p style={{fontSize: 1,}}>{list.name}</p>
                                <p style={{fontSize: 1,}}>{`相場: ${list.budget}`}</p>
                                <p><a style={{fontSize: 1,lineHeight: 0,}} href={list.url} target="_blank" rel="noreferrer noopener">サイトを見る</a></p>
                                <p><a style={{fontSize: 1,lineHeight: 0,}} href={`https://www.google.com/maps/search/?api=1&query=${list.location.lat},${list.location.lng}`} target="_blank" rel="noreferrer noopener">ここへ行く</a></p>
                            </div>
                        </InfoWindow>
                    ) : <></>}
                </div>
            ))
        }
        </>
    )
}

export default StoreDisp