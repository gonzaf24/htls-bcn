'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { Button } from '@nextui-org/react'
import GoogleMapReact from 'google-map-react'
import HtlsMapMarker from './HtlsMapMarker'
import HtlsMapFilters from './HtlsMapFilters'
import HtlsMapMarkerDescription from './HtlsMapMarkerDescription'
import useOpenToggle from '../hooks/useOpenToggle'
import styles from './HtlsMap.module.css'
import { HereIAmIcon } from '../icons/HereIAmIcon'

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}
const defaultMapProps = {
  zoom: 13,
  options: {
    maxZoom: 18,
    minZoom: 13,
    disableDefaultUI: true,
    clickableIcons: false,
    keyboardShortcuts: false, // Desactiva el botón de "Keyboard shortcuts"
    mapTypeControl: false, // Desactiva el control de tipo de mapa
    streetViewControl: false, // Desactiva el control de vista de calle
    fullscreenControl: false, // Desactiva el control de pantalla completa
    zoomControl: false, // Desactiva el control de zoom
    styles: [
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
  }
}
const barcelonaBounds = {
  north: 41.465, // Latitud máxima
  south: 41.307, // Latitud mínima
  east: 2.229, // Longitud máxima
  west: 2.034 // Longitud mínima
}
const isLocationInBarcelona = (latA, lngA, bounds) => {
  const withinLatBounds = latA >= bounds.south && latA <= bounds.north
  const withinLngBounds = lngA >= bounds.west && lngA <= bounds.east
  return withinLatBounds && withinLngBounds
}

export default function HtlsMap ({ children, title, dataPlaces }) {
  // const t = useTranslations('NavBar')
  const [center, setCenter] = useState({ lat: 41.38879, lng: 2.15899 }) // Coordenadas iniciales
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [zoomSize, setZoomSize] = useState(11) // Estado para almacenar el zoom actual
  const [selectedMarker, setSelectedMarker] = useState(null) // Estado para almacenar el marcador seleccionado

  const {
    isOpen: isOpenMarker,
    open: openMarker,
    close: closeMarker
  } = useOpenToggle(false)

  const [filterStates, setFilterStates] = useState({
    cat0: true,
    cat1: true,
    cat2: true,
    cat3: true,
    cat4: true
  })

  const handleFilterChange = (index, isChecked) => {
    // Actualizamos el estado de los filtros
    setFilterStates(prevState => ({
      ...prevState,
      [`cat${index}`]: isChecked
    }))
  }

  const onChildClick = markerData => {
    setSelectedMarker(markerData)
    openMarker()
  }

  const success = useCallback(pos => {
    const crd = pos.coords
    setLat(crd.latitude)
    setLng(crd.longitude)
  }, [])

  const errors = err => {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(result => {
          if (result.state === 'granted') {
            // If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success, errors, options)
          } else if (result.state === 'prompt') {
            // If prompt then the user will be asked to give permission
            navigator.geolocation.getCurrentPosition(success, errors, options)
          } else if (result.state === 'denied') {
            // If denied then you have to show instructions to enable location
          }
        })
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
  }, [success])

  const markersDataOut = useMemo(() => {
    console.log('entro a recalcular')
    const filteredMarkers = dataPlaces.filter(marker => {
      // Filtramos los marcadores según el estado de los filtros
      if (filterStates.cat0 && marker.cat === 0) {
        return true
      }
      if (filterStates.cat1 && marker.cat === 1) {
        return true
      }
      if (filterStates.cat2 && marker.cat === 2) {
        return true
      }
      if (filterStates.cat3 && marker.cat === 3) {
        return true
      }
      if (filterStates.cat4 && marker.cat === 4) {
        return true
      }
      return false
    })

    console.log('zoomSize ', zoomSize)

    // Mapeamos los marcadores filtrados
    const markers = filteredMarkers.map(marker => (
      <HtlsMapMarker
        key={ marker.id }
        googleMapsLink={ marker.googleMapsLink }
        /* Icon={ marker.Icon } */
        id={ marker.id }
        lat={ marker.lat }
        lng={ marker.lng }
        name={ marker.name }
        zoom={ zoomSize }
        onChildClick={ onChildClick }
      />
    ))

    console.log('markers ', markers)

    markers.push(<HtlsMapMarker key={ lat + 5555 } Icon={ HereIAmIcon } lat={ lat } lng={ lng } />)

    return markers
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterStates.cat0, filterStates.cat1, filterStates.cat2, filterStates.cat3, filterStates.cat4, zoomSize, lat, lng])

  const isInBarcelonaBounds = useMemo(() => isLocationInBarcelona(lat, lng, barcelonaBounds), [lat, lng])

  const onCenterMapClick = () => {
    if (isInBarcelonaBounds) {
      setCenter({ lat, lng })
    }
  }

  const onPosChange = prop => {
    setZoomSize(prop.zoom)
    setCenter(prop.center)
  }

  return (
      <div className={styles.HtlsMap}>
        <HtlsMapFilters closeDescription={ closeMarker } onFilterChange={ handleFilterChange } />
        <div className={ styles.Container }>
            <Button className={ styles.MyLocation } isDisabled={ !isInBarcelonaBounds } onClick={ onCenterMapClick }>
            CENTER
            </Button>
            <GoogleMapReact
              bootstrapURLKeys={ { key: 'AIzaSyDFo6qtk5D2zk6T5vFvufWCJzz31MFC4Vk' } }
              center={ center }
              defaultCenter={ center }
              defaultZoom={ defaultMapProps.zoom }
              options={ defaultMapProps.options }
              onChange={ onPosChange }
              >
             {markersDataOut}
            </GoogleMapReact>
            <HtlsMapMarkerDescription isOpen={ isOpenMarker } marker={ selectedMarker } onClose={ closeMarker } />
        </div>
      </div>
  )
}
