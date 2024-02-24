'use client'
import classnames from 'classnames'
import styles from './HtlsMapMarker.module.css'

const maxZoom = 15

export default function HtlsMapMarker ({ id, Icon, name, zoom = 11, onChildClick, googleMapsLink }) {
  const onIconMarkerClick = () => {
    onChildClick({ id, name, googleMapsLink })
  }

  console.log('zoom aqui esss : ', zoom)
  const inconsMarkersClassNames = classnames(styles.MarkerIcon, { [styles.Zoomed]: zoom > maxZoom })

  return (
      <div className={styles.MapMarker}>
          {Icon && <Icon className={inconsMarkersClassNames} onClick={onIconMarkerClick}/>}
          { name && <p className='text-black'>{ name }</p>}
      </div>
  )
}
