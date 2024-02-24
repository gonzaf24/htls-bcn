'use client'

import { useState } from 'react'
import { Checkbox } from '@nextui-org/react'
import { BeachIcon } from '../icons/BeachIcon'
import { AvocadoIcon } from '../icons/AvocadoIcon'
import { BurguerIcon } from '../icons/BurguerIcon'
import { SushiIcon } from '../icons/SushiIcon'
import { BarIcon } from '../icons/BarIcon'
import styles from './HtlsMapFilters.module.css'

export default function HtlsMapFilters ({ children, onFilterChange, filters, closeDescription }) {
  const [cat0Checked, setCat0Checked] = useState(true)
  const [cat1Checked, setCat1Checked] = useState(true)
  const [cat2Checked, setCat2Checked] = useState(true)
  const [cat3Checked, setCat3Checked] = useState(true)
  const [cat4Checked, setCat4Checked] = useState(true)

  const handleCat0Change = e => {
    const isChecked = e.target.checked
    setCat0Checked(e.target.checked)
    onFilterChange(0, isChecked)
    closeDescription()
  }

  const handleCat1Change = e => {
    const isChecked = e.target.checked
    setCat1Checked(e.target.checked)
    onFilterChange(1, isChecked)
    closeDescription()
  }

  const handleCat2Change = e => {
    const isChecked = e.target.checked
    setCat2Checked(e.target.checked)
    onFilterChange(2, isChecked)
    closeDescription()
  }

  const handleCat3Change = e => {
    const isChecked = e.target.checked
    setCat3Checked(e.target.checked)
    onFilterChange(3, isChecked)
    closeDescription()
  }

  const handleCat4Change = e => {
    const isChecked = e.target.checked
    setCat4Checked(e.target.checked)
    onFilterChange(4, isChecked)
    closeDescription()
  }

  return (
      <div className={ styles.HtlsMapFilters }>
        <div className={ styles.Wrapper }>
            <BeachIcon className={ styles.Icon } />
            <Checkbox isSelected={ cat0Checked } onChange={ handleCat0Change }/>
        </div>
        <div className={ styles.Wrapper }>
            <AvocadoIcon className={ styles.Icon } />
            <Checkbox isSelected={ cat1Checked } onChange={ handleCat1Change }/>
        </div>
        <div className={ styles.Wrapper }>
            <BurguerIcon className={ styles.Icon } />
            <Checkbox isSelected={ cat2Checked } onChange={ handleCat2Change }/>
        </div>
        <div className={ styles.Wrapper }>
            <SushiIcon className={ styles.Icon } />
            <Checkbox isSelected={ cat3Checked } onChange={ handleCat3Change }/>
        </div>
        <div className={ styles.Wrapper }>
            <BarIcon className={ styles.Icon } />
            <Checkbox isSelected={ cat4Checked } onChange={ handleCat4Change }/>
        </div>
      </div>
  )
}
