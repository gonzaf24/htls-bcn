'use client'

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const mapStyles = {
  width: '100%',
  height: '100%'
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

const TestMap = (props) => {
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
                  url: '/icons/AvocadoIcon.svg',
                  anchor: new props.google.maps.Point(15, 15),
                  scaledSize: new props.google.maps.Size(30, 30)
                }}
           />

        </Map>
  )
}

// Exporta el componente TestMap al final del archivo
export { TestMap }

// Envuelve el componente TestMap con GoogleApiWrapper en el lugar donde lo estés importando
export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_HTLSBCN_MAP_API_KEY,
  LoadingContainer: () => <div>Fancy loading container!</div>
})(TestMap)
