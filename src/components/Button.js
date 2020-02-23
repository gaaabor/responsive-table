import React from 'react'

import Icon from './Icon'
import useWindowDimensions from '../helpers/useWindowDimensions'

const Button = ({ text, type, className, icon }) => {
  const { width } = useWindowDimensions()

  return (
    <a href="#" className={`btn btn--${type} ${className}`}>
      {width > 960 || type === 'ghost' ? text : <Icon name={icon} />}
    </a>
  )
}

export default Button
