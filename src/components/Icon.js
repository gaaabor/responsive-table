import React from 'react'

import sprite from '@assets/icons/icons.svg'

const Icon = ({ block, name }) => (
  <svg className={`${block}__icon icon`}>
    <use xlinkHref={`${sprite}#icon-${name}`} />
  </svg>
)

export default Icon
