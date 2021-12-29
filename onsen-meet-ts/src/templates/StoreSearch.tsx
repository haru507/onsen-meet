import React, { useState, useEffect, useCallback } from "react";
import { GoogleMap, LoadScript, InfoWindow, Marker } from "@react-google-maps/api";
import { PrimaryButton, SelectBox, RadioButton } from "components/UIKit";
import axios from "axios";
import { StoreDisp } from "components";
import {useSelector} from "react-redux";
import {getLocation} from "reducks/location/selectors";
import { meetList, onsenList, radioList, rangeList } from "assets/js/data";
import { Location } from 'reducks/location/types'
import { GOOGLE_APIKEY, HOTPEPPER_URL, HOTPEPPER_URL_TAIL } from "config/config";

interface Position {
  lat: number,
  lng: number
}

export interface ListsType {
  name: string,
  location: {
    lat: number,
    lng: number
  },
  isShow: Boolean,
  url: string,
  budget: string
}

const containerStyle = {
  height: "90vh",
  width: "100%",
};

const StoreSearch = () => {
  const [size, setSize] = useState<google.maps.Size>();
  // const [onsen, setOnsen] = useState<string>("")
  const [meet, setMeet] = useState<string>("")
  const [lists, setLists] = useState<ListsType[]>([])
  const [position, setPosition] = useState<Position>({ lat: 35.6902292, lng: 139.6991842})
  const [isRadio, setIsRadio] = useState<string>("true")
  const [isZoom, setIsZomm] = useState<boolean>(false)

  const selector = useSelector((state: Location) => state);
  const location = getLocation(selector)

  const infoWindowOptions = {
    pixelOffset: size,
  };

  // 位置情報の取得
  useEffect( () => {
    if( location.lat && location.lng ) {
      setPosition({lat: location.lat, lng: location.lng})
    }
  },[location])

  const createOffsetSize = () => {
    return setSize(new window.google.maps.Size(0, -45));
  };

  const SearchStore = () => {
    let url1
    if (isRadio === "true"){
      url1 = `${HOTPEPPER_URL.key}&large_area=${meet}${process.env.REACT_APP_HOTPEPPER_URL_TAIL}`
    }else {
      url1 = `${HOTPEPPER_URL_TAIL.key}&lat=${position.lat}&lng=${position.lng}&range=${meet}${process.env.REACT_APP_HOTPEPPER_URL_TAIL}`
    }
    axios.get<any>(url1)
      .then(res => {
        console.log(res.data.results.shop)
        if(res.data.results.shop.length === 0){
          alert('結果が0件です。')
        }
        const dummyLists: ListsType[] = []
        res.data.results.shop.map((list: any) => {
          return dummyLists.push({name: list.name, location: {lat: list.lat, lng: list.lng}, isShow: false, url: list.urls.pc, budget: list.budget.average })
        })
        setLists(dummyLists)
        setIsZomm(true)
      })
  }

  const onMouse = useCallback((i, bool) => {
    let dummyLists: ListsType[] = Object.assign([], lists);
    dummyLists[i].isShow = bool
    setLists(dummyLists)
  }, [lists])

  const changeSelectBox = () => {
    if (isRadio === "true") {
      return <SelectBox label={"焼肉広エリア"} options={meetList} required={true} select={setMeet} value={meet} />
    }else {
      return  <SelectBox label={"焼肉狭エリア"} options={rangeList} required={true} select={setMeet} value={meet} />
    }
  }

  return (
    <>
      <RadioButton value={isRadio} lists={radioList} title={"範囲選択"} select={setIsRadio} />
      {changeSelectBox()}
      <PrimaryButton
        label={"検索"} onClick={SearchStore} isButtonChanged={true}
      />
      <LoadScript googleMapsApiKey={GOOGLE_APIKEY.key} onLoad={() => createOffsetSize()}>
        <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={isZoom ? 19 : 15}>
          {lists && <StoreDisp lists={lists} size={size} onChange={onMouse}  />}
          {position && (
            <><Marker position={position} />
            <InfoWindow position={position} options={infoWindowOptions}>
              <div>
                <h1>現在位置</h1>
              </div>
            </InfoWindow></>
          )}
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default StoreSearch;