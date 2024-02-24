import { Button } from '@nextui-org/react'
import styles from './HtlsMapMarkerDescription.module.css'
import classNames from 'classnames'
import { CloseIcon } from '../icons/CloseIcon'
import NavigationLink from '../NavigationLink'

export default function HtlsMapMarkerDescription ({ children, isOpen, onClose, marker }) {
  // const t = useTranslations('NavBar')
/*   const googleMapMarkerLink = marker?.googleMapsLink
 */ const mapMarkerDescriptionClassNames = classNames(styles.MapMarkerDescription, { [styles.IsOpen]: isOpen })

  return (
      <div className={mapMarkerDescriptionClassNames}>
        <Button className={ styles.Close } isPrimary onClick={ () => onClose() }>
            <CloseIcon />
        </Button>
        <p>
            <b>
            { marker?.name }
            </b>
        </p>
        <p>
            open on
        </p>
        <NavigationLink
            target="_blank"
            href={'/algo' || '/default'}
            rel="noreferrer"
        >
            Google Maps App
        </NavigationLink>
      </div>
  )
}
