'use client'

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const mapStyles = {
  width: '90%',
  height: '80%'
}

const customStyles = [
  {
    featureType: 'transit.station',
    elementType: 'labels.icon',
    stylers: [
      { visibility: 'off' }
    ]
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry.fill',
    stylers: [
      { visibility: 'off' }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.icon',
    stylers: [
      { visibility: 'off' }
    ]
  }
]

const LoadingContainer = (props) => (
    <div>Cargango el mapa .... wait men! </div>
)

const TestMap = () => {
  return (
        // The <Map></Map> need the following props
        // initialCenter={} will be the center on the Map
        <Map
            google={window.google}
            zoom={13}
            style={mapStyles}
            initialCenter={
                {
                  lat: 41.38879,
                  lng: 2.15899
                }
            }
            disableDefaultUI={true}
            zoomControl={false}
            clickableIcons={false}
            keyboardShortcuts={false}
            mapTypeControl={false}
            streetViewControl={false}
            fullscreenControl={false}
            styles={customStyles}
        >
           <Marker
              position={
                  {
                    lat: 41.38879,
                    lng: 2.16899
                  }
              }
              title={'The marker`s title will appear as a tooltip.'}
                name={'SOMA'}
                id={1}
                icon={{
                  url: '/mapLogo.png',
                  anchor: new window.google.maps.Point(32, 32),
                  scaledSize: new window.google.maps.Size(64, 64)
                }}
           />

        </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_HTLSBCN_MAP_API_KEY,
  LoadingContainer
})(TestMap)
