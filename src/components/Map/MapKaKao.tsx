import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import { lat, lng } from './constants'

declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
        kakao: any
    }
}

const Wrapper = styled.div<{ visible?: boolean }>`
    width: 100%;
    height: 70vh;

    margin-top: 24px;

    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 12px;

    transition: 0.7s;
    ${({ visible }) =>
        visible
            ? css`
                  transform: translateY(0);
                  opacity: 1;
              `
            : css`
                  transform: translateY(40px);
                  opacity: 0;
              `}
`

const { kakao } = window

type MapKakaoProps = {
    visible?: boolean
}
function MapKaKao({ visible }: MapKakaoProps) {
    useEffect(() => {
        const mapContainer = document.getElementById('map') // 지도를 표시할 div
        const mapOption = {
            center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
            level: 4, // 지도의 확대 레벨
        }

        const map = new kakao.maps.Map(mapContainer, mapOption) // 지도를 생성합니다

        // const imageSrc =
        //     'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png' // 마커이미지의 주소입니다
        // const imageSize = new kakao.maps.Size(64, 69) // 마커이미지의 크기입니다
        // const imageOption = { offset: new kakao.maps.Point(27, 69) } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        // const markerImage = new kakao.maps.MarkerImage(
        //     imageSrc,
        //     imageSize,
        //     imageOption
        // )

        // map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)

        const markerPosition = new kakao.maps.LatLng(lat, lng) // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            position: markerPosition,
            // image: markerImage, // 마커이미지 설정
        })

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map)
    }, [])

    return <Wrapper id="map" visible={visible} />
}

export default MapKaKao
