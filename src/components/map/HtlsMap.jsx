'use client'
import getRequestApiTestData from '@/app/lib/data'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { useTranslations } from 'next-intl'
import { HtlsMapLoading } from './HtlsMapLoading'

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

const HtlsMap = async ({ google, places }) => {
  const t = useTranslations('MapPage')
  console.log('t', t('title'))

  await getRequestApiTestData()

  return (
    <Map
        google={google}
        zoom={13}
        maxZoom={17}
        minZoom={13}
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
        fullscreenControl={true}
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
              anchor: new google.maps.Point(15, 15),
              scaledSize: new google.maps.Size(25, 25)
            }}
            />
        })
        }
  </Map>
  )
}

export { HtlsMap }

export default GoogleApiWrapper(
  (props) => {
    return ({
      apiKey: process.env.NEXT_PUBLIC_HTLSBCN_MAP_API_KEY,
      language: props.locale,
      LoadingContainer: () => <HtlsMapLoading/>
    })
  }
)(HtlsMap)
