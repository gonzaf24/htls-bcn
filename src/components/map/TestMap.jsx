'use client'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import styles from './TestMap.module.css'
import { useEffect, useState } from 'react'

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

const TestMap = ({ google, locale, loaded, places = [] }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (google && locale && loaded && !mounted) {
      setMounted(true)
    }
  }, [google, loaded, locale, mounted])

  return (
    mounted && (
      <Map
        google={window.google}
        zoom={13}
        maxZoom={17}
        minZoom={13}
        style={mapStyles}
        initialCenter={{
          lat: 41.38879,
          lng: 2.15899
        }}
        disableDefaultUI={true}
        zoomControl={false}
        clickableIcons={false}
        keyboardShortcuts={false}
        mapTypeControl={false}
        streetViewControl={false}
        fullscreenControl={false}
        styles={customStyles}
      >
        { places.map((place) => {
          return <Marker
            key={place.id}
            position={{
              lat: place.lat,
              lng: place.lng
            }}
            title={place.name}
            name={place.name}
            id={place.id}
            icon={{
              url: place.icon,
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(25, 25)
            }}
          />
        })
        }
      </Map>
    )
  )
}

export { TestMap }

export default GoogleApiWrapper(
  (props) => {
    return ({
      apiKey: process.env.NEXT_PUBLIC_HTLSBCN_MAP_API_KEY,
      language: props.locale,
      LoadingContainer: () => (
        <div className='h-[80%] w-full flex flex-col gap-y-10 justify-items-center items-center justify-center'>
          <div className={styles.loader}/>
          <div className={styles.loaderBar}/>
        </div>
      )
    })
  }
)(TestMap)
