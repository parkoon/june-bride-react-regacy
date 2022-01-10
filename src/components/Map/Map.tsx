import styled from '@emotion/styled'
import React, { useEffect } from 'react'

import useScript from '../../hooks/useScript'

const Wrapper = styled.div`
    width: 200px;
    height: 300px;
`
function Map() {
    const status = useScript(
        '//dapi.kakao.com/v2/maps/sdk.js?appkey=f753be8467ee03d9fcf3f85fc57bb200'
    )

    useEffect(() => {
        if (status === 'ready') {
            // window.kakao.maps.load(() => {
            //     console.log('kakao maps loaded')
            //     console.log(window.kakao)
            // })
            // const container = document.getElementById('map') // 지도를 담을 영역의 DOM 레퍼런스
            // const options = {
            //     // 지도를 생성할 때 필요한 기본 옵션
            //     center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
            //     level: 3, // 지도의 레벨(확대, 축소 정도)
            // }
            // const map = new window.kakao.maps.Map(container, options) // 지도 생성 및 객체 리턴
        }
    }, [status])

    return <Wrapper id="map" />
}

export default Map
