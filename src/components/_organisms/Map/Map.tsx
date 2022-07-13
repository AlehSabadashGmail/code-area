import React from 'react'
import { YMaps, Map as DefaultMap, Placemark } from 'react-yandex-maps'
import { mapState } from 'src/helper/helper'

export const Map = () => {
  return (
    <YMaps query={{ lang: 'en_RU' }}>
      <div>
        <DefaultMap state={mapState} className="map">
          <Placemark geometry={[59.865027, 30.373711]} />
        </DefaultMap>
      </div>
    </YMaps>
  )
}
